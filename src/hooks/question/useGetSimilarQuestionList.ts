import {GetSimilarQuestionList} from "@/app/api/question";

export const useGetSimilarQuestionList = ()=>{
  const getSimilarQuestionList = async (questionId:string)=>{
    return await GetSimilarQuestionList(questionId);
  }
  return {getSimilarQuestionList}
}