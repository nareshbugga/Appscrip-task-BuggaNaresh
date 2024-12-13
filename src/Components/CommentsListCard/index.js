import "./index.css";
import { FaStar } from "react-icons/fa";

const CommentsListCard = (props) => {
  const { eachItem } = props;
  const { name, comment } = eachItem;
  return (
    <li className="comment-list-container ">
      <div className="comment-name-container">
        <FaStar size={15} color="yellow" className="star" />
        <h1 className="comment-name">{name}</h1>
      </div>
      <p>{comment}</p>
    </li>
  );
};

export default CommentsListCard;
