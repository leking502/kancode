import {GetCommentGoodBad, GetQuestionGoodBad, GetSubCommentCount} from "@/app/api/question";

export const useGetQuestionGoodBad = ()=>{
  const getQuestionGoodBad = async (questionId:string)=>{
    return await GetQuestionGoodBad(questionId);
  }
  return {getQuestionGoodBad}
}