import styles from "./Humburger.module.scss";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Menu } from "./Menu";
import { useState } from "react";

export const Humburger = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? <IoMdClose color="white" /> : <HiMenu color="white" />}
        </button>
        <Menu isShow={isShow} />
      </div>
    </>
  );
};
