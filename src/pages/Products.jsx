const Products = () => {

  /* ================================
     PRODUCT DATA (STATIC)
  ================================= */
  const productList = [
    { id: 1, name: "Galaxy S24", price: "₹79,999", brand: "Samsung" },
    { id: 2, name: "iPhone 15", price: "₹89,999", brand: "Apple" },
    { id: 3, name: "OnePlus 12", price: "₹64,999", brand: "OnePlus" },
    { id: 4, name: "Pixel 8", price: "₹71,999", brand: "Google" },
    { id: 5, name: "Xiaomi 14", price: "₹59,999", brand: "Xiaomi" },
    { id: 6, name: "Nothing Phone (2)", price: "₹44,999", brand: "Nothing" },
  ];

  /* ================================
     COMPONENT UI
  ================================= */
  return (
    <div className="p-10 grid grid-cols-4 gap-6 bg-gray-50 min-h-screen">

      {/* ================================
          FILTER SIDEBAR
      ================================= */}
      <aside className="bg-white p-6 border shadow-sm">

        <h3 className="font-bold text-lg mb-4">
          Filters
        </h3>

        {/* RAM FILTER */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">
            RAM
          </h4>
          <p><input type="checkbox" /> 6GB</p>
          <p><input type="checkbox" /> 8GB</p>
          <p><input type="checkbox" /> 12GB</p>
        </div>

        {/* BATTERY FILTER */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">
            Battery
          </h4>
          <p><input type="checkbox" /> 4000mAh+</p>
          <p><input type="checkbox" /> 5000mAh+</p>
        </div>

        {/* BRAND FILTER */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">
            Brand
          </h4>
          <p><input type="checkbox" /> Samsung</p>
          <p><input type="checkbox" /> Apple</p>
          <p><input type="checkbox" /> OnePlus</p>
          <p><input type="checkbox" /> Google</p>
          <p><input type="checkbox" /> Xiaomi</p>
          <p><input type="checkbox" /> Nothing</p>
        </div>

        {/* PRICE FILTER */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">
            Price Range
          </h4>
          <p><input type="checkbox" /> Under ₹50,000</p>
          <p><input type="checkbox" /> ₹50,000 – ₹70,000</p>
          <p><input type="checkbox" /> Above ₹70,000</p>
        </div>

        <button className="bg-pinkPrimary text-white w-full py-2 rounded">
          Apply Filters
        </button>

      </aside>

      {/* ================================
          PRODUCT LIST SECTION
      ================================= */}
      <div className="col-span-3">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Products
          </h2>

          <select className="border p-2">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-3 gap-4">

          {productList.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 border shadow-sm hover:shadow-md transition"
            >

              {/* PRODUCT NAME */}
              <h3 className="font-semibold text-lg mb-1">
                {product.name}
              </h3>

              {/* BRAND */}
              <p className="text-sm text-gray-500 mb-2">
                Brand: {product.brand}
              </p>

              {/* PRICE */}
              <p className="text-lg font-bold mb-3">
                {product.price}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mb-4">
                High-performance smartphone with modern features,
                premium design, and reliable performance suitable
                for daily usage, gaming, and photography.
              </p>

              {/* FEATURES */}
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                <li>AMOLED Display</li>
                <li>Fast Charging</li>
                <li>5G Connectivity</li>
                <li>Premium Build</li>
              </ul>

              {/* ACTION BUTTONS */}
              <div className="flex gap-2">
                <button className="bg-pinkPrimary text-white px-3 py-1 rounded text-sm">
                  View
                </button>

                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                  Add to Cart
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-3">
          <button className="border px-3 py-1">Prev</button>
          <button className="border px-3 py-1">1</button>
          <button className="border px-3 py-1">2</button>
          <button className="border px-3 py-1">3</button>
          <button className="border px-3 py-1">Next</button>
        </div>

        {/* INFORMATION SECTION */}
        <div className="mt-16 bg-white p-6 border">
          <h3 className="font-semibold text-lg mb-3">
            Why Buy From Us?
          </h3>
          <p className="text-gray-600 mb-2">
            ✔ 100% Genuine Products
          </p>
          <p className="text-gray-600 mb-2">
            ✔ Official Brand Warranty
          </p>
          <p className="text-gray-600 mb-2">
            ✔ Secure Payments
          </p>
          <p className="text-gray-600 mb-2">
            ✔ Fast Delivery Across India
          </p>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Prices and availability are subject to change without notice.
        </div>

      </div>

    </div>
  );
};

export default Products;
