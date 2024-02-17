import "./App.css";
import SideBar from "./components/sideBar";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routing></Routing>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
