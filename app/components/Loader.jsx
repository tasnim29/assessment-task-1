import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <ClipLoader color="#36d7b7" size={50} />;
    </div>
  );
};

export default Loader;
