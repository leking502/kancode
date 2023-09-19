export interface BaseRes{
  status:number,
  msg:string
}
export interface AuthRes extends BaseRes{
  token:string
}