import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/HomePage";
import Test from "../page/Home/Movie/Test";
import AdminHomePage from '../page/Admin/Home/AdminHomePage'

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/test", component: Test}
];

const AdminRoutes = [
  { path:'/admin',component: AdminHomePage}
]


export { PublicRoutes,AdminRoutes };
