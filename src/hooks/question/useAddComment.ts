import Cookies from "js-cookie";
import {AddComment} from "@/app/api/question";

export const useAddComment = ()=>{
  const addComment = async (questionId: string,username:string,text:string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await AddComment(questionId,username,text, token);
  }
  return {addComment}
}