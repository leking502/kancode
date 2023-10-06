import Cookies from "js-cookie";
import {AddComment, GoodComment} from "@/app/api/question";

export const useGoodComment = ()=>{
  const goodComment = async (commentId: string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await GoodComment(commentId,token);
  }
  return {goodComment}
}