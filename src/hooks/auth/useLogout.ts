import {Logout} from "@/app/api/auth";
import Cookies from "js-cookie";

export const useLogout = ()=>{
  const logout = async ()=>{
    const token = Cookies.get("userToken");
    if(token === undefined) return;
    const res = await Logout(token);
    if(res){
      Cookies.remove("userToken");
    }
  }
  return {logout}
}