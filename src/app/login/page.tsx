"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useLogin} from "@/hooks/auth/useLogin";

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const {login} = useLogin();
  const router = useRouter();
  const onLoginButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    login(username,password)
      .then((res) => {
        if(res.status === 200){
          router.push("/question")
          setError(false)
        }else{
          setError(true)
        }
      })
      .catch((e) => alert(e));
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center max-w-sm ">
            <h1 className="text-5xl font-bold">建码</h1>
            <p className="py-6">现在登录向全世界的程序员提问来获取你的答案！</p>
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
                <input type="password" placeholder="密码" onChange={e=>{setPassword(e.target.value)}}  className="input input-bordered"/>
                <label className="label flex-col">
                  <a href="/register" className="label-text-alt link link-hover">没有账号？点击这里注册</a>
                  <a className={`${error?"":"hidden"} text-red-500 label-text-alt link link-hover`}>登录失败,请检查账号或密码</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={onLoginButtonClick}>登录</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page;