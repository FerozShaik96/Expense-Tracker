import React from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  LogIn,
  Milestone,
  UserX,
  LogOut,
  UserCheck,
} from "lucide-react";
function Header() {
  let user = !!localStorage.getItem("userid");
  let userIcon = !!localStorage.getItem("Data");
  return (
    <Container>
      <Col className="d-flex justify-content-between align-items-center pt-4 ">
        <Link className="fs-5 fw-bolder text-decoration-none">
          Kep
          <TrendingUp
            size={40}
            color="#1fd13d"
            strokeWidth={2.5}
            absoluteStrokeWidth
          />
          Track{" "}
          <TrendingDown
            size={40}
            color="#d11f1f"
            strokeWidth={2.5}
            absoluteStrokeWidth
          />
        </Link>
        <div>
          <Link to="." className="text-decoration-none fs-5 fw-bold">
            Home
          </Link>
        </div>
        <div className="">
          {user ? (
            <div>
              {userIcon ? (
                <Link
                  to="profile"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                  className=" border border-2 border-success me-2 py-2 px-3 rounded-pill  fw-bold text-dark text-decoration-none"
                >
                  <UserCheck />
                </Link>
              ) : (
                <Link
                  to="profile"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                  className=" border border-2 border-success me-2 py-2 px-3 rounded-pill  fw-bold text-dark text-decoration-none"
                >
                  <UserX />
                </Link>
              )}
              <Link
                to="signup"
                data-toggle="tooltip"
                data-placement="top"
                title="Log Out"
                className="border border-2 border-success ms-2 py-2 px-3 rounded-pill  text-dark fw-bold text-decoration-none"
              >
                <LogOut />
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="login"
                data-toggle="tooltip"
                data-placement="top"
                title="LogIn"
                className="border border-2 border-success me-2 py-2 px-3 rounded-pill  fw-bold text-dark text-decoration-none"
              >
                <LogIn />
              </Link>
              <Link
                to="signup"
                data-toggle="tooltip"
                data-placement="top"
                title="SignIn"
                className="border border-2 border-success ms-2 py-2 px-3 rounded-pill  text-dark fw-bold text-decoration-none"
              >
                <Milestone />
              </Link>
            </div>
          )}
        </div>
      </Col>
    </Container>
  );
}

export default Header;
