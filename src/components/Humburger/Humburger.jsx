import styles from "./Humburger.module.scss";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Menu } from "./Menu";
import { useState } from "react";
import { useOnClickOutSide } from "../../hooks/useOnClickOutSide";

export const Humburger = () => {
  const { isShow, ref, setIsShow } = useOnClickOutSide(false);

  return (
    <>
      <div className={styles.wrapper} ref={ref}>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? <IoMdClose /> : <HiMenu />}
        </button>
        <Menu isShow={isShow} />
      </div>
    </>
  );
};
