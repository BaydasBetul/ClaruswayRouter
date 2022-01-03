import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { login } = useParams(); // bu hook la reactrouterdaki parametreyi getir,instroctir detaile cagrilirken "login" ismi eklenerek cagrilir.

  let url = "https://api.github.com/users/" + login;
  const [user, setUser] = useState([]);
  const { avatar_url, html_url, company, location } = user;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [url]);

  return (
    <Container className="text-center mt-4">
      <h1>NAME:{login}</h1>
      <img src={avatar_url} alt="" />
      <h3>{html_url}</h3>
      <h4>{company}</h4>
      <h4>{location}</h4>
      <button className="btn-warning" onClick={() => navigate(-1)}>
        {" "}
        {/*navigate(-1) de -1 dersek bir önceki sayfaya geri gider*/}
      </button>
    </Container>
  );
};

export default InstructorDetail;
