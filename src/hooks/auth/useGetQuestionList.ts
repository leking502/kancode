import {GetQuestion, GetQuestionList} from "@/app/api/question";

export const useGetQuestionList = ()=>{
  const getQuestionList = async (page:number,pageSize:number)=>{
    return await GetQuestionList(page,pageSize);
  }
  return {getQuestionList}
}