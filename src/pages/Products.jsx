const Products = () => {
  const productList = [
    { id: 1, name: "Galaxy S24", price: "₹79,999" },
    { id: 2, name: "iPhone 15", price: "₹89,999" },
    { id: 3, name: "OnePlus 12", price: "₹64,999" },
    { id: 4, name: "Pixel 8", price: "₹71,999" },
    { id: 5, name: "Xiaomi 14", price: "₹59,999" },
    { id: 6, name: "Nothing Phone (2)", price: "₹44,999" },
  ];

  return (
    <div className="p-10 grid grid-cols-4 gap-6">
      
      {/* Filters */}
      <aside className="bg-white p-4 border">
        <h3 className="font-bold mb-2">Filters</h3>
        <p><input type="checkbox" /> 8GB RAM</p>
        <p><input type="checkbox" /> 5000mAh+</p>
      </aside>

      {/* Products */}
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {productList.map((product) => (
          <div key={product.id} className="bg-white p-4 border">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
