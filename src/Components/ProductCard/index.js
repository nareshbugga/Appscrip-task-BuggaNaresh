import "./index.css";

const ProductCard = (props) => {
  const { eachItem } = props;
  const { title, price, description, category, image, rating } = eachItem;
  const { rate } = rating;
  return (
    <li className="card-container">
      <div className="description-container">
        <h1 className="product-card-heading">{title}</h1>
        <p className="product-card-description">{description}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={category} className="product-card-image" />
        <p className="product-card-category">
          <span className="card-span">category : </span>
          {category}
        </p>
        <p className="product-card-price">
          <span className="card-span">Price : </span>
          {price}$
        </p>
        <p className="product-card-rate">
          <span className="card-span">Rate : </span>
          {rate}
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
