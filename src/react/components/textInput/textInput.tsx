import classNames from "classnames";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface TextInputProps {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  setValue: Function;
  payload: {
    value: string;
    hasErrors?: boolean;
  };
}

export const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  isRequired = true,
  setValue,
  payload,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        <span style={{ color: "red" }}> *</span>
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        type={"text"}
        className={classNames(
          styles.textInput,
          payload.hasErrors && styles.error
        )}
        id={label}
        placeholder={placeholder}
      />
      {payload.hasErrors && (
        <>
          <div className={styles.errorArrow} />
          <div className={styles.errorBox}>This field is required</div>
        </>
      )}
    </div>
  );
};
