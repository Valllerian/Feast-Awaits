import Suggestion from "../components/Suggestion";
import { useState } from "react";

export default function Ad() {
  const [res, setRes] = useState("");

  const handleSubmit = (value) => {
    setRes(value);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center response-page ">
      <Suggestion onSubmitted={handleSubmit} />
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="m-5"></h1>
        {res.length !== 0 ? (
          <p className="text-center text-white bg-[#231437] rounded-lg p-4 w-2/4 shadow-xl shadow-black">
            {res}
          </p>
        ) : null}
      </div>
    </div>
  );
}
