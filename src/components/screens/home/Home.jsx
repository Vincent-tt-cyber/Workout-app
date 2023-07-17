import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout/Layout";
import { Button } from "../../UI/Button/Button";
import { useAuth } from "../../../hooks/useAuth";
function Home() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  // TODO:
  // Продолжить разработку по 8 уроку 19:30

  return (
    <Layout bgImage="/images/home.jpg">
      <Button clickHandler={() => navigate(isAuth ? "/new-workout" : "/auth")}>
        {isAuth ? "New" : "Sign in"}
      </Button>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      {/* TODO: Counters */}
    </Layout>
  );
}

export default Home;
