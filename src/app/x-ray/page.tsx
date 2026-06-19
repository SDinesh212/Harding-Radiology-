import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import XRay from "./XRay";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <XRay />
      </main>

      <Footer />
    </>
  );
}