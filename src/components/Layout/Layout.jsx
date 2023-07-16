import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import cn from "clsx";

export const Layout = ({ children, bgImage, heading = "", backLink = "/" }) => {
  return (
    <>
      <section
        className={cn(styles.wrapper, {
          [styles.otherPage]: !!heading,
        })}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header backLink={backLink} />
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        {children && <div>{children}</div>}
      </section>
    </>
  );
};
