import Image from "next/image";
import CalmCreature from "./components/p5js-calm-creatuare";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1>Said Kocak Public Works</h1>
        <CalmCreature />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">



      </footer>
    </div>
  );
}
