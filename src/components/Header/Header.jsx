import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Humburger } from "../Humburger/Humburger";
import styles from "./Header.module.scss";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

export const Header = ({ backLink = "" }) => {
  /*   TODO: react-router-dom useHistory */

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  return (
    <>
      <header className={styles.header}>
        {pathname !== "/" ? (
          <button
            onClick={() => {
              navigate(backLink);
            }}
          >
            <HiArrowLeft />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            <AiOutlineUser />
          </button>
        )}
        {/* User profile */}
        <Humburger />
      </header>
    </>
  );
};
