"use client"
import {useEffect, useState} from "react";
import {SubComment} from "@/types/question";
import {useGetSubCommentList} from "@/hooks/question/useGetSubCommentList";
import getUpdateTime from "@/util/date";
type Props = {
  commentId:string
}
const subComments:SubComment[] = []
const SubComment = ({commentId}:Props)=>{
  const [subCommentList, setSubCommentList] = useState(subComments)
  const {getSubCommentList} = useGetSubCommentList()
  useEffect(() => {
    getSubCommentList(1,10,commentId).then((res)=>{
      if(res.status === 200){
        setSubCommentList(res.subCommentList)
      }
    })
  }, []);
  return(
    <div className={"ml-24"}>
      <ul className={"divide-y divide-gray-300"}>
        {subCommentList.map((subComment,index)=>{
          return(
            <li className={"py-2"} key={subComment._id}>
              <div className={"flex flex-row"}>
                <p className={"break-all text-xs"}>{subComment.text}</p>
                <div className={"px-3"}>{"-"}</div>
                <div className={"text-sm"}>{subComment.username}</div>
                <div className={"px-3 text-sm"}>{getUpdateTime(parseInt(subComment.date))}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SubComment