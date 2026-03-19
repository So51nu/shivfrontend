import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Products from "./pages/Project";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Admindashboard";

import ProjectsPage from "./pages/Project";
import AdminProjects from "./pages/AdminProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Old route (tumhare project me ye products bol rahe ho) */}
        <Route path="/products" element={<Products />} />

        {/* ✅ NEW: Public Projects */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* ✅ NEW: Admin Projects */}
        <Route path="/admin-projects" element={<AdminProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
