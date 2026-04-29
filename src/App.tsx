import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
//import Login from "./pages/Login";
//import RegisterEvent from "./pages/RegisterEvent";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import MAinLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./pages/Loginform";
import RegisterForm from "./pages/RegisterEvent";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MAinLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
      

    

  );


}

export default App;