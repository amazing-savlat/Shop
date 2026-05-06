import "./App.css";
import MainLayout from "./components/Layout/MainLayout.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Pages/NotFoundPage/NotFound.jsx";
import GadgetsPage from "./components/Layout/Pages/Gadgets/GadgetsPage.jsx";
import OrdersPage from "./components/Layout/Pages/OrderPage/OrderPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path='/:market' element={<GadgetsPage />} />
        {/* <Route path="/orders" element={<OrdersPage />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/notFound" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
