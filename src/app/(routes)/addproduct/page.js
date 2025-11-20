"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state.error?.productName);
  console.log("state", state);
  return (
    <div className="flex h-lvh items-center justify-center">
      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-600">{state.error.productName}</p>
        )}

        {state.succes && <p className="text-green-600">Din form er sendt videre!</p>}

        <input
          type="text"
          name="productname"
          placeholder="Product name"
          defaultValue={state.productName}
          className="mr-3 border-1 p-1"
        />
        <button
          type="submit"
          className="cursor-pointer border-1 border-blue-500 bg-blue-300 p-1 text-white"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default addProduct;
