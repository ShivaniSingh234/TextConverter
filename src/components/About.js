import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark mode");
  // const [myCompStyle, setMyCompStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText,setBtnText]=useState("Enable Dark mode")

  const toggleStyle = () => {
    setMyStyle({
      color: "black",
      backgroundColor: btnText.includes("Light") ? "white" : "#ADBC9F",
      border: "3px solid white",
    });
    if (btnText.includes("Light")) setBtnText("Enable Dark Mode");
    else setBtnText("Enable Light Mode");

    // if (myStyle.color === "white") {
    //   setMyStyle({
    //     color: "black",
    //     backgroundColor: btnText.includes("white")?"white":"#436850",
    //     border: "3px solid white",

    //   });
    //   setBtnText("Enable Dark Mode");
  };
  // setMyCompStyle({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // else {
  //   setMyStyle({
  //     // color:'green',
  //     color: "#436850",
  //     backgroundColor: "#ADBC9F",
  //   });
  //   setBtnText("Enable Light Mode");
  // }
  //};
  // setMyCompStyle({
  //   color: "#436850",
  //   //  color:'green',
  //   backgroundColor: "#ADBC9F",
  // });
  // let myCompStyle={
  //     color:'white',
  //     backgroundColor:'black'
  // }
  return (
    <div className="container" style={myStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Analysis is the process of slicing and dicing documents into
              easy-to-manage and integrate data piece.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Analyzer is a free character counter tool that provides
              instant character count & word count statistics for a given text.
              Text Analyzer reports the number of words and characters.Thus it
              is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome,Firefox,Internet,Explorer, Internet
              Explorer,Safari,Opera.It suits to count characters in
              facebook,blog,books,excel document,pd document,essays,etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-success">
          {btnText}
        </button>
      </div>
    </div>
  );
}
