import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";

const App = () => {
  return (
    <>
      <Header />

        <MainSection>
          <section className="intro">
            <Container>
              <h1>Home Page</h1>
            </Container>
          </section>
        </MainSection>

      <Footer />
    </>
  );
};

export default App;