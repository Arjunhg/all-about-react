import { useId, useState } from "react";

const UseId = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </div>
  );
};

export default UseId;