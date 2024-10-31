import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Welcome from './Components/Welcome';
import Header from './Components/Header';
import MainComponent from './Components/MainComponent';
import ReviewPage from './Components/ReviewPage';
import Brands from './Components/Brands';
import Users from './Components/Users';
// import BlogList from './Components/BlogList';
// import BlogDetail from './Components/BlogDetail';
import SignUp from './Components/SignUp';
import Login from './Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Admin from './Components/Admin';
import ProductList from './Components/ProductList';
import ProductPage from './Components/ProductPage';
import Footer from './Components/Footer';
import ShopPage from './Components/ShopPage';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
          {/* <Route path="/Blog/list" element={<BlogList />} />
          <Route path="/Blog/:id" element={<BlogDetail />} /> */}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/Product-list" element={<ProductList />} />
          <Route path="/Product/:productId" element={<ProductPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ShopPage" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};






























// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
// import MainComponent from './Components/MainComponent';
// import Blog from './Components/Blog';
// import BlogList from './Components/BlogList';
// import BlogDetail from './Components/BlogDetail';
// import SignUp from './SignUp';
// import Login from './Login';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Products from './Components/Products';
// import ProductList from './Components/ProductList';
// import ProductPage from './Components/ProductPage';
// import Footer from './Components/Footer';
// import ShopPage from './Components/ShopPage';
// import './App.css';

// export default function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<MainComponent />} />
//           <Route path="/Blog" element={<Blog />} />
//           <Route path="/Blog" element={<BlogList />} />
//           <Route path="/Blog/:id" element={<BlogDetail />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Products" element={<Products />} />
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:productId" element={<ProductPage />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/ShopPage" element={<ShopPage />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

