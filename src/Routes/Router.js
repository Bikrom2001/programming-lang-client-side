import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import Courses from "../components/Courses/Courses";
import CoursesDetails from "../components/CoursesDetails/CoursesDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://programming-lang-server-side.vercel.app/allcourses`)
            },
            {
                path: '/details/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://programming-lang-server-side.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://programming-lang-server-side.vercel.app/checkout/${params.id}`)
            }
        ]
    }
])

export default router;