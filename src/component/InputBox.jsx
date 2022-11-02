import React, { forwardRef } from "react";

const InputBox = (props, ref) => {
  return (
    <>
      <input type={"text"} ref={ref} />
    </>
  );
};

export default forwardRef(InputBox);
