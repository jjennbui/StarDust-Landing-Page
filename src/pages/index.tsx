import Image from "next/image";
import Navbar from "./components/navbar";
import TopInfo from "./components/topInfo";
import MidInfo from "./components/midInfo";
import Subscription from "./components/subscription";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Navbar />
      <TopInfo />
      <MidInfo />
      <Subscription />
      <Footer />
    </main>
  );
}
