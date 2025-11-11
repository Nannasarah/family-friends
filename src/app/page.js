import Image from "next/image";
import Link from "next/link";
import PetList from "./components/PetList";
import Header from "./components/Header";
import Filtreringslinje from "./components/FiltreringsLinje";
import MenuLinje from "./components/MenuLinje";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <Header />
      <section className="flex gap-4 overflow-x-auto p-5">
        <Filtreringslinje />
      </section>
      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>
      <MenuLinje />
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  console.log(category);

  return (
    <section className="grid max-w-[380px] grid-cols-2 justify-items-center gap-4 p-5 pb-26">
      <PetList category={category} />
    </section>
  );
}
