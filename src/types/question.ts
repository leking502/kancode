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