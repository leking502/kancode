import { NextResponse } from 'next/server'


export async function Login({email, password}:any) {
  const form = new FormData();
  form.append("username",email)
  form.append("password",password)
  const res = await fetch('http://127.0.0.1:8080/login', {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()

  return {status:res.status,data:data}
}

export async function AuthUser(token:any) {
  const res = await fetch(`http://127.0.0.1:8080/user/getData?token=${token}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()

  return {status:res.status,data:data}
}