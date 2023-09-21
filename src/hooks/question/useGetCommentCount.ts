import {GetCommentCount} from "@/app/api/question";

export const useGetCommentCount = ()=>{
  const getCommentCount = async (questionId:string)=>{
    return await GetCommentCount(questionId);
  }
  return {getCommentCount}
}