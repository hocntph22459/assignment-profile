import footer from "../components/footer"
import header from "../components/header"
import listabout from "../components/listabout"
import listcontact from "../components/listcontact"
import listproject from "../components/listproject"

const homepage = () => {
  return `
  ${header()}
  ${listabout()}
  ${listproject()}
  ${listcontact()}
  ${footer()}
  `
}

export default homepage