const Dashboard = () => (
  <div className="bg-gray-50 min-h-screen p-10">

    {/* ===============================
        DASHBOARD CONTAINER
    =============================== */}
    <div className="max-w-4xl mx-auto">

      {/* ===============================
          HEADER
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h2 className="text-3xl font-semibold text-pinkPrimary mb-1">
          User Dashboard
        </h2>
        <p className="text-gray-600">
          Welcome back! Manage your account and activities here.
        </p>
      </div>

      {/* ===============================
          PROFILE SECTION
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Profile Information
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">Vikas Rajput</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium">john@test.com</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">+91 98765 43210</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="font-medium">Standard User</p>
          </div>
        </div>
      </div>

      {/* ===============================
          ACCOUNT STATS
      =============================== */}
      <div className="grid grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-6 border text-center">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-semibold">12</p>
        </div>

        <div className="bg-white p-6 border text-center">
          <p className="text-sm text-gray-500">Active Services</p>
          <p className="text-2xl font-semibold">3</p>
        </div>

        <div className="bg-white p-6 border text-center">
          <p className="text-sm text-gray-500">Support Tickets</p>
          <p className="text-2xl font-semibold">1</p>
        </div>

      </div>

      {/* ===============================
          RECENT ORDERS
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Recent Orders
        </h3>

        <div className="border-b pb-3 mb-3">
          <p className="font-medium">Galaxy S24</p>
          <p className="text-sm text-gray-500">Order ID: ORD12345</p>
          <p className="text-sm text-green-600">Delivered</p>
        </div>

        <div className="border-b pb-3 mb-3">
          <p className="font-medium">OnePlus 12</p>
          <p className="text-sm text-gray-500">Order ID: ORD12346</p>
          <p className="text-sm text-orange-600">In Transit</p>
        </div>

        <div>
          <p className="font-medium">Nothing Phone (2)</p>
          <p className="text-sm text-gray-500">Order ID: ORD12347</p>
          <p className="text-sm text-blue-600">Processing</p>
        </div>
      </div>

      {/* ===============================
          NOTIFICATIONS
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Notifications
        </h3>

        <ul className="space-y-3 text-sm">
          <li>✔ Your order ORD12345 has been delivered.</li>
          <li>✔ Warranty activated for Galaxy S24.</li>
          <li>✔ New offers available on accessories.</li>
        </ul>
      </div>

      {/* ===============================
          SUPPORT SUMMARY
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Support Summary
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          Active Ticket: Screen issue (TCKT7890)
        </p>

        <p className="text-sm text-gray-600 mb-4">
          Status: Under Review
        </p>

        <button className="bg-pinkPrimary text-white px-4 py-2 rounded">
          View Support Tickets
        </button>
      </div>

      {/* ===============================
          SETTINGS PREVIEW
      =============================== */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Account Settings
        </h3>

        <div className="space-y-2 text-sm">
          <p>✔ Change Password</p>
          <p>✔ Update Contact Details</p>
          <p>✔ Manage Notifications</p>
          <p>✔ Privacy Settings</p>
        </div>
      </div>

      {/* ===============================
          FOOTER NOTE
      =============================== */}
      <div className="text-center text-sm text-gray-500">
        Last login: 10 Feb 2026 | Device: Chrome (Windows)
      </div>

    </div>
  </div>
);

export default Dashboard;
