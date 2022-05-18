import { useEffect, useState } from "react";
export default function Suggestion({ onSubmitted }) {
  const [userPreferance, setUserPreferance] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const req = {
      userPreferance: userPreferance,
    };

    fetch("/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((data) => {
        onSubmitted(data.result);
        refresh();
      });
  };

  const refresh = () => {
    setUserPreferance("");
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "preference":
        setUserPreferance(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (userPreferance.length !== 0) setIsEnabled(true);
    else setIsEnabled(false);
  }, [userPreferance]);

  return (
    <form
      className="text-center text-white bg-[#231437] rounded-lg p-4 shadow-xl shadow-black "
      onSubmit={onSubmit}
    >
      <h1 className="text-lg">Feeling like having a little snack?</h1>
      <h1 className="pb-3">Just let me know what you like!</h1>
      <div className="">
        <label className="mb-2" htmlFor="preference">
          Enter your preferences to make the search easier for me 😋
        </label>
        <input
          id="preference"
          type="text"
          placeholder="Type your preference here"
          onChange={handleChange}
          value={userPreferance}
          className="p-1 text-black"
        />
      </div>
      <input
        type="submit"
        value="Let`s Feast!"
        className={`shadow-sm shadow-black p-2 mt-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl  text-center mr-2 mb-2 ${isEnabled ? "" : "opacity-25"}`}
        disabled={!isEnabled}
      />
    </form>
  );
}
