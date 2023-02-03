import "./capsuleList.css";
import Card from "../Card/Card";
import { useState } from "react";

const CapsuleList = ({ capsules, error, postPerPage }) => {
  const [page, setPage] = useState(1);
  const selectPageHandler = (selectedPage) => {
   
    if (
      selectedPage >= 1 &&
      selectedPage <= capsules?.length / postPerPage &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="capsule_container">
      <h1 className="title">EXpand beyound the Universe.</h1>
      <p className="desc">
        Minimal effort. Maximum results. Our Servers are in Indian,<br />
        one of the world's most connected country.Stable network and <br />
        round the clock assistance.
      </p>
      {!error ? (
        <div className="wrapper">
          {capsules
            .slice(page * postPerPage - postPerPage, page * postPerPage)
            .map((capsule) => {
              return <Card capsule={capsule} key={capsule.id} />;
            })}
        </div>
      ) : (
        <span className="errorSpan"> Unable to Fetch Capsule</span>
      )}

      {capsules && capsules?.length > 0 && (
        <div className="pagination__wrapper">
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>
            {capsules?.length > 0 &&
              [...Array(capsules?.length / postPerPage)].map((_, i) => {
                return (
                  <span
                    key={i}
                    className={page === i + 1 ? "pagination__selected" : ""}
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={
                page < capsules?.length / postPerPage
                  ? ""
                  : "pagination__disable"
              }
            >
              ▶
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CapsuleList;
