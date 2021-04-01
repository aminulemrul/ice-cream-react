import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
