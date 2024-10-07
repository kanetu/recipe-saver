import Image from "next/image";
import FoodCard from "./components/FoodCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <FoodCard></FoodCard>
        </div>
      </main>
    </div>
  );
}
