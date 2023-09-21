"use client"
import {useEffect, useState} from "react";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import {AuthUser} from "@/app/api/auth";
import {useGetQuestionList} from "@/hooks/question/useGetQuestionList";
import {Question} from "@/types/question";
import {useGetQuestionCount} from "@/hooks/question/useGetQuestionCount";
import getUpdateTime from "@/util/date";

const questions:Question[] = []
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionList, setQuestionList] = useState(questions)
  const [totalPages, setTotalPages] = useState(1)
  const {getQuestionCount} = useGetQuestionCount()
  const questionsPerPage = 10;
  // 每页显示的用户数量
  const {getQuestionList} = useGetQuestionList()
  useEffect(() => {
    getQuestionCount().then((res)=>{
      setTotalPages(Math.ceil(res.questionCount / questionsPerPage))
    })
  }, []);
  useEffect(()=>{
    getQuestionList(currentPage,questionsPerPage).then((res)=>{
      setQuestionList(res.questionList)
    })
  },[currentPage])

    const parseData = (time:string)=>{
    let date = new Date(parseInt(time));
    return `${date.getFullYear()} 年 ${date.getMonth()} 月 ${date.getHours()}:${date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds()}`
  }
  const parseDataOffset = (time:string)=>{
    return getUpdateTime(parseInt(time))
  }
  return (
    <>
      <div className={"w-full divide-y divide-gray-300 pr-6"}>
        <div>
          <h2 className={"pl-12 py-6 text-3xl"}>全部问题</h2>
        </div>
        <div>
          <ul role="list" className={"divide-y divide-gray-300"}>
            {questionList.map((question,index)=>(
              <li key={question._id} className={"flex gap-x-6"}>
                <div className={"flex-col w-full px-12 py-5"}>
                  <div className={"flex flex-col"}>
                    <a className={"text-blue-900 text-1xl break-all"} href={`/question/${question._id}`}>{question.title}</a>
                    <p className={"text-xs text-gray-600 break-all"}>{question.abstract}</p>
                  </div>
                  <div className={"flex flex-col sm:flex-row sm:justify-between"}>
                    <p className="text-sm leading-6 text-gray-900">{question.username}</p>
                    <p className="text-sm leading-6 text-gray-500">{parseDataOffset(question.date)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex justify-center pt-6"}>
          <div className="join">
            <button className="join-item btn" onClick={()=>{setCurrentPage(currentPage-1<=0?1:currentPage-1)}}>«</button>
            <button className="join-item btn">Page {currentPage}</button>
            <button className="join-item btn" onClick={()=>{setCurrentPage(currentPage+1>totalPages?totalPages:currentPage+1)}}>»</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page;