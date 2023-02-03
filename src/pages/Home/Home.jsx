import Banner from "../../components/Banner/Banner";
import CapsuleList from "../../components/CapsuleList/CapsuleList";
import SearchItem from "../../components/SearchItem/SearchItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../../redux/capsuleSlice";
import axios from "axios";

const Home = () => {
  const [capsules, setCapsules] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const FetchCapsules = async () => {
      dispatch(fetchStart());
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/capsules?limit=100"
        );
        const data = await response.data;
        if (data) {
          setCapsules(data);
          dispatch(fetchSuccess(data));
        }
      } catch (error) {
        setError(error);
        dispatch(fetchFailure(error));
      }
    };
    FetchCapsules();
  }, [dispatch]);

  const onQuery = (query) => {
    setQuery(query);
  };

  const { currentCapsule } = useSelector((state) => state.capsule);
  const keys = ["id"];

  const onHandleClick = (event) => {
    event.preventDefault();
    const response = currentCapsule.filter((item) =>
      keys.some((key) => item[key] === query)
    );
    setCapsules(response);
     setPostPerPage(response.length)
    setQuery("");
  };

  return (
    <>
      <Banner />
      <SearchItem
        onHandleSearch={onHandleClick}
        onQuery={onQuery}
        query={query}
      />
      <CapsuleList
        capsules={capsules}
        setCapsules={setCapsules}
        error={error}
        postPerPage={postPerPage}
      />
    </>
  );
};

export default Home;
