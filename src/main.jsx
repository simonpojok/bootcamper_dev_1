import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { AppContextProvider } from './context.jsx'
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");

  return (
    <AppContext.Provider value={{
      userToken,
      name: 'charles'

    }}>
      {children}
    </AppContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppContextProvider> */}
      <App />
    {/* </AppContextProvider> */}
  </StrictMode>,
)
