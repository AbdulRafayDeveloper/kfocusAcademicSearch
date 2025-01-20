"use client";
import HomePage from "../app/components/home/Home";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
      }}
    >
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
