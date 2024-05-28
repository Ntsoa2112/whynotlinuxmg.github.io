import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <button
        className="w-full text-left px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{title}</span>
          <span>{isOpen ? '^' : 'v'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
