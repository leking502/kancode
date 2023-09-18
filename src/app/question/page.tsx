"use client"
import {useState} from "react";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import {AuthUser} from "@/app/api/route";

const questions = [
  {
    qID:"0",
    title:"Test Question",
    userName:"leking",
    userEmail:"leking502520@gmail.com",
    question:"Test Test Test Test Test"
  },
  {
    qID:"1",
    title:"Test Question",
    userName:"xerxer",
    userEmail:"xerxer20@gmail.com",
    question:"Test Test Test Test Test"
  },
  {
    qID:"2",
    title:"Test Question",
    userName:"leking",
    userEmail:"leking502520+1@gmail.com",
    question:"Test Test Test Test Test"
  },
  {
    qID:"3",
    title:"Test Question",
    userName:"leking",
    userEmail:"leking502520+2@gmail.com",
    question:"Test Test Test Test Test"
  },
  {
    qID:"4",
    title:"P2 Test Question",
    userName:"leking",
    userEmail:"leking502520+2@gmail.com",
    question:"Test Test Test Test Test"
  },
  {
    qID:"5",
    title:"P2 Test Question",
    userName:"leking",
    userEmail:"leking502520+2@gmail.com",
    question:"Test Test Test Test Test"
  },
]
const Page = () => {
  const token = localStorage.getItem("token")
  if(token === null){
    const router = useRouter()
    router.push("/login")
  }
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 4; // 每页显示的用户数量
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToShow = questions.slice(startIndex, endIndex);
  return (
    <>
      <div className={"w-full divide-y divide-gray-300 pr-6"}>
        <div>
          <h2 className={"pl-12 py-6 text-3xl"}>全部问题</h2>
        </div>
        <div>
          <ul role="list" className={"divide-y divide-gray-300"}>
            {questionsToShow.map((question,index)=>(
              <li key={question.qID} className={"flex gap-x-6"}>
                <div className={"flex-col  w-full px-12 py-5"}>
                  <div className={"flex flex-col"}>
                    <a className={"text-blue-900 text-1xl"} href={`/question/${question.qID}`}>{question.title} {index}</a>
                    <p className={"text-xs text-gray-600"}>{question.question}</p>
                  </div>
                  <div className={"flex flex-col sm:flex-row sm:justify-between"}>
                    <p className="text-sm leading-6 text-gray-900">{question.userName}</p>
                    <p className="text-sm leading-6 text-gray-900">{question.userName}</p>
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