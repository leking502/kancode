export interface BaseRes{
  status:number,
  msg:string
}
export interface AuthRes extends BaseRes{
  token:string
}
export interface UserRes extends BaseRes{
  username:string
}
export interface QuestionRes extends BaseRes{
  id:string
}
export interface QuestionIdRes extends BaseRes{
  id:string
}