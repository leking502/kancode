import Cookies from "js-cookie";
import {AddComment, BadComment, GoodComment} from "@/app/api/question";

export const useBadComment = ()=>{
  const badComment = async (commentId: string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await BadComment(commentId,token);
  }
  return {badComment}
}