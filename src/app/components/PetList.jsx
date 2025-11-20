import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { Suspense } from "react";

const petlist = ({ category }) => {
  return (
    <Suspense>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => (
    <section>
      <div className="grid h-auto w-[150px] rounded-2xl shadow-md hover:bg-red-200/30">
        <div className="col-start-1 row-start-1 flex items-start justify-end p-3">
          <div className="z-5 rounded-full bg-red-200 p-1">
            <FavoritElement id={product.id} />
          </div>
        </div>

        <div className="col-start-1 row-start-1">
          <Image
            loading="eager"
            alt="product image"
            src={product.thumbnail}
            width={300}
            height={300}
            className="rounded-2xl"
          />
        </div>

        <div className="col-start-1 row-start-2 flex justify-between p-2">
          <div>
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-xs text-gray-400">{product.brand}</p>
            <p className="text-xs text-gray-400">{product.price}</p>
          </div>
          <div className="text-xs text-gray-400">
            <p>rating {product.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default petlist;
