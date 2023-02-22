import listabout from "../components/listabout"
import navbar from "../components/navbar"

const aboutpage = () => {
  return `
  ${navbar()}
  ${listabout()}
  `
}

export default aboutpage