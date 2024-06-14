import React, { useState } from "react";
import data from "./data";
import "./accordion.css";

const Accordions = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  };

  const handleMultiSelect = (getCurrentId) => {
    let copyMultiple = [...multiSelect];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelect(copyMultiple);

  };

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Select
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div
                    onClick={
                      enableMultiSelect
                        ? () => handleMultiSelect(item.id)
                        : () => handleSingleSelection(item.id)
                    }
                    className="title"
                  >
                    <h3>{item.question}</h3>
                    <div>{selected === item.id ? "-" : "+"}</div>
                  </div>
                  <div className="acc-content">
                    {enableMultiSelect
                      ? multiSelect.indexOf(item.id) !== -1 && (
                          <div className="content">{item.answer}</div>
                        )
                      : selected === item.id && (
                          <div className="content">{item.answer}</div>
                        )}
                    {/* {selected === item.id ? <div>{item.answer}</div> : null} */}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Accordions;
