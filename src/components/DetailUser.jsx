import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import dataDummy from "../assets/dataDummy/dataDummy.json";
import { Link } from "react-router-dom"

function DetailUsers() {
  const params = useParams();
  const navigate = useNavigate();
  const detailUser = dataDummy[params.id - 1];
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "18rem", padding: "40px" }}>
        <Card.Img className="border rounded-circle" style={{ borderRadius: "550px" }} variant="top" src={detailUser.image} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title className="mt-3">@{detailUser.username}</Card.Title>
          <div style={{ display: "inline-flex", marginTop: "20px" }}>
            <div style={{ marginRight: "40px" }}>
              <Card.Text>Followers</Card.Text>
              <Card.Text style={{ fontWeight: "bold" }}>{detailUser.follower}</Card.Text>
            </div>
            <div>
              <Card.Text>Following</Card.Text>
              <Card.Text style={{ fontWeight: "bold" }}>{detailUser.follower}</Card.Text>
            </div>
          </div>
        </Card.Body>
        <button onClick={()=> navigate("/")}>Back</button>
      </Card>
    </div>
  );
}

export default DetailUsers;
