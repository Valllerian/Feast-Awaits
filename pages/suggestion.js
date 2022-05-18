import Suggestion from "../components/Suggestion";
import { useState, useEffect } from "react";

export default function Suggest() {
  const [response, setResponse] = useState("");
  const [userPreference, setUserPreference] = useState("");
  const [allResponses, setAllResponses] = useState([{}]);

  useEffect(() => {
    setUserPreference(localStorage.getItem("preference"));
if(response !== ''){
	setAllResponses([...allResponses, {response: response, preference: userPreference}]);
}
  }, [response]);

  const handleSubmit = (value) => {
    setResponse(value);
  };

    
  return (
    <div className="h-screen flex flex-col items-center justify-center response-page ">
      <Suggestion onSubmitted={handleSubmit} />
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="m-5"></h1>
        {/* {response.length !== 0 ? (
          <div className="text-center text-white bg-[#231437] rounded-lg p-4 w-2/6 shadow-xl shadow-black">
            <p>Your preference: {userPreference}</p>
            <p>{response}</p>{" "}
          </div>
        ) : null} */}

{allResponses.length !== 0 ? ( allResponses.map((prompt) => (
              <div key='' className="text-center text-white bg-[#231437] rounded-lg p-4 w-2/6 shadow-xl shadow-black m-3">
                <p>Your preference: {prompt.preference}</p>
                <p>{prompt.response}</p>{" "}
              </div>
			  )
            ) ) : null}

      </div>
    </div>
  );
}
