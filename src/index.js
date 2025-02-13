import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
