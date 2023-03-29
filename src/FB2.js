import $ from "jquery";
import React, { createRef, useEffect, useState, useLayoutEffect } from "react";
import "./styles.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");
require("formBuilder/dist/form-render.min.js");

export function FB2() {
  const fb = createRef();
  const [form, setForm] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Update the document title using the browser API
    let options2 = {
      // append: '<button>Submit</button>',
      disableFields: ["button", "header", "paragraph", "hidden"],
      disabledActionButtons: ["save"],
      onClearAll: function(formData) {
        setForm(null);
      },
      actionButtons: [

        {
          id: "seeform",
          className: "btn btn-primary",
          label: "See Form",
          type: "button",
          events: {
            click: function() {
              $(() => {
                let myxml = formBuilder.actions.getData("json", true);

                let submit_btn = {
                  type: "button",
                  label: "Submit",
                  subtype: "submit",
                  className: "btn-light btn",
                  name: "submituniquebutton",
                  access: false,
                  style: "light"
                };
                let myxml2 = JSON.parse(myxml);
                if (myxml2.length > 0) {
                  setForm(myxml);

                  var fbTemplate = document.getElementById("build-wrap"),
                    options = {
                      formData: myxml2.concat([submit_btn])
                    };

                  $(fbTemplate).formRender(options);
                } else {
                  alert("Add atleast one Field");
                }
              });
            }
          }
        }
      ],
      fields: [
        {
          label: "File",
          type: "file",
          subtype: "file",
          icon: "✉",
          
        }
      ],
      controlConfig: {
        'file.fineuploader': {
          autoUpload: true
          // other fine uploader configuration options here
        }
      }
    };

    const formBuilder = $(fb.current).formBuilder(options2);
    

  }, []);


  const formSubmitHandler = e => {
    e.preventDefault();
    var fbTemplate = document.getElementById("build-wrap");
    let userData = $(fbTemplate).formRender("userData");
    console.log("vishal",userData);
    var formData = new FormData(fbTemplate);

    function getObj(objs, key, val) {
      val = val.replace('[]', '');
      return objs.filter(function(obj) {
        var filter = false;
        if (val) {
          filter = (obj[key] === val);
        } else if (obj[key]) {
          filter = true;
        }
        return filter;
      });
    }

    function setValue(name, value) {
      let field = getObj(userData, 'name', name)[0];
      
      if (!field) {
        return;
      }

      if (['select', 'checkbox-group', 'radio-group'].indexOf(field.type) !== -1) {
        for (var fieldOption of field.values) {
          if (value.indexOf(fieldOption.value) !== -1) {
            fieldOption.selected = true;
          } else {
            delete fieldOption.selected;
          };
        }
      } else {
        field.value = value[0];
      }
    }

    console.log('Original formData: ', userData);

    for (var key of formData.keys()) {
      setValue(key, formData.getAll(key));
    }

    console.log('Updated formData: ', userData);


    let toSendData = {};
    userData.forEach(item => {
      if (item.type === "button" && item.subtype === "submit") {
        return 0;
      } else if (item.type === "file" || item.subtype === "file") {
        let field = item.label;
        let value = item.value
        toSendData[field] = value;
      } else {
        let field = item.label;
        let value = item.userData;
        toSendData[field] = value;
        console.log(toSendData);
      }
    });
  };



  return (
    <div className="App p-4">
      <div id="fb-editor" ref={fb} />
      {form && (
        <form
          id="build-wrap"
          className="pt-3"
         onSubmit={e => formSubmitHandler(e)}
        />
      )}
    </div>
  );
}

export default (React.memo(FB2));
