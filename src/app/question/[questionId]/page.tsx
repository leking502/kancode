"use client"
import {useGetQuestion} from "@/hooks/question/useGetQuestion";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useAddComment} from "@/hooks/question/useAddComment";
import {useAuthUser} from "@/hooks/question/useAuthUser";
import {Comment, Question, SimilarQuestion} from "@/types/question";
import {useGetCommentList} from "@/hooks/question/useGetCommentList";
import {useGetCommentCount} from "@/hooks/question/useGetCommentCount";
import getUpdateTime from "@/util/date";
import SubComment from "@/components/SubComment";
import {useAddSubComment} from "@/hooks/question/useAddSubComment";
import {useGetSimilarQuestionList} from "@/hooks/question/useGetSimilarQuestionList";

const comments:Comment[] = []
const similarQuestions:any[] = []
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
  const [similarQuestionList, setSimilarQuestionList] = useState(similarQuestions)
  const [commentText, setCommentText] = useState('')

  const [subCommentInputId, setSubCommentInputId] = useState('')
  const [subCommentText, setSubCommentText] = useState('')

  const {addSubComment} = useAddSubComment()
  const {getQuestion} =  useGetQuestion()
  const {getCommentCount} =  useGetCommentCount()
  const {getCommentList} =  useGetCommentList()
  const {addComment} = useAddComment()
  const {authUser} = useAuthUser()
  const {getSimilarQuestionList} =  useGetSimilarQuestionList()
  useEffect(()=>{
    getSimilarQuestionList(params.questionId).then((res)=>{
      if(res.status === 200){
        setSimilarQuestionList(res.questionList)
      }
    })
    getQuestion(params.questionId).then((res)=>{
      if(res.status === 200){
        setQuestion(res.question)
      }
    })
    getCommentCount(params.questionId).then((res)=>{
      if(res.status === 200){
        setTotalPages(Math.ceil(res.commentCount / commentsPerPage))
      }
    })
  },[])
  useEffect(()=>{
    getCommentList(currentPage,commentsPerPage,params.questionId).then((res)=>{
      if(res.status === 200){
        setCommentList(res.commentList)
      }
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
  const onSubCommentClick= ()=>{
    authUser().then((username)=>{
      if(username === undefined) return
      addSubComment(subCommentInputId,username,subCommentText).then((res)=>{
        if(res?.status === 200){
          location.reload()
        }
      })
    })
  }
  const showInput = ()=>{
    return(
      <div className={"flex justify-between py-3 pl-6"}>
        <textarea onChange={e=>setSubCommentText(e.target.value)} placeholder="在这里输入" className="input input-bordered input-md w-full"/>
        <button className={"btn"} onClick={onSubCommentClick}>提交</button>
      </div>
    )
  }
  return(
    <>
      <div className={"w-full max-w-2xl min-w-sm"}>
        <div className={"divide-y divide-gray-300"}>
          <div>
            <h2 className={"pl-8 py-6 text-3xl"}>{question.title}</h2>
          </div>
          <div className={"mx-3"}>
            <div className={"flex flex-row py-6"}>
              <div className={"flex flex-col"}>
                <div className={"pb-6"}><button className={"btn mr-3"}>赞</button></div>
                <div><button className={"btn mr-3"}>踩</button></div>
              </div>
              <text className={"w-full"}>{question.text}</text>
            </div>
            <div className={"pl-9 pt-6"}>
              <textarea className="textarea textarea-bordered w-full h-32" placeholder="在这里输入你的回答" onChange={onCommentInput}></textarea>
              <div className={"flex justify-end"}>
                <button className={"btn"} onClick={()=>{onCommentClick()}}>回答</button>
              </div>
            </div>
            <div>
              <ul className={"divide-y divide-gray-400"}>
                {commentList.map((comment,index)=>{
                  return (
                    <li key={comment._id} className={""}>
                      <div className={"flex flex-row py-6"}>
                        <div className={"flex flex-col"}>
                          <div className={"pb-6"}><button className={"btn"}>赞</button></div>
                          <div><button className={"btn"}>踩</button></div>
                        </div>
                        <div className={"w-full mx-3 break-all"}>{comment.text}</div>
                      </div>
                      <div className={"flex text-sm px-6 pb-3 justify-between "}>
                        <div></div>
                        <div>
                          <div>{comment.username}</div>
                          <div>{getUpdateTime(parseInt(comment.date))}</div>
                        </div>

                      </div>
                      <SubComment commentId={comment._id}/>
                      {comment._id===subCommentInputId?showInput():<></>}
                      {comment._id!==subCommentInputId?<div className={"pb-3 pl-6 text-gray-500"}>
                        <button onClick={()=>{
                          setSubCommentInputId(comment._id)
                          setSubCommentText('')
                        }}>回复</button>
                      </div>:<></>}
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
      </div>
      <div className={"hidden flex-col lg:flex lg:w-60 p-3"}>
        <div className={"pb-3"}>
          相关文章
        </div>
        <ul>
          {similarQuestionList.map((sq)=>{
            if(sq.Question.ID === params.questionId) return
            console.log("sim"+sq.Question.ID)
            return(
              <li className={"pb-3"} key={"sim"+sq.Question.ID}>
                <a href={`/question/${sq.Question.ID}`} className={"text-blue-500 text-sm"}>{sq.Question.Title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Page;