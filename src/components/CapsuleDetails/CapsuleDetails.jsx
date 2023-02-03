import "./capsuleDetails.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CapsuleDetails = ({ setOpenModal, capsule }) => {
  return (
    <div className="capsuleDetails">
      <div className="capsuleDetailsContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="faClose"
          onClick={() => setOpenModal(false)}
        />
        <div className="capsule__span">
          <span className="capsule__span__title">See Capsule Details: </span>
          <div className="capsule__span__details">
          <span>
            <b>Id:</b>  {capsule?.id}
          </span>
          <span>
            <b>Serial:</b> {capsule?.serial}
          </span>
          <span>
            <b>Status:</b> {capsule?.status}
          </span>
          <p>
            <b>Last_Update:</b> {capsule?.last_update}
          </p>
          <span>
            <b>Water_Landings:</b> {capsule?.water_landings}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleDetails;
