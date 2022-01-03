import { FaPhoenixSquadron } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-center bg-dark p-1" style={{ marginTop: "30px" }}>
      <p className="text-light">
        Created by{" "}
        <FaPhoenixSquadron style={{ color: "orange", fontSize: "20px" }} />
        BetyByd
      </p>
      <p className="text-light">Copyright 2021</p>
    </footer>
  );
};

export default Footer;
