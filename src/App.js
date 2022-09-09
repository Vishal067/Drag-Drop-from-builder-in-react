import React, { useState, useEffect } from "react";
import FormBuilder from "./FormBuilder";
import "./styles.css";

function App() {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Tab 1" },
    { id: 2, name: "Tab 2" },
  ]);

  const [Divs, setDivs] = useState([
    {
      id: 1,
      name: "Div 1",
      content: "Div 1 Content",
    },
    {
      id: 2,
      name: "Div 2",
      content: "Div 2 Content",
    },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [activeDiv, setActiveDiv] = useState(1);

  const [form, setForm] = useState([
    {
      id: 1,
      name: "Form 1",
      content: "Form 1 Content",
    },
    {
      id: 2,
      name: "Form 2",
      content: "Form 2 Content",
    },
  ]);
  const handleTabClick = (id) => {
    console.log(id);
    setActiveTab(id);
    setActiveDiv(id);
  };
  const handleActiveDiv = (id) => {
    setActiveDiv(id);
  };
  const handleAddTab = () => {
    const newTab = {
      id: tabs.length + 1,
      name: `Tab ${tabs.length + 1}`,
    };
    const newDiv = {
      id: Divs.length + 1,
      name: `Div ${Divs.length + 1}`,
      content: `Div ${Divs.length + 1} Content`,
    };
    setTabs([...tabs, newTab]);
    setDivs([...Divs, newDiv]);
    setActiveTab(newTab.id);
    setActiveDiv(newDiv.id);
  };
  const handleAddDiv = () => {
    const newDiv = {
      id: Divs.length + 1,
      name: `Div ${Divs.length + 1}`,
      content: `Div ${Divs.length + 1} Content`,
    };
    setDivs([...Divs, newDiv]);
    setActiveDiv(newDiv.id);
  };
  const handleAddForm = () => {
    const newForm = {
      id: form.length + 1,
      name: `Form ${form.length + 1}`,
      content: `Form ${form.length + 1} Content`,
    };
    setForm([...form, newForm]);
  };
  const handleDeleteTab = (id) => {
    const newTabs = tabs.filter((tab) => tab.id !== id);
    const newDivs = Divs.filter((div) => div.id !== id);
    setTabs(newTabs);
    setDivs(newDivs);
    setActiveTab(newTabs[0].id);
    setActiveDiv(newDivs[0].id);
  };
  const handleDeleteDiv = (id) => {
    const newDivs = Divs.filter((div) => div.id !== id);
    setDivs(newDivs);
    setActiveDiv(newDivs[0].id);
  };
  const handleDeleteForm = (id) => {
    const newForm = form.filter((form) => form.id !== id);
    setForm(newForm);
  };



  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
            <span
              className="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTab(tab.id);
              }}
            >
              X
            </span>
          </div>
        ))}
        <div className="add" onClick={handleAddTab}>
          +
        </div>
      </div>
      <div className="divs">
        {Divs.map((div) => (
          <div
            key={div.id}
            className={activeDiv === div.id ? "div active" : "div"}
            onClick={() => handleActiveDiv(div.id)}
          >
            {div.name}
            <span

              className="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteDiv(div.id);
              }}
            >
              X
            </span>
          </div>
        ))}
        <div className="add" onClick={handleAddDiv}>
          +
        </div>
      </div>
      <div className="form">
        {form.map((form) => (
          <div key={form.id}>
            {form.name}
            <span

              className="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteForm(form.id);
              }}
            >
              X
            </span>
          </div>
        ))}
        <div className="add" onClick={handleAddForm}>
          +
        </div>
      </div>
      <FormBuilder />
    </div>
  );
  //     <form action="">
  //       <ul id="tabs">
  //         {tabs.map((tab) => (
  //           <li
  //             key={tab.id}
  //             onClick={() => handleTabClick(tab.id)}
  //             className={activeTab === tab.id ? "active" : ""}
  //           >
  //             {tab.name}
  //           </li>
  //         ))}
  //       </ul>
  //       <div id="content">
  //         {Divs.map((Div) => (
  //           <div key={Div.id} className={activeDiv === Div.id ? "active" : ""}>
  //             {Div.content}
  //             {Div.id === activeDiv && (
  //               <div>
  //                 <FormBuilder />
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </form>
  //     <div class="save-all-wrap"><button onClick={saveAll} id="save-all" type="button">Save All</button></div>
  //     {/* <FormBuilder /> */}
  //   </div>
  // );
  //     <li><a href="#page-1">Page 1</a></li>
  //     <li id="add-page-tab"><a href="#new-page">+ Page</a></li>
  //   </ul>
  //   <div id="page-1" class="fb-editor"></div>
  //   <div id="new-page"></div>

  // </form>
  //       <FormBuilder />
  //     </div>
  //   );
}

export default App;
