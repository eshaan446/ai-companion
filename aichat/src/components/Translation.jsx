import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  const refresh = () => window.location.reload(true)
  return (
    <div className="translation">
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="btns">
      <button className="action-btn btn1" onClick={refresh}>
        Go Back!
      </button>
      <button className="action-btn btn2" onClick={doStuff}>
        Get result !
      </button>
      </div>


      <h2 className="result-text">{result.length > 0 ? result : ""}</h2>
    </div>
  );
}