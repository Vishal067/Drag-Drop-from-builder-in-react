import React, { useState, useEffect } from "react";
import FormBuilder from "./FormBuilder";
import FB2 from "./FB2";
import Save from "./save";
import "./styles.css";

function App() {
  var formData = [
      {
        type: "text",
        label: "Text Field",
        className: "form-control",
        name: "text-input",
      },
      {
        type: "textarea",
        label: "Textarea",
        className: "form-control",
        name: "textarea",
      },
  ];
  return (
    <div>
      <h1 style={{ color: "black" }}> Drag & Drop </h1>
      {/* <FormBuilder formData={formData} /> */}
      <FB2 />
    </div>
  );
}

export default App;
