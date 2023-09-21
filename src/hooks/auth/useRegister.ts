import {Register} from "@/app/api/auth";
import Cookies from "js-cookie";

export const useRegister = ()=>{
  const register = async (username:string,password:string)=>{
    const res = await Register(username,password);
    if(res.status === 200){
      Cookies.set("userToken",res.token);
    }
    return res;
  }
  return {register}
}