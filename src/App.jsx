import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BookingForm from "./pages/BookingForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
