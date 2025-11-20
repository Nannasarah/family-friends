"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const price = formData.get("price");
  // Validering af produktnavn
  if (!productName) {
    //hvis der ikke er et productname (!)
    error.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "Mindst 5 karakterer";
  }
  // Validering af pris
  if (!price) {
    //hvis der ikke er emn price (!) ligesom med productname
    error.price = "Pris skal udfyldes";
    //nedenfor skal være større end 0
  } else if (price <= 0) {
    error.price = "Pris skal være et positivt tal";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName, price };
  }
  return { succes: true }; //det her blive rkun læst hvis det ovenover ikke bliver eksikveret
};
