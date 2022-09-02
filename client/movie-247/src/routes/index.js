import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/HomePage";
import Test from "../page/Home/Movie/Test";
// import Profile from "../page/User/Profile";
// import Search from "../page/Search";
// import WatchMovie from "../page/WatchMovie";
// import NotFound from "../page/NotFound";
// import SignIn from "../page/Auth/SignIn";
// import SignUp from "../page/Auth/SignUp";
// import AdminHome from "../page/AdminHome/";
// import AdminCreateMovie from "../page/AdminCreateMovie";
// import AdminCreateSlide from "../page/AdminCreateSlide";
// import PageMovieList from "../page/Movies";
// import MovieList from "../page/AdminMovieList";
// import UserList from "../page/AdminUserList";
// import LikedMovie from "../page/User/LikedMovie";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/test", component: Test}
];


export { PublicRoutes };
