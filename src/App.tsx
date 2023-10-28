import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Sidebar/>
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
