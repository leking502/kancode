import {AuthUser, Login} from "@/app/api/auth";
import Cookies from "js-cookie";

export const useAuthUser = ()=>{
  const authUser = async ()=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return;
    const res = await AuthUser(token);
    if(res.status === 200){
      return res.username;
    }
    console.log(res.msg)
  }
  return {authUser}
}