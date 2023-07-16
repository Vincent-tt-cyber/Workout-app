import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout/Layout";
import { Button } from "../../UI/Button/Button";
import { useAuth } from "../../../hooks/useAuth";
function Home() {
  /* 
    todo

    - Продолжить разработку по 8 уроку "Frontend для начинающих"
  */
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout bgImage="/images/home-bg.jpg">
      <Button clickHandler={() => navigate(isAuth ? "/new-workout" : "/auth")}>
        {isAuth ? "New" : "Sign in"}
      </Button>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      {/* TODO: Counters */}
    </Layout>
  );
}

export default Home;
