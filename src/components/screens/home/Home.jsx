import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout/Layout";

function Home() {
  /* 
    todo

    - Продолжить разработку по 7 16:15 уроку "Frontend для начинающих"
  */

  const navigate = useNavigate();

  return <Layout bgImage="/images/home-bg.jpg"></Layout>;
}

export default Home;
