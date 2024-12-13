import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";
import CommentsListCard from "../CommentsListCard";
import "./index.css";
const List = [
  {
    id: uuidv4(),
    name: "Aisha Khan",
    comment: "Great product! Exceeded my expectations.",
  },
  {
    id: uuidv4(),
    name: "Ravi Patel",
    comment: "Fast delivery and excellent customer service.",
  },
];
class Stories extends Component {
  state = { name: "", comment: "", commentsList: List, errorMessage: "" };

  onClickName = (event) => {
    this.setState({ name: event.target.value });
  };
  onClickTextarea = (event) => {
    this.setState({ comment: event.target.value });
  };
  onClickSubmit = (event) => {
    event.preventDefault();
    const { name, comment, commentsList } = this.state;
    if (name && comment) {
      const newComment = { id: uuidv4(), name, comment };
      this.setState({
        commentsList: [...commentsList, newComment],
        name: "",
        comment: "",
        errorMessage: "",
      });
    } else {
      this.setState({ errorMessage: "Both fields are required." });
    }
  };

  commentForm = () => {
    const { name, comment, errorMessage } = this.state;
    return (
      <div className="main-container">
        <h2 className="comment-card-heading">Write Your Comments Here</h2>
        <form className="form-container" onSubmit={this.onClickSubmit}>
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input"
              value={name}
              onChange={this.onClickName}
            />
          </div>
          <div>
            <label htmlFor="comments" className="label">
              Comments
            </label>
            <textarea
              rows="5"
              cols="35"
              id="comments"
              className="input"
              value={comment}
              onChange={this.onClickTextarea}
            ></textarea>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          {errorMessage === "" ? null : (
            <p className="error-msg">{`* ${errorMessage}`}</p>
          )}
        </form>
      </div>
    );
  };
  render() {
    const { commentsList } = this.state;

    return (
      <div>
        <Helmet>
          <title>Stories ShopEase-Mall</title>
          <meta
            name="description"
            content="Learn more about ShopEase Mall, your ultimate online shopping destination."
          />
        </Helmet>
        <div className="stories-bg-container">
          <div className="stories-sub-container">
            <h1 className="card-heading">Stories from Our Shoppers</h1>
            <p className="card-description">
              At ShopEase Mall, every product has a story, and every shopper
              becomes part of our journey. Here's what our happy customers have
              to say about their experiences:
            </p>
          </div>
          <div className="container">
            {this.commentForm()}
            <ul>
              {commentsList.map((eachItem) => (
                <CommentsListCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Stories;
