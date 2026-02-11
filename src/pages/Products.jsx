import { useState } from "react";

const Products = () => {

  const productList = [
    { id: 1, name: "Galaxy S24", price: 79999, brand: "Samsung" },
    { id: 2, name: "iPhone 15", price: 89999, brand: "Apple" },
    { id: 3, name: "OnePlus 12", price: 64999, brand: "OnePlus" },
    { id: 4, name: "Pixel 8", price: 71999, brand: "Google" },
    { id: 5, name: "Xiaomi 14", price: 59999, brand: "Xiaomi" },
    { id: 6, name: "Nothing Phone (2)", price: 44999, brand: "Nothing" },
  ];

  /* ================================
     STATE FOR BRAND FILTER
  ================================= */
  const [selectedBrands, setSelectedBrands] = useState([]);

  /* ================================
     HANDLE BRAND CHANGE
  ================================= */
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  /* ================================
     FILTERED PRODUCTS
  ================================= */
  const filteredProducts =
    selectedBrands.length === 0
      ? productList
      : productList.filter(product =>
          selectedBrands.includes(product.brand)
        );

  return (
    <div className="p-10 grid grid-cols-4 gap-6 bg-gray-50 min-h-screen">

      {/* FILTER SIDEBAR */}
      <aside className="bg-white p-6 border shadow-sm">

        <h3 className="font-bold text-lg mb-4">Filters</h3>

        {/* BRAND FILTER */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Brand</h4>

          {["Samsung","Apple","OnePlus","Google","Xiaomi","Nothing"].map(brand => (
            <p key={brand}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              /> {brand}
            </p>
          ))}
        </div>

      </aside>

      {/* PRODUCT LIST */}
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">

          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-5 border shadow-sm">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              <p className="text-lg font-bold">₹{product.price}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Products;
