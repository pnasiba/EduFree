import {
  Header,
  Footer,
  IntroSection,
  CardSection,
  AboutUsSection,
} from "@components";
import { MainSection, Container } from "@containers";

import statistic from "@images/statistic.svg";
import partners from "@images/partners.svg";

const App = () => {
  return (
    <>
      <Header />

      <MainSection>
        <section className="intro pt-[180px] bg-[#1C1E53] pb-[116px]">
          <Container>
            <IntroSection />
          </Container>
        </section>

        <section className="statistic py-[80px] bg-[#EEF4FA]">
          <Container>
            <div className="flex gap-[50px] items-end">
              <img src={statistic} alt="static" className="w-[400px]" />
              <img src={partners} alt="static" className="w-[790px]" />
            </div>
          </Container>
        </section>

        <section className="card pt-[122px]">
          <Container>
            <CardSection />
          </Container>
        </section>

        <section className="about-us py-[150px]">
          <Container>
            <AboutUsSection />
          </Container>
        </section>
      </MainSection>

      <Footer />
    </>
  );
};

export default App;
