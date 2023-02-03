import { Link } from "react-router-dom";
import "./card.css";
import CapsuleDetails from "../CapsuleDetails/CapsuleDetails";

import { useState } from "react";

const Card = ({ capsule }) => {
  const [openModal, setOpenModal] = useState(false);
  const [capsuleData, setCapsuleData] = useState({});
  const handleModal = () => {
    setOpenModal(true);
    setCapsuleData(capsule);
  };
  return (
    <div className="card">
      <Link to="/" style={{ cursor: "pointer" }} onClick={handleModal}>
        <h2 className="cardButton">ID: {capsule?.id}</h2>
      </Link>
      <span>Serial: {capsule?.serial}</span>
      <span>Status: {capsule?.status}</span>
      {openModal && (
        <CapsuleDetails setOpenModal={setOpenModal} capsule={capsuleData} />
      )}
    </div>
  );
};

export default Card;
