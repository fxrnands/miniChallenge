import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import dataDummy from "../assets/dataDummy/dataDummy.json";

function UserList() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ListGroup style={{ marginTop: "4rem", width: "24rem" }}>
        {dataDummy.map((data) => {
          return (
            <ListGroup.Item as={Link} to={`${data.id}`}>
              <div style={{ textDecoration: "none" }}>
                <img className="rounded-circle border-0 me-4" style={{ width: "50px", height: "46px" }} src={data.image} />@{data.username}
                <p style={{ marginLeft: "74px" }} className="text-muted">
                  Followers : {data.follower} | Following : {data.following}
                </p>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default UserList;
