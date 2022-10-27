
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  return (
    <div>
       <ToastContainer position="top-center" />
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
