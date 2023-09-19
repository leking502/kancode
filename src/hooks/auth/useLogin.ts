import {Login} from "@/app/api/auth";
import Cookies from "js-cookie";

export const useLogin = ()=>{
  const login = async (username:string,password:string)=>{
    const res = await Login(username,password);
    if(res.status === 200){
      Cookies.set("userToken",JSON.stringify(res.token));
    }
    return res;
  }
  return {login}
}