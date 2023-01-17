import "./moreBtn.css"
import { Link } from "react-router-dom";

const MoreBtn = ({btnTitle}) => {
  return (
    <Link> {btnTitle} </Link>
  )
}

export default MoreBtn