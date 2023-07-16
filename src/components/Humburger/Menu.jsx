import { menu } from "./menu.data";
import styles from "./Humburger.module.scss";
import cn from "clsx";
import { Link } from "react-router-dom";

export const Menu = ({ isShow }) => {
  const logoutHandler = () => {};
  return (
    <>
      <nav
        className={cn(styles.menu, {
          [styles.show]: isShow,
        })}
      >
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button onClick={() => {}}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
