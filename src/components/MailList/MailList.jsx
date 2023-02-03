import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Lauch to Space!</h1>
      <span className="mailDesc">
        Sign up and Let's Rock the Space Together!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email Address" />
        <button>Contact</button>
      </div>
    </div>
  );
};

export default MailList;
