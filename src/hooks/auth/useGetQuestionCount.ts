import {GetQuestionCount} from "@/app/api/question";

export const useGetQuestionCount = ()=>{
  const getQuestionCount = async ()=>{
    return await GetQuestionCount();
  }
  return {getQuestionCount}
}