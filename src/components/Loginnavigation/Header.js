import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeAction } from "../../Store/ThemReducer";
import { useNavigate } from "react-router-dom";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = !!localStorage.getItem("userid");
  console.log(user);
  const DarkthemeActivated = (event) => {
    event.preventDefault();
    dispatch(ThemeAction.Darkmode());
  };
  const LightthemeActivated = (event) => {
    event.preventDefault();
    dispatch(ThemeAction.Lightmode());
  };
  const isDark = useSelector((state) => state.Theme.isDarkmode);
  let userIcon = localStorage.getItem("updateInfo");
  const LogoutHandler = () => {
    localStorage.clear();
    navigate("login");
  };
  return (
    <Container>
      <Col
        className={`d-flex justify-content-between align-items-center pt-4 ${
          isDark ? "bg-black px-4 pb-4 rounded" : ""
        } `}
      >
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
            <div className="d-flex align-items-center gap-3 ">
              <div>
                <div>
                  {!isDark && (
                    <button
                      className="bg-black rounded-pill text-white rounded-md m-2 p-2"
                      onClick={DarkthemeActivated}
                    >
                      Activate Darkmode
                    </button>
                  )}
                  {isDark && (
                    <button
                      className="bg-white border-black border-2 rounded-pill rounded-md m-2 p-2"
                      onClick={LightthemeActivated}
                    >
                      Activate Lightmode
                    </button>
                  )}
                </div>
              </div>

              <div>
                {userIcon ? (
                  <Link
                    to="profile"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Profile"
                    className={`border border-2 ${
                      isDark ? "bg-success" : ""
                    } border-success me-2 py-2 px-3 rounded-pill  fw-bold text-dark text-decoration-none`}
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
                <Button
                  to="signup"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Log Out"
                  onClick={LogoutHandler}
                  className="border border-2 border-success ms-2 py-2 px-3 rounded-pill  text-dark fw-bold text-decoration-none"
                >
                  <LogOut />
                </Button>
              </div>
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
