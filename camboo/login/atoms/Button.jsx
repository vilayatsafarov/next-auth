import React from "react";
const Button = ({ name, styles }) => {
  return (
    <button className={`${styles} rounded-md`}>{name}</button>
  )
};
export default React.memo(Button)