"use client";

import styles from "./Button.module.css";

export const Button = (props: Props) => {
  return (
    <>
      <button className={styles.button} onClick={(e) => props.onClick(e)}>
        button
      </button>
    </>
  );
};

interface Props {
  text?: string;
  onClick?: any;
}
