"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="h-15 w-30 shrink-0 cursor-pointer items-center justify-center gap-4 overflow-x-auto scroll-smooth rounded-full bg-red-200 p-2 text-white hover:bg-red-300 [&::-webkit-scrollbar]:hidden"
    >
      {category}
    </button>
  );
};

export default CategoryElement;
