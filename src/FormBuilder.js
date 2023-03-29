import $ from "jquery";
import React, {createRef, useEffect} from "react";
import axios from 'axios';
// import ReactDOM from "react-dom";
import "./styles.css";

window.jQuery = $;
window.$ = $;
//
require("formBuilder");
require("formBuilder/dist/form-render.min.js");
require("jquery-ui-sortable");


function FormBuilder({formData}) {
  const fb = createRef();
  const fr = createRef();
  const formBuilderOptions = {
    dataType: "json",
    formData: formData,
    onSave: function (evt, formData) {
      $(fr.current).formRender({
        dataType: "json",
        formData: formData
      });
      var data = $(fb.current).formBuilder("getData");
      console.log(data);
      var result = JSON.parse(formData);
      // sendToDB(result);
      console.log(result);
      // console.log(JSON.parse(formData));
    }
  };
  useEffect(() => {
    $(fb.current).formBuilder(formBuilderOptions);
    $(fr.current).formRender();
  }, []);

  const sendToDB = (formData) => {

    axios.post('http://localhost:3000/forms', {
formData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  };

  return (
    <>
          <div className="fb" ref={fb} />
          {/* <FormRender /> */}
          <div ref={fr}/>
          <button type="submit"
           onClick={() => {
            var dat = $(fb.current).formBuilder("getData");
            console.log(dat);
            var data = $(fb.current).formRender("userData");
            console.log(data);
          }}
          >Save</button>
          </>
          
  );
  
}

export default FormBuilder;
