import {GetCommentList, GetQuestion, GetQuestionList} from "@/app/api/question";

export const useGetCommentList = ()=>{
  const getCommentList = async (page:number,pageSize:number,questionId:string)=>{
    return await GetCommentList(page,pageSize,questionId);
  }
  return {getCommentList}
}