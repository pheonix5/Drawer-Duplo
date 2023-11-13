import react, { useState, createContext, useEffect } from 'react'

export const RouteContext = createContext({});

function RouteProvider({ children }) {
  const [pageRendered, setPageRendered] = useState('');
  
  useEffect(() => {
    function verifyPage(telaExibida){
      if(telaExibida === "Chat"){
        return;
      }else{
        setPageRendered('Home')
      }
    }
    verifyPage();
  }, [pageRendered])

  return (
    <RouteContext.Provider
      value={{
        pageRendered,
        setPageRendered
      }}
    >

      {children}
    </RouteContext.Provider>

  )
}

export default RouteProvider;