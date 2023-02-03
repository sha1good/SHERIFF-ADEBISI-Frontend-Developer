import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">About Us</li>
          <li className="fListItem">Contact Us </li>
          <li className="fListItem">Offices</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Customer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023.</div>
    </div>
  );
};

export default Footer;
