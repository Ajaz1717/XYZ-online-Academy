import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from "./components/Home";
import Course from "./components/Course";
import Registration from "./components/Registration";
import AboutUs from "./components/About Us";
import ContectUs from "./components/Contect Us";
import Login from "./components/Login";
import CourseDetails from './components/CourseDetails.jsx';
import BuyPlan from './components/BuyPlan.jsx';
import PortalLogin from './components/Student Portal/PortalLogin.jsx';
import StudentTab from './components/Student Portal/studentTab.jsx';
import PaymentDetail from './components/PaymentDetail.jsx';
import PrintUserDetail from './components/PrintUserDetail.jsx';

let router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path: "/", element: <Home/>},
    {path: "/course", element: <Course/>},
    {path: "/Registration", element: <Registration/>},
    {path: "/About", element: <AboutUs/>},
    {path: "/Contect", element: <ContectUs/>},
    {path: "/Login", element: <Login/>},
    {path: "/course details", element: <CourseDetails/>},
    {path: "/buy course plan", element: <BuyPlan/>},
    {path: "/payment detail", element: <PaymentDetail/>},
    {path: "/print Detail", element: <PrintUserDetail/>},
    {path: "/portal login", element: <PortalLogin/>},
    {path: "/student tab", element: <StudentTab/>},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
