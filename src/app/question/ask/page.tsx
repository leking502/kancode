"use client"
import {useState} from "react";
import {useAskQuestion} from "@/hooks/question/useAskQuestion";
import {useAuthUser} from "@/hooks/question/useAuthUser";
import {useRouter} from "next/navigation";

const Page = ()=>{
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const router =  useRouter()
  const {authUser} = useAuthUser()
  const {askQuestion} =  useAskQuestion()
  const onSubClick = ()=>{
    authUser().then((username)=>{
      if(username === undefined) return
      let abstract = ''
      if(text.length>20){
        abstract = text.slice(0,100)+"..."
      }else{
        abstract = text
      }
      askQuestion(username,title,abstract,"",text).then((res)=>{
        if(res?.status === 200){
          router.push(`/question/${res.id}`)
        }
      })
    })
  }
  return(
    <>
      <div className="form-control">
        <div className={"flex flex-row p-3"}>
          <input type="text" placeholder="标题" className="input input-bordered input-md w-full max-w-xs" onChange={e=>{setTitle(e.target.value)}}/>
        </div>
        <div className={"p-3"}>
          <textarea className="textarea textarea-bordered h-96 w-full" placeholder="正文" onChange={e=>{setText(e.target.value)}}></textarea>
        </div>
        <div className="flex justify-end px-3">
          <button className={"btn"} onClick={()=>{onSubClick()}}>提交</button>
        </div>
      </div>
    </>
  )
}
export default Page;