import Cookies from "js-cookie";
import {AddComment, BadQuestion, GoodComment, GoodQuestion} from "@/app/api/question";

export const useBadQuestion = ()=>{
  const badQuestion = async (questionId: string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await BadQuestion(questionId,token);
  }
  return {badQuestion}
}