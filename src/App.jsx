import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { Toaster } from 'react-hot-toast'
import { AuthContext } from './context/AuthProvider/AuthProvider'

function App() {
  const { loggedInChecker } = useContext(AuthContext);

  useEffect(() => {
    loggedInChecker();
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" />
    </>
  )
}

export default App
