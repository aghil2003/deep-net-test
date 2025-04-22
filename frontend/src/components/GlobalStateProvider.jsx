import { createContext, ReactNode, useState } from "react";


// Create the context with a default value
export const GlobalContext = createContext(null);


const GlobalStateProvider = ({ children }) => {
  const [items, setItems] = useState({
    description: "", // Initial empty description
    menuItems: [], // Initial empty array for menuItems
  });

  const [menus, setMenus] = useState([
    {
      _id:'',
      name: "",
      description: "",
    },
  ]);

  return (
    <GlobalContext.Provider value={{ items, setItems, menus, setMenus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
