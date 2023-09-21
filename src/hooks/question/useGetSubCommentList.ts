import {GetSubCommentList} from "@/app/api/question";

export const useGetSubCommentList = ()=>{
  const getSubCommentList = async (page:number,pageSize:number,commentId:string)=>{
    return await GetSubCommentList(page,pageSize,commentId);
  }
  return {getSubCommentList}
}