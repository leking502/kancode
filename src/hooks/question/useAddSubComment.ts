import Cookies from "js-cookie";
import {AddSubComment} from "@/app/api/question";

export const useAddSubComment = ()=>{
  const addSubComment = async (commentId: string,username:string,text:string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await AddSubComment(commentId,username,text, token);
  }
  return {addSubComment}
}