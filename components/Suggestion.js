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
    <form className="" onSubmit={onSubmit}>
      <h1 className="">Just let me know what you like!</h1>
      <div className="">
        <label className="mb-2" htmlFor="preference">
          Enter preferences:
        </label>
        <input
          id="preference"
          type="text"
          placeholder="Enter your preference here"
          onChange={handleChange}
          value={userPreferance}
          className=""
        />
      </div>

      <input
        type="submit"
        value="Let`s Feast!"
        className={`mt-5 py-3 rounded-md ${isEnabled ? "" : ""}`}
        disabled={!isEnabled}
      />
    </form>
  );
}
