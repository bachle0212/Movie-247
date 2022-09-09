import { Route, Routes,useLocation } from "react-router-dom";
import {PublicRoutes,AdminRoutes} from "./routes/index";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import AdminLayout from "./layout/AdminLayout/AdminLayout";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Routes>
        {PublicRoutes.map((route, index) =>{
          const Page = route.component;
          return <Route path={route.path} key={index}
          element={
            <DefaultLayout>
              <Page/>
            </DefaultLayout>} />
        })
        }
        {AdminRoutes.map((route, index) =>{
          const Page = route.component;
          return <Route path={route.path} key={index}
          element={
            <AdminLayout>
              <Page/>
            </AdminLayout>} />
        })
        }
      </Routes>

    </div>
  );
}

export default App;
