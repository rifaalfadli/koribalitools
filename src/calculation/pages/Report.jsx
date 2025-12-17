import { ReportPage } from "../components/ReportPage";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Report() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Helmet>
          <title>Report - CV. KORI BALI</title>
          <meta
            name="report"
            content="Report System CV. KORI BALI menyajikan hasil analisis dan ringkasan data struktur pole secara lengkap."
          />
        </Helmet>
        <div className="pt-8 container flex-1">
          <div className="border border-gray-250">
            <ReportPage />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
