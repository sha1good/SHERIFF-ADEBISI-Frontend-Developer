import "./searchItem.css";
const SearchItem = ({ onHandleSearch, onQuery, query }) => {
  return (
    <>
      <div className="searchItem">
        <h1 className="searchTitle">Search Form</h1>
        <div className="searchInput">
          <input
            type="text"
            className="input"
            name="capsuleSerial"
            placeholder="Search by Id..."
            value={query}
            onChange={(event) => onQuery(event.target.value)}
          />
          <button
            className="submitButton"
            onClick={(event) => onHandleSearch(event)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
