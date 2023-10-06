export interface Question{
  _id:string,
  username:string,
  title:string
  abstract:string,
  text:string,
  tags:string,
  date:string,
}
export interface Comment{
  _id:string,
  username:string,
  questionId:string
  text:string,
  date:string,
}
export interface SubComment{
  _id:string,
  username:string,
  commentId:string
  text:string,
  date:string,
}
export interface SimilarQuestion{
  Question: {
    Abstract:string,
    Date:string,
    ID:string,
    Tags:string,
    Text:string,
    Title:string,
    Username:string,
  },
  Similarity:number,
}