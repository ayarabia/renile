import "./App.css";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
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