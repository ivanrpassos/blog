import { createContext, useContext } from 'react';

import { useState } from 'react';

const headerContext = createContext();

export function HeaderProvider({ children }) {
  // Variáveis de estado
  const [form, setForm] = useState([]);

  const onChange = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });

    console.log(form);
  };

  return <headerContext.Provider value={{ form, onChange }}>{children}</headerContext.Provider>;
}

export const useHeader = () => useContext(headerContext);
