import React, { useState } from "react";
import {} from 'react-virtualized'

function generateList(size: number) {
  return Array.from({ length: size }, (_, index) => `item ${index + 1}`);
}

const Virtualization = () => {
  const [items, setItems] = useState<string[]>([]);
  const [triggerRerender, setTriggerRerender] = useState(false);

  const handleGenerateList = () => {
    setItems(generateList(100000));
    setTimeout(() => {
      setTriggerRerender((prev) => !prev);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Virtualization with react-window or react-virtualized
      </h2>
      <div>
        <button onClick={handleGenerateList}>Generate </button>
      </div>
      <div>
        {items.map((item) => (
          <div className="p-2 " key={item}>
            {" "}
            <p>{item}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Virtualization;
