import styles from "./Input.module.scss";

export const Input = ({ register, name, options, error, ...rest }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        {...register(name, options)}
        className={styles.input}
        {...rest}
        // value={value}
        // onChange={onChange}
        // required={required}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
