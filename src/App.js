import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import RequiredAuth from "./Pages/Login/Register/RequiredAuth/RequiredAuth";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/orders"
          element={
            <RequiredAuth>
              <Order />
            </RequiredAuth>
          }
        />
        <Route
          path="/addservice"
          element={
            <RequiredAuth>
              <AddService />
            </RequiredAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <ManageServices />
            </RequiredAuth>
          }
        />
        <Route
          path="/checkout/:serviceId"
          element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
