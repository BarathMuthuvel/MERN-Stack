import React, { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument?",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="w-[400px]">
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer p-3 my-2 bg-slate-300"
      >
        <p>{item.question}</p>
        <h1>{isOpen ? "-" : "+"}</h1>
      </div>
      {isOpen && (
        <div
          style={{ padding: "10px", background: "#e1e1e1" }}
          className="p-3 bg-slate-400"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
};

const Accordions = () => {
  const [showItem, setShowItem] = useState(null);

  const handleClick = (id) => {
    setShowItem(showItem === id ? null : id);
  };

  return (
    <div>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={item.id === showItem}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordions;
