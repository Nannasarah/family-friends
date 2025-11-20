"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");

  if (!productName) {
    //hvis der ikke er et productname (!)
    error.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "Mindst 5 karakterer";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName };
  }
  return { succes: true }; //det her blive rkun læst hvis det ovenover ikke bliver eksikveret
};
