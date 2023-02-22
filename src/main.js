import { render, router } from "./libs";
import aboutpage from "./pages/aboutpage";
import adminhomepage from "./pages/admin/adminhomepage";
import addmenu from "./pages/admin/menu/addmenu";
import editmenu from "./pages/admin/menu/editmenu";
import listmenu from "./pages/admin/menu/listmenu";
import addproject from "./pages/admin/projects/addproject";
import editproject from "./pages/admin/projects/editproject";
import listproject from "./pages/admin/projects/listproject";
import contactpage from "./pages/contactpage";
import homepage from "./pages/homepage";
import loginadmin from "./pages/loginadmin";
import projectpage from "./pages/projectpage";
import project_deltail from "./pages/project_deltail";

const app = document.querySelector("#app");

router.on('/', () => {
  render(homepage, app)
})
router.on('/project', () => {
  render(projectpage, app)
})
router.on('/about', () => {
  render(aboutpage, app)
})
router.on('/contact', () => {
  render(contactpage, app)
})
//chi tiet project
router.on('/project/:id', (parmas) => {
  render(()=>{
    return project_deltail(parmas)
  },app)
})
// login admin
router.on('/admin/login', () => {
  render(loginadmin, app)
})
// trang chủ admin
router.on('/admin/home', () => {
  render(adminhomepage, app)
})

// 404
router.notFound(() => render(NotFound, app));

// admin menu
router.on('/admin/menu', () => {
  render(listmenu, app)
})
router.on('/admin/menu/add', () => {
  render(addmenu, app)
})
router.on('/admin/menu/edit/:id', (parmas) => {
  render(()=>{
    return editmenu(parmas)
  },app)
})

// admin project
router.on('/admin/project', () => {
  render(listproject,app)
})
router.on('/admin/project/add', () => {
  render(addproject,app)
})
router.on('/admin/project/edit/:id', (parmas) => {
  render(()=>{
    return editproject(parmas)
  },app)
})

router.resolve()



// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



