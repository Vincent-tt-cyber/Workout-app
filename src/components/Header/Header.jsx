import { useAuth } from "../../hooks/useAuth";
import { Humburger } from "../Humburger/Humburger";
import styles from "./Header.module.scss";
import { HiArrowLeft } from "react-icons/hi";

export const Header = () => {
  /*   TODO: react-router-dom useHistory */

  const { isAuth } = useAuth();
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => {}}>
          <HiArrowLeft />
        </button>
        {/* User profile */}
        <Humburger />
      </header>
    </>
  );
};
