import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-0 ">
        <hr className="border-t-1 border-gray-200 my-4" />
        {items.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div
              key={item.id}
              className="border-b border-gray-200 dark:border-gray-600"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-0 py-6 md:py-8 text-left flex items-center justify-between hover:opacity-80 transition-opacity duration-150 focus:outline-none"
              >
                <h3 className="text-lg md:text-3xl font-medium text-gray-900 dark:text-white pr-4 leading-relaxed">
                  {item.title}
                </h3>
                <div className="flex-shrink-0 text-2xl md:text-3xl font-light text-gray-900 dark:text-white">
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              {isOpen && (
                <div className="px-0 pb-6 md:pb-8 pt-0">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
