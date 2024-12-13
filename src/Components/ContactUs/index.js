import { Component } from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact ShopEase-Mall</title>
          <meta
            name="description"
            content="Contact  more about ShopEase Mall, your ultimate online shopping destination."
          />
        </Helmet>
        <div className="contact-main-container">
          <div className="contact-bg-container">
            <div className="contact-sub-container">
              <h2>Contact Us</h2>
              <p className="contact-details">
                <span className="contact-span">Email: </span>
                contact@shopeasemall.com
              </p>
              <p className="contact-details">
                <span className="contact-span">Phone: </span>+91 12345 67890
              </p>
              <p className="contact-details">
                <span className="contact-span">Address: </span>123 ShopEase St,
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
