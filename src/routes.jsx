import NotFound from "./pages/notFound"
import HomeLayout from "./components/HomeLayout"
import Home from "./pages/home"
import Posts from "./pages/posts"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./pages/login"
import Post from "./pages/post"

const routes = [
    {
        path: '/',
        element: <HomeLayout/>,
        auth: true,
        children: [
            {
                path: '',
                element: <Home/>,
                auth: true,
            },
            {
                path: '/posts',
                element: <Posts/>,
                auth: true,
            },
            {
                path: '/posts/:id',
                element: <Post/>,
                auth: true,
            },
           
        ]
    },
    {
        path: '/login',
        element: <Login/>,
        auth: false,
    },
    {
        path: '*',
        element: <NotFound/>,
        auth: false,
    },

]

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });


export default authCheck(routes)
