import { Listprofile } from "./config"

const getprofile = ()=>{
    return Listprofile.get("profile")
}
export {getprofile}