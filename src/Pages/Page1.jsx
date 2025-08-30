import { FaAlignJustify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./Page1.css";

const Page1 = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="page1-container">
      <h2 className="page1-header">
        Menu <FaAlignJustify />
      </h2>
      <div className="search-box">
  <CiSearch className="search-icon" />
  <input
    type="search"
    placeholder="Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
</div>

    </div>
  );
};

export default Page1;
