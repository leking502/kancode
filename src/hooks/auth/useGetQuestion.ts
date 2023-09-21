import {GetQuestion} from "@/app/api/question";

export const useGetQuestion = ()=>{
  const getQuestion = async (id:string)=>{
    return await GetQuestion(id);
  }
  return {getQuestion}
}