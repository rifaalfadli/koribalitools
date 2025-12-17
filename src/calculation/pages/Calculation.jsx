import { PoleCalculator } from "../components/PoleCalculator";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Calculation() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Helmet>
          <title>Calculation - CV. KORI BALI</title>
          <meta
            name="calculation"
            content="Calculation System CV. KORI BALI membantu Anda menghitung dan menganalisis struktur pole dengan mudah."
          />
        </Helmet>

        {/* <Hero title="Calculation" />
        <Breadcrumb page="Kontak" /> */}

        <div className="pt-8 container flex-1">
          <div className="min-h-screen bg-gray-50 border border-gray-250">
            <PoleCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
