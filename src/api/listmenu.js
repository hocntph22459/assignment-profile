import { Listmenu } from "./config";

const getmenus = ()=>{
    return Listmenu.get("/categories");
};
const getmenu = (id)=>{
    return Listmenu.get(`/categories/${id}`);
};
const addmenu = ()=>{
    return Listmenu.get(`/categories`);
};
const deletemenu = (id)=>{
    return Listmenu.get(`/categories/${id}`);
};

export{getmenu,getmenus,deletemenu,addmenu}