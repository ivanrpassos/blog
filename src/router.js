// React Router DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// My imports
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Search from './pages/Search';

const Router = () => {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Header />

      {/* ROUTER OUTLET */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:idPost" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search/:word_search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/undefined" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
