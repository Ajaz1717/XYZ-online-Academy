import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CourseState from './components/CourseState.jsx'
import AddCourseState from './components/AddCourseState.jsx'
import DeleteCourseState from './components/DeleteCourseState.jsx'
import UpdateCourseState from './components/UpdateCourseState.jsx'




let router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path: "/", element: <CourseState/>},
    {path: "/add new", element: <AddCourseState/>},
    {path: "/delete", element: <DeleteCourseState/>},
    {path: "/update", element: <UpdateCourseState/>},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
