import $ from "jquery";
import React, {Component, createRef, useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import 'jquery-ui-sortable';
// import 'jquery-ui-draggable';
// import 'jquery-ui-droppable';


window.jQuery = $;
window.$ = $;
//
require("formBuilder");
require("jquery-ui-sortable");

function FormBuilder() {
  const fb = createRef();
  const fr = createRef();
  const formBuilderOptions = {
    
  };


  useEffect(() => {
    $(fb.current).formBuilder(formBuilderOptions);
  }, []);


  return (
          <div ref={fb} />
  );
  
}

export default FormBuilder;
