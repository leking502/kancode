import { NextResponse } from 'next/server'
import {AuthRes, UserRes} from "@/types/user";

const authUrl = "http://43.139.123.116:8080/"
export async function Register(username: string, password:string) {
  const form = new FormData();
  form.append("username",username)
  form.append("password",password)
  const res = await fetch(authUrl+'register', {
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
  const res = await fetch(authUrl+'login', {
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
  const res = await fetch(authUrl+`logout?token=${token}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  return res.ok;
}
export async function AuthUser(token:string) {
  const res = await fetch(authUrl+`user/getData?token=${token}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,username:data.username} as UserRes
}