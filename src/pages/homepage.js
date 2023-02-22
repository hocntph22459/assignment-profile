import footer from "../components/footer"
import header from "../components/header"
import listhomepage from "../components/listhomepage"

const homepage = () => {
  return `
  ${header()}
  ${listhomepage()}
  ${footer()}
  `
}

export default homepage