import {GetCommentGoodBad, GetSubCommentCount} from "@/app/api/question";

export const useGetCommentGoodBad = ()=>{
  const getCommentGoodBad = async (commentId:string)=>{
    return await GetCommentGoodBad(commentId);
  }
  return {getCommentGoodBad}
}