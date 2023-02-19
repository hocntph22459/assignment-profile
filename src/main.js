import { render, router } from "./libs";
import homepage from "./pages/homepage";

const app = document.querySelector("#app");

router.on('/',()=>{
  render(homepage,app)
})

router.resolve()