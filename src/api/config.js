import axios from "axios";
const Listmenu = axios.create({
    baseURL:"http://localhost:3000/",
});
const Listprofile = axios.create({
    baseURL : "http://localhost:3000/",
});
const Listprojects = axios.create({
    baseURL: "http://localhost:3000/"
})
export {Listmenu,Listprofile,Listprojects}