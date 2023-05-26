import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Cartoons from "./pages/Cartoons/Cartoons";
import Register from "./pages/Register/Register";
import OneMedia from "./pages/OneMedia/OneMedia";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={'/movies'} element={<Movies/>}/>
          <Route path={'/series'} element={<Series/>}/>
          <Route path={'/cartoons'} element={<Cartoons/>}/>
          <Route path={'/movies/:id'} element={<OneMedia/>}/>
        </Route>
        <Route path={'/register'} element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
