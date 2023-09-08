import React, { useState } from "react";

export default function TextForm(props) {
  const changeUppercase = () => {
    // console.log("Turned to uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const changeLowercase = () => {
    // console.log("Turned to lowercase" + text);
    let newText2 = text.toLowerCase();
    setText(newText2);
  };

  const cleartext = () => {
    let newText = "";
    setText(newText);
  };

  const handleUpClick = (event) => {
    // console.log("Tried changing the text");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [darkText, setDark] = useState("Enable Dark Mode");

  const [newStyle, setNew] = useState({
    // width: '100vw',
    height: "100vh",
    backgroundColor: "white",
    color: "black",
  });

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const WhiteSpace = () => {
    let updated_text = text.replace(/\s/g, '')
    setText(updated_text)
}

  // --------------- TO GET DARK MODE ( using usestate ) --------------- //
  // const darkMode = () => {
  //   if (newStyle.color === "black") {
  //     setNew({
  //       // width: '100vw',
  //       height: "100vh",
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setDark("Disable Dark Mode");
  //   } else if (newStyle.color === "white") {
  //     setNew({
  //       // width: '100vw',
  //       height: "100vh",
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setDark("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div className="cont" style={newStyle}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="myform" className="form-label">
              {props.heading}
            </label>
            <textarea
              className="form-control"
              id="myform"
              rows="7"
              value={text}
              onChange={handleUpClick}
            ></textarea>
            <button className="btn btn-primary my-3" onClick={changeUppercase}>
              Convert to UpperCase
            </button>
            <button
              className="btn btn-secondary my-3 mx-2"
              onClick={changeLowercase}
            >
              Convert to LowerCase
            </button>
            <button className="btn btn-warning my-3 mx-2" onClick={cleartext}>
              Clear Text
            </button>
            <button className="btn btn-success my-3 mx-2" onClick={speak}>
              Text-to-Speech
            </button>
            <button className="btn btn-info my-3 mx-2" onClick={WhiteSpace}>
              Remove White Spaces
            </button>
          </div>
        </div>

        <div className="container my-3">
          <h3>Text Summary: </h3>
          Your text has {text.split(" ").length} words and {text.length}{" "} characters
        </div>
      </div>
    </>
  );
}
