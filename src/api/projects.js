import { Listprojects } from "./config"

const getsproject = ()=>{
    return Listprojects.get("projects")
}
const getproject = (id)=>{
    return Listprojects.get(`projects/${id}`)
}
const addproject = ()=>{
    return Listprojects.post("projects")
}
const editproject = (id)=>{
    return Listprojects.put(`projects/${id}`)
}

export {getproject,getsproject,editproject,addproject}