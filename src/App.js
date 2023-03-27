import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Forgot from "./pages/forgot";
import Landing from "./pages/landing";
import AddCard from "./pages/addCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/addCard" element={<AddCard />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
