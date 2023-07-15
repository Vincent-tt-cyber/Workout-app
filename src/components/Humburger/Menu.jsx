import { menu } from "./menu.data";
import styles from "./Humburger.module.scss";
import cn from "clsx";

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
              {item.title}
              {/* <Link to={item.link}>{item.title}</Link> */}
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
