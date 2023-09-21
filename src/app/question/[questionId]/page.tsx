"use client"
import {useGetQuestion} from "@/hooks/auth/useGetQuestion";
import {ChangeEvent, useEffect, useState} from "react";
import {useAddComment} from "@/hooks/auth/useAddComment";
import {useAuthUser} from "@/hooks/auth/useAuthUser";
import {Comment, Question} from "@/types/question";
import {useGetCommentList} from "@/hooks/auth/useGetCommentList";
import {useGetCommentCount} from "@/hooks/auth/useGetCommentCount";
import getUpdateTime from "@/util/date";

const comments:Comment[] = []
const _question:Question = {
  _id:"",
  username:"",
  title:"",
  abstract:"",
  text:"",
  tags:"",
  date:"",
}
const Page = ({params}:{params:{questionId:string}})=>{

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const commentsPerPage = 5;

  const [question, setQuestion] = useState(_question)
  const [commentList, setCommentList] = useState(comments)
  const [commentText, setCommentText] = useState('')

  const [subCommentInputId, setSubCommentInputId] = useState('')
  const [subCommentText, setSubCommentText] = useState('')

  const {getQuestion} =  useGetQuestion()
  const {getCommentCount} =  useGetCommentCount()
  const {getCommentList} =  useGetCommentList()
  const {addComment} = useAddComment()
  const {authUser} = useAuthUser()
  useEffect(()=>{
    getQuestion(params.questionId).then((res)=>{
      setQuestion(res.question)
    })
    getCommentCount(params.questionId).then((res)=>{
      setTotalPages(Math.ceil(res.commentCount / commentsPerPage))
    })
  },[])
  useEffect(()=>{
    getCommentList(currentPage,commentsPerPage,params.questionId).then((res)=>{
      setCommentList(res.commentList)
    })
  },[currentPage])
  const onCommentInput = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setCommentText(e.target.value)
  }
  const onCommentClick= ()=>{
    authUser().then((username)=>{
      if(username === undefined) return
      addComment(question._id,username,commentText).then((res)=>{
        if(res?.status===200){
          location.reload()
        }
      })
    })
  }
  const subCommentClick= ()=>{
    console.log(subCommentText)
  }
  const showInput = ()=>{
    return(
      <div className={"flex justify-between"}>
        <input onChange={e=>setSubCommentText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-md w-full"/>
        <button className={"btn"} onClick={subCommentClick}>提交</button>
      </div>
    )
  }
  return(
    <>
      <div className={"divide-y divide-gray-300"}>
        <div>
          <h2 className={"pl-14 py-6 text-3xl"}>{question.title}</h2>
        </div>
        <div className={"mx-3"}>
          <div className={"flex flex-row py-6"}>
            <div className={"flex flex-col"}>
              <button className={"btn mr-3"}>点赞</button>
              <button className={"btn mr-3"}>点踩</button>
            </div>
            <text className={"w-full"}>{question.text}</text>
          </div>
          <div className={"pl-9 pt-6"}>
            <textarea className="textarea textarea-bordered w-full h-32" placeholder="在这里输入你的回复" onChange={onCommentInput}></textarea>
            <div className={"flex justify-end"}>
              <button className={"btn"} onClick={()=>{onCommentClick()}}>回复</button>
            </div>
          </div>
          <div>
            <ul className={" divide-y divide-gray-300"}>
              {commentList.map((comment,index)=>{
                return (
                  <li key={comment._id} className={""}>
                    <div className={"flex flex-row py-6"}>
                      <div className={" flex flex-col"}>
                        <div><button className={"btn"}>点赞</button></div>
                        <div><button className={"btn"}>点赞</button></div>
                      </div>
                      <div className={"w-full mx-3"}>{comment.text}</div>
                    </div>
                    <div className={"flex text-sm px-6 pb-3 justify-between "}>
                      <div>{comment.username}</div>
                      <button onClick={()=>{
                        setSubCommentInputId(comment._id)
                        setSubCommentText('')
                      }}>回复</button>
                      <div>{getUpdateTime(parseInt(comment.date))}</div>
                    </div>
                    {comment._id===subCommentInputId?showInput():<></>}
                  </li>
                )
              })}
            </ul>
            <div className={"flex justify-center pt-6"}>
              <div className="join">
                <button className="join-item btn" onClick={()=>{setCurrentPage(currentPage-1<=0?1:currentPage-1)}}>«</button>
                <button className="join-item btn">Page {currentPage}</button>
                <button className="join-item btn" onClick={()=>{setCurrentPage(currentPage+1>totalPages?totalPages:currentPage+1)}}>»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page;