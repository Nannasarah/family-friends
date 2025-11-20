import Header from "@/app/components/Header";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

import Info from "@/app/components/Info";
import Link from "next/link";
import { Suspense } from "react";
import FavoritElement from "@/app/components/FavoritElement";

export default async function Detalje({ searchParams }) {
  return (
    <Suspense>
      <Filtreringscontainer searchParams={searchParams} />
    </Suspense>
  );
}

async function Filtreringscontainer({ searchParams }) {
  // Henter id fra URL'en — fx /detalje?id=7
  const params = await searchParams;
  const id = params.id;

  // Henter produktet fra API'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <>
      <Header />
      <div className="grid max-w-[380px] grid-rows-2 justify-center p-8 pt-0 pb-4">
        <div className="z-10 col-start-1 row-start-1 mx-8 mt-3 flex justify-between">
          <div>
            <div className="z-5 items-start rounded-full bg-red-300 p-1">
              <Link href="/">
                <IoIosArrowBack color="white" size={20} />
              </Link>
            </div>
          </div>
          <div>
            <div className="z-5 rounded-full bg-red-300 p-1">
              <FavoritElement id={product.id} />
            </div>
          </div>
        </div>

        <Image
          loading="eager"
          alt={product.title}
          src={product.thumbnail}
          width={350}
          height={350}
          className="col-start-1 row-start-1 row-end-3 rounded-2xl"
        />

        <div className="col-start-1 row-start-2 inline-block w-30 place-content-end pl-4">
          <div className="flex items-center gap-2 rounded-2xl bg-red-300 px-2 py-2 text-xs font-thin text-white backdrop-blur-md transition-colors duration-200">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="shrink-0 pr-2">{product.availabilityStatus}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[380px] justify-center p-8 pt-0 pb-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <Info
          brand={product.brand}
          rating={product.rating}
          stock={product.stock}
          availible={product.availabilityStatus}
        />
        <p className="pt-4 font-thin text-gray-600">{product.description}</p>
        <p className="pt-2 text-xs text-gray-400">
          {product.shippingInformation}
        </p>

        <div className="flex justify-center">
          <button className="mt-4 w-full cursor-pointer rounded-4xl bg-red-300 p-3 px-6 text-center font-medium text-white">
            Adopter ${product.price}
          </button>
        </div>
      </div>
    </>
  );
}
