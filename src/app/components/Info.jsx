const Info = ({ brand, rating, stock, availible }) => {
  return (
    <div className="flex gap-2 pt-4">
      <div className="shrink-0 rounded-2xl bg-[#ACD7FF] p-1 px-1 text-xs font-thin text-lime-600">
        <p>{brand}</p>
      </div>
      <div className="shrink-0 rounded-2xl bg-[#EDA8B3] p-1 px-1 text-xs font-thin text-lime-600">
        <p>rating: {rating}</p>
      </div>
      <div className="shrink-0 rounded-2xl bg-[#C5E59C] p-1 px-1 text-xs font-thin text-lime-600">
        <p>in stock: {stock}</p>
      </div>
      <div className="shrink-0 rounded-2xl bg-[#F1E689] p-1 px-1 text-xs font-thin text-yellow-500">
        <p>{availible}</p>
      </div>
    </div>
  );
};

export default Info;
