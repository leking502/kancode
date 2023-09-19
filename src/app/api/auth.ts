import { NextResponse } from 'next/server'
import {AuthRes} from "@/types/user";

export async function Register(username: string, password:string) {
  const form = new FormData();
  form.append("username",username)
  form.append("password",password)
  const res = await fetch('http://127.0.0.1:8080/register', {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()
  return {status:res.status,msg:data.msg,token:data.token} as AuthRes
}
export async function Login(username: string, password:string) {
  const form = new FormData();
  form.append("username",username)
  form.append("password",password)
  const res = await fetch('http://127.0.0.1:8080/login', {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()
  return {status:res.status,msg:data.msg,token:data.token} as AuthRes
}
export async function Logout(token:string) {
  const res = await fetch(`http://127.0.0.1:8080/logout?token=${token}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  return res.ok;
}
export async function AuthUser(token:any) {
  const res = await fetch(`http://127.0.0.1:8080/user/getData?token=${token}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  if(res.ok) {
    console.log("error")
    const data = await res.json()
    return {status: res.status, data: data}
  }
}