const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="p-10 text-center bg-pinkSoft rounded m-6">
        <h1 className="text-4xl text-pinkPrimary font-bold mb-4">
          Smart Mobile Solutions
        </h1>
        <p className="mb-6 text-gray-700">
          Discover latest smartphones, accessories and telecom services
        </p>

        <div className="flex justify-center gap-4">
          <input
            className="border border-pinkBorder p-2 w-1/2"
            placeholder="Search by brand, model, or feature"
          />
          <button className="bg-pinkPrimary text-white px-6 py-2 rounded">
            Search
          </button>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="max-w-6xl mx-auto mt-10 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Smartphones</h3>
            <p className="text-sm text-gray-600">
              Latest Android and iOS devices
            </p>
          </div>

          <div className="bg-white p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Accessories</h3>
            <p className="text-sm text-gray-600">
              Chargers, covers, earbuds & more
            </p>
          </div>

          <div className="bg-white p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Prepaid Plans</h3>
            <p className="text-sm text-gray-600">
              Affordable data & calling plans
            </p>
          </div>

          <div className="bg-white p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Postpaid Plans</h3>
            <p className="text-sm text-gray-600">
              Premium corporate & family plans
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="max-w-6xl mx-auto mt-14 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Popular Products
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-5 shadow">
            <h4 className="font-medium">Galaxy S24</h4>
            <p className="text-gray-600">₹79,999</p>
          </div>

          <div className="bg-white p-5 shadow">
            <h4 className="font-medium">iPhone 15</h4>
            <p className="text-gray-600">₹89,999</p>
          </div>

          <div className="bg-white p-5 shadow">
            <h4 className="font-medium">OnePlus 12</h4>
            <p className="text-gray-600">₹64,999</p>
          </div>

          <div className="bg-white p-5 shadow">
            <h4 className="font-medium">Pixel 8</h4>
            <p className="text-gray-600">₹71,999</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white mt-16 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Why Choose Us
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-semibold mb-2">Genuine Products</h4>
            <p className="text-gray-600 text-sm">
              100% original devices with official warranty
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping across India
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">
              Dedicated support whenever you need help
            </p>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="bg-pinkSoft py-12 mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Exclusive Offers & Deals
        </h2>
        <p className="text-gray-700 mb-6">
          Save more with festive discounts and bank offers
        </p>
        <button className="bg-pinkPrimary text-white px-6 py-2 rounded">
          View Offers
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow">
            <p className="text-sm text-gray-600">
              “Excellent service and fast delivery. Highly recommended!”
            </p>
            <p className="mt-3 font-medium">— Rahul</p>
          </div>

          <div className="bg-white p-6 shadow">
            <p className="text-sm text-gray-600">
              “Best prices and genuine products. Very satisfied.”
            </p>
            <p className="mt-3 font-medium">— Sneha</p>
          </div>

          <div className="bg-white p-6 shadow">
            <p className="text-sm text-gray-600">
              “Customer support was quick and helpful.”
            </p>
            <p className="mt-3 font-medium">— Aman</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white mt-16 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get updates on new launches and offers
        </p>

        <div className="flex justify-center gap-4">
          <input
            className="border p-2 w-1/3"
            placeholder="Enter your email"
          />
          <button className="bg-pinkPrimary text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER PREVIEW */}
      <footer className="bg-gray-800 text-white mt-16 py-6 text-center">
        <p className="text-sm">
          © 2026 Smart Mobile Solutions. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;
