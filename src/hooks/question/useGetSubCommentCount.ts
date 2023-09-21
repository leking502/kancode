import {GetSubCommentCount} from "@/app/api/question";

export const useGetSubCommentCount = ()=>{
  const getSubCommentCount = async (commentId:string)=>{
    return await GetSubCommentCount(commentId);
  }
  return {getSubCommentCount}
}