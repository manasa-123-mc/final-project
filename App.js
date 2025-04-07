import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import fashion from "./Components/Assets/fashion.jpeg";
import summer from "./Components/Assets/summer.jpeg";
import banner_image from "./Components/Assets/banner_image.png";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/Mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/Womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/Fashion" element={<ShopCategory banner={fashion} category="fashion" />} />
          <Route path="/Summer sale" element={<ShopCategory banner={summer} category="summer sale" />} />
          
          <Route path="/Home decor" element={<ShopCategory banner={banner_image} category="home deccor" />} />
          <Route path='/about' element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
     
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
