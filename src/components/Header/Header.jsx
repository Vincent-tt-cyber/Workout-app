import { useAuth } from "../../hooks/useAuth";
import { Humburger } from "../Humburger/Humburger";
import styles from "./Header.module.scss";
import { FiArrowLeft } from "react-icons/fi";

export const Header = () => {
  /*   TODO: react-router-dom useHistory */

  const { isAuth } = useAuth();
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => {}}>
          <FiArrowLeft />
        </button>
        {/* User profile */}
        <Humburger />
      </header>
    </>
  );
};
