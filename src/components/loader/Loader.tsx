import React from "react";

import BarLoader from "react-spinners/BarLoader";

interface IProps {
  height?: string;
}
export const loaderTestId = "loader";

const Loader = ({ height = "h-72" }: IProps) => {
  return (
    <div
      className={`${height}  w-full flex justify-center items-center`}
      data-testid={loaderTestId}
    >
      <BarLoader color="#0080FE" />
    </div>
  );
};

export default Loader;
