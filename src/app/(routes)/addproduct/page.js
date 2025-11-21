"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state.error?.productName);
  console.log("state", state);
  return (
    <div className="flex h-lvh flex-col items-center justify-center">
      <form
        action={postProduct}
        className="rounded-[5px] border-1 border-gray-300 bg-gray-100 px-10 py-20"
      >
        {state.error?.productName && (
          <p className="text-red-600">{state.error.productName}</p>
        )}

        {state.succes && (
          <p className="text-green-600">Din form er sendt videre!</p>
        )}
        {/* Produktnavn */}
        <input
          type="text"
          name="productname"
          placeholder="Product name"
          defaultValue={state.productName}
          className="mr-3 rounded-[5px] border-1 bg-white p-1"
        />

        {/* Prisfelt */}
        {state.error?.price && (
          <p className="text-red-600">{state.error.price}</p>
        )}
        <input
          type="number"
          name="price"
          inputMode="numeric" //viser kun tal på mobil
          placeholder="Price"
          defaultValue={state.price}
          className="mr-3 rounded-[5px] border-1 bg-white p-1"
        />

        <button
          type="submit"
          className="cursor-pointer rounded-[5px] border-1 border-pink-500 bg-pink-300 p-1 text-white"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default addProduct;
