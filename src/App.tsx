import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { HousesProvider } from "./apis/HouseProvider";

function App() {
  return (
    <HousesProvider>
      <Router>
        <Routes>
          {/* Public routes with general Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Route>

          {/* Signup route without Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />

          {/* Protected routes with Dashboard Layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </HousesProvider>
  );
}

export default App;
