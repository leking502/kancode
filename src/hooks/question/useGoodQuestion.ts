import Cookies from "js-cookie";
import {AddComment, GoodComment, GoodQuestion} from "@/app/api/question";

export const useGoodQuestion = ()=>{
  const goodQuestion = async (questionId: string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await GoodQuestion(questionId,token);
  }
  return {goodQuestion}
}