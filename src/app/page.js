"use client";
import HomePage from "../app/components/home/Home";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
      }}
    >
      <HomePage />
    </div>
  );
}
