import { IoFilter } from "react-icons/io5";
import "./index.css";

const HomeDescription = (props) => {
  const { sortList, category, updateCategory } = props;
  const onChangeSort = (event) => {
    updateCategory(event);
  };
  return (
    <div className="home-card-container">
      <div className="home-sub-container">
        <h1 className="home-card-heading">
          Welcome to ShopEase Mall – Where Shopping Meets Innovation!
        </h1>
        <p className="home-description-card">
          At ShopEase Mall, we unite top brands with advanced technology to
          deliver a superior shopping experience all under one roof. Explore our
          wide range of stores, indulge in unique dining options, and enjoy
          exciting entertainment for the entire family. Whether you're seeking
          the latest fashion trends or cutting-edge gadgets, ShopEase Mall has
          something for everyone. Relax and unwind in our welcoming environment,
          ensuring every visit is unforgettable. Stay ahead of the trends and
          experience the future of retail today with us at ShopEase Mall, where
          we promise a memorable shopping adventure each time.
        </p>
      </div>
      <div className="sort-icon-container">
        <IoFilter className="sort-icon" size={22} />
        <p className="sort-heading ">Sort By Category</p>
      </div>
      <select className="filter" value={category} onChange={onChangeSort}>
        {sortList.map((eachItem) => (
          <option key={eachItem.id} value={eachItem.id}>
            {eachItem.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HomeDescription;
