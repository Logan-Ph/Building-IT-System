'use client';
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { useEffect } from "react";


import { Accordion } from 'flowbite-react';
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(true);

  function getSize() {
    setWidth(window.innerWidth);
  }

  // This function will run whenever the window size changes
  useEffect(() => {
    window.addEventListener("resize", getSize);
    // Get the current window width

    // Set the expanded state to false if the width is less than 768 pixels
    // if (width < 768) {
    //   setExpanded(false);

    // }
    if (width > 898) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    // else {
    //   // Otherwise, set it to true
    //   setExpanded(false);
    // }
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [width]);

  return (
    <aside className="">
      <nav className=" h-screen flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src=""
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
              }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, subitems }) {
  const { expanded } = useContext(SidebarContext);
  const [showSubitems, setShowSubitems] = useState(false);

  const handleSubitemsToggle = () => {
    setShowSubitems(!showSubitems);
  };

  return (
    
    <div>
      <div
        className={`dropdown-btn
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"}`}
        onClick={handleSubitemsToggle}
      >
        {icon} 
        <span className={`overflow-hidden transition-all lg:md:text-lg   ${expanded ? "w-52 ml-3" : "w-0"}`}>{text} </span>
        {expanded && (showSubitems ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg> )}
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
          /> 
        )}

        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 lg:md:ml-3 sm:xs:ml-0
              bg-indigo-100 text-indigo-800 lg:md:text-md sm:xs:text-xs 
              invisible opacity-20 -translate-x-1 z-40 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
          >
            {text} 
          </div>
        )}

      </div>

      {expanded && subitems && showSubitems && (
        <ul className="ml-3">
          {subitems.map((subitem, index) => (
            <a href={subitem.href} key={index}>
              <li
                className="py-2 px-8 my-1 font-medium rounded-md cursor-pointer hover:bg-indigo-50 text-gray-600 "
              >
                <span>{subitem.text}</span>
              </li>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}