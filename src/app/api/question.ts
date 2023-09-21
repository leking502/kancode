import {BaseRes, QuestionIdRes, QuestionRes, UserRes} from "@/types/user";

export async function AskQuestion(username:string,title: string,abstract:string,tags:string,text:string,token:string){
  const form = new FormData();
  form.append("username",username);
  form.append("title",title);
  form.append("abstract",abstract);
  form.append("tags",tags);
  form.append("text",text);
  form.append("date",Date.now().toString());
  const res = await fetch(`http://127.0.0.1:8081/question/profile/addQuestion?token=${token}`, {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()
  return {status:res.status,msg:data.msg,id:data.id} as QuestionIdRes
}
export async function GetQuestion(id:string) {
  const res = await fetch(`http://127.0.0.1:8081/question/getQuestion?id=${id}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,question:data.question}
}
export async function GetQuestionList(page:number,pageSize:number) {
  const res = await fetch(`http://127.0.0.1:8081/question/getQuestionList?page=${page}&page_size=${pageSize}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,questionList:data.question_list}
}
export async function GetQuestionCount() {
  const res = await fetch(`http://127.0.0.1:8081/question/getQuestionCount`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,questionCount:data.question_count}
}
export async function GetCommentList(page:number,pageSize:number,questionId:string) {
  const res = await fetch(`http://127.0.0.1:8081/question/getCommentList?page=${page}&page_size=${pageSize}&question_id=${questionId}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,commentList:data.comment_list}
}
export async function GetCommentCount(questionId:string) {
  const res = await fetch(`http://127.0.0.1:8081/question/getCommentCount?question_id=${questionId}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,commentCount:data.comment_count}
}
export async function AddComment(questionId:string,username: string,text:string,token:string){
  const form = new FormData();
  form.append("username",username);
  form.append("question_id",questionId);
  form.append("text",text);
  form.append("date",Date.now().toString());
  const res = await fetch(`http://127.0.0.1:8081/question/profile/addComment?token=${token}`, {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()
  return {status:res.status,msg:data.msg,id:data.id} as QuestionIdRes
}

export async function GetSubCommentList(page:number,pageSize:number,commentId:string) {
  const res = await fetch(`http://127.0.0.1:8081/question/getSubCommentList?page=${page}&page_size=${pageSize}&comment_id=${commentId}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,subCommentList:data.sub_comment_list}
}
export async function GetSubCommentCount(commentId:string) {
  const res = await fetch(`http://127.0.0.1:8081/question/getSubCommentCount?comment_id=${commentId}`, {
    method: 'GET',
    // @ts-ignore
    headers: {
    },
  })
  const data = await res.json()
  return {status: res.status, msg: data.msg,subCommentCount:data.sub_comment_count}
}
export async function AddSubComment(commentId:string,username: string,text:string,token:string){
  const form = new FormData();
  form.append("username",username);
  form.append("comment_id",commentId);
  form.append("text",text);
  form.append("date",Date.now().toString());
  const res = await fetch(`http://127.0.0.1:8081/question/profile/addSubComment?token=${token}`, {
    method: 'POST',
    // @ts-ignore
    headers: {
    },
    body: form,
  })
  const data = await res.json()
  return {status:res.status,msg:data.msg,id:data.id} as QuestionIdRes
}