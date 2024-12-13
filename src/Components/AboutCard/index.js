import { Component } from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="about-card-container">
        <Helmet>
          <title>About ShopEase-Mall</title>
          <meta
            name="description"
            content="Learn more about ShopEase Mall, your ultimate online shopping destination."
          />
        </Helmet>
        <div className="sub-container">
          <h1 className="about-heading">About Our Mall</h1>
          <div className="about-description">
            <p>
              Welcome to ShopEase Mall, your ultimate online shopping
              destination established in 2010! Since our inception, we've been
              committed to providing a seamless and enjoyable shopping
              experience to customers across the globe. With just a few clicks,
              you can explore a world of products right from the comfort of your
              home.
            </p>
            <p>
              <span className="offer-line">What we offer:</span>
            </p>
            <ul>
              <li>
                Vast product categories: Electronics, fashion, home essentials,
                beauty, and more.
              </li>
              <li>
                Worldwide delivery: Bringing your favorite products straight to
                your doorstep.
              </li>
              <li>
                Unbeatable deals: Special discounts and offers curated just for
                you.
              </li>
            </ul>
            <p>
              At ShopEase Mall, we believe in combining convenience with
              quality. Our goal is to make online shopping reliable, fast, and
              secure for everyone. Join our ever-growing family of happy
              shoppers and experience the joy of online shopping redefined!
            </p>
            <p>
              <span className="tag-line">
                SHOP ANYWHERE, ANYTIME, WITH SHOPEASE MALL..!!!.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
