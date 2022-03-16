import { GlobalStyles } from './styles/GlobalStyles';
import { initialState, ContextReducer, StoreReducer} from './reducer/StoreReducer';
import React, { useReducer } from 'react';
import Routes from './Routes';

function App() {
  const [state, dispatch] = useReducer(StoreReducer, initialState);
  
  return (
    <ContextReducer.Provider value={{state, dispatch}} >
      <Routes />
      <GlobalStyles />
    </ContextReducer.Provider>
  );
}

export default App;
