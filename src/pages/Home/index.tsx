import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Content } from "../../components/Content";
import { InstrumentView } from "./components/InstrumentView";

export function Home() {
  return (
    <Layout>
      <Header />
      <Main>
        <Sidebar />
        <Content>
        <InstrumentView/>
        </Content>
      </Main>
      <Footer />
    </Layout>
  );
}
