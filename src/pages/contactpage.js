import listcontact from "../components/listcontact"
import navbar from "../components/navbar"

const contactpage = () => {
  return `
  ${navbar()}
  ${listcontact()}
  `
}

export default contactpage