import SearchIcon from "../../assets/images/icons/search.svg";
import "./custom-search.scss";
const CustomSearchBar = () => {
  return (
    <div id="custom-search">
      <button type="submit">
        <img src={SearchIcon} alt="search icon" width="18" height="18" />
      </button>{" "}
      <input type="search" placeholder="Search by Name/Mobile" />
    </div>
  );
};
export default CustomSearchBar;
