import Suggestion from "../components/Suggestion";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Suggest() {
  // Setting up states to keep all of the current data;
  const [response, setResponse] = useState("");
  const [userPreference, setUserPreference] = useState("");
  // An array for all responses + user references;
  const [allResponses, setAllResponses] = useState([{}]);

  // UseEffect that triggered whenever response value is updated;
  useEffect(() => {
    if (response !== "") {
      let newPreference = userPreference;
      setAllResponses([
        ...allResponses,
        { response: response, preference: newPreference },
      ]);
    }
  }, [response]);

  const handleSubmit = (value) => {
    setUserPreference(localStorage.getItem("preference"));
    setResponse(value);
  };

  // // Setting up a navigate variable for a 'go-back' button;
  // const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center response-page ">
      <p className="text-center text-white bg-[#231437] rounded-lg p-4 shadow-xl shadow-black m-3 ">
        {" "}
      </p>
      <Suggestion onSubmitted={handleSubmit} />
      <div className=" flex flex-col items-center justify-center ">
        {allResponses.length !== 0 || allResponses.length > 2
          ? allResponses.map((prompt) => (
              <div
                key={prompt.preference}
                className="text-center text-white bg-[#231437] rounded-lg p-4 w-2/6 shadow-xl shadow-black m-3 "
              >
                <p> {prompt.preference}</p>
                <p>{prompt.response}</p>{" "}
              </div>
            ))
          : null}
      </div>
      <>
        <button
          className="absolute bottom-0  w-1/6 shadow-sm shadow-black p-2 mt-3 text-white bg-gradient-to-r from-purple-900 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl  text-center mr-2 mb-2 back-button"
          onClick={() => (location.href = "/")}
        >
          Back
        </button>
      </>
    </div>
  );
}
