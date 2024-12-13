import { Component } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import HomeDescription from "../HomeDescription";
import ProductCard from "../ProductCard";
import "./index.css";

const categoryList = [
  { id: "all", displayText: "All" },
  { id: "men's clothing", displayText: "Men's clothing" },
  { id: "women's clothing", displayText: "Women's clothing" },
  { id: "electronics", displayText: "Electronics" },
  { id: "jewelery", displayText: "Jewelery" },
];

class HomeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { productsList: [], loading: false, ActiveCategory: "all" };
  }

  componentDidMount() {
    this.getProductsList();
  }

  getProductsList = async () => {
    this.setState({ loading: true });
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({ productsList: data, loading: false });
  };

  getLoading = () => {
    return (
      <div className="loader-container">
        <ScaleLoader
          height={50}
          width={50}
          color="#333"
          secondarycolor="#f3f3f3"
          visible="true"
          aria-label="round-loading"
        />
      </div>
    );
  };

  getHomeProducts = () => {
    const { productsList, ActiveCategory } = this.state;
    const filterProducts =
      ActiveCategory === "all"
        ? productsList
        : productsList.filter(
            (eachItem) => eachItem.category === ActiveCategory
          );

    return (
      <div className="product-main-container">
        <div>
          <ul className="product-card-list">
            {filterProducts.map((eachItem) => (
              <ProductCard eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  onChangeSort = (event) => {
    this.setState({ ActiveCategory: event.target.value });
  };

  render() {
    const { loading, ActiveCategory } = this.state;
    return (
      <div>
        <Helmet>
          <title>Products ShopEase-Mall</title>
          <meta
            name="description"
            content="Learn more about ShopEase Mall, your ultimate online shopping destination."
          />
        </Helmet>
        <HomeDescription
          sortList={categoryList}
          category={ActiveCategory}
          updateCategory={this.onChangeSort}
        />
        {loading ? this.getLoading() : this.getHomeProducts()}
      </div>
    );
  }
}

export default HomeProducts;
