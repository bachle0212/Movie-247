import { Route, Routes,useLocation } from "react-router-dom";
import {PublicRoutes} from "./routes/index";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
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
      </Routes>

    </div>
  );
}

export default App;
