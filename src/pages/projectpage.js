import listproject from "../components/listproject"
import navbar from "../components/navbar"

const projectpage = () => {
  return `
  ${navbar()}
  ${listproject()}
  `
}

export default projectpage