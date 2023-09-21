import Cookies from "js-cookie";
import {AskQuestion} from "@/app/api/question";

export const useAskQuestion = ()=>{
  const askQuestion = async (username:string,title: string,abstract:string,tags:string,text:string)=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return
    return await AskQuestion(username, title, abstract, tags, text, token);
  }
  return {askQuestion}
}