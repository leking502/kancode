"use client"
import React, {useState} from "react";
import {useRegister} from "@/hooks/auth/useRegister";
import {useRouter} from "next/navigation";

const Page = ()=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [error, setError] = useState(false)
  const {register} = useRegister()
  const router = useRouter()
  const onLoginButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(username === ''){
      setError(true)
      setErrMsg("用户名不能为空")
      return;
    }
    if(password.length<6){
      setError(true)
      setErrMsg("密码不得小于6位")
      return;
    }
    if(password !== rPassword){
      setError(true)
      setErrMsg("两次密码不一样")
      return;
    }
    setError(false)
    register(username,password)
      .then((res) => {
        if(res.status === 200){
          router.push("/question")
          setError(false)
          setErrMsg("")
        }else{
          setError(true)
          setErrMsg(res.msg)
        }
      })
      .catch((e) => alert(e));
  }
  const onPasswordInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value === '') setRPassword('')
    setPassword(e.target.value)
  }
  const onRPasswordInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setRPassword(e.target.value)
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center max-w-sm ">
            <h1 className="text-5xl font-bold">加入建码</h1>
            <p className="py-6">在这里你将获得全世界的程序员的回答</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">用户名</span>
                </label>
                <input type="text" placeholder="用户名" onChange={e=>{setUsername(e.target.value)}} className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">密码</span>
                </label>
                <div>
                  <input type="password" placeholder="密码" onChange={onPasswordInput}  className="input input-bordered"/>
                </div>
                {password!=''?<div className={"pt-4"}><input type="password" placeholder="再次输入" onChange={onRPasswordInput}  className="input input-bordered"/></div>:<></>}
                <label className="label flex-col">
                  <a href="/login" className="label-text-alt link link-hover">已经有账号？点击这里登录</a>
                  <a className={`${error?"":"hidden"} text-red-500 label-text-alt link link-hover`}>{errMsg}</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={onLoginButtonClick}>注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page;