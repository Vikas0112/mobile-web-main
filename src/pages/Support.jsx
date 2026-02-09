const Support = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto bg-white p-8 shadow">
        <h2 className="text-3xl font-semibold text-pinkPrimary mb-2">
          Support Center
        </h2>
        <p className="text-gray-600 mb-6">
          We are here to help you with warranty, service requests, and product support.
        </p>

        {/* Warranty Check */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Check Warranty Status</h3>
          <input
            className="border p-2 w-full mb-3"
            placeholder="Enter IMEI Number"
          />
          <button className="bg-pinkPrimary text-white px-4 py-2 rounded">
            Check Warranty
          </button>
        </div>

        {/* Divider */}
        <hr className="my-8" />

        {/* Service Request */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Raise a Service Request</h3>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Full Name"
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Email Address"
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Mobile Number"
          />

          <select className="border p-2 w-full mb-3">
            <option>Select Issue Type</option>
            <option>Screen Damage</option>
            <option>Battery Issue</option>
            <option>Network Problem</option>
            <option>Software Issue</option>
            <option>Other</option>
          </select>

          <textarea
            className="border p-2 w-full mb-3"
            rows="4"
            placeholder="Describe your issue"
          />

          <button className="bg-pinkPrimary text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </div>

        <hr className="my-8" />

        {/* Ticket Status */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Check Ticket Status</h3>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Enter Ticket ID"
          />

          <button className="bg-pinkPrimary text-white px-4 py-2 rounded">
            Check Status
          </button>
        </div>

        <hr className="my-8" />

        {/* FAQs */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>

          <div className="mb-4">
            <p className="font-medium">How do I find my IMEI number?</p>
            <p className="text-gray-600">
              Dial *#06# on your phone or check the device box or settings.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium">What is covered under warranty?</p>
            <p className="text-gray-600">
              Manufacturing defects and hardware issues are covered as per warranty policy.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium">How long does service take?</p>
            <p className="text-gray-600">
              Most repairs are completed within 5–7 working days.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Can I cancel my service request?</p>
            <p className="text-gray-600">
              Yes, you can cancel before the device is picked up.
            </p>
          </div>
        </div>

        <hr className="my-8" />

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Contact Support</h3>

          <p className="text-gray-700 mb-2">
            📧 Email: support@mobileweb.com
          </p>
          <p className="text-gray-700 mb-2">
            📞 Phone: +91 98765 43210
          </p>
          <p className="text-gray-700 mb-2">
            🕘 Support Hours: Mon–Sat (9 AM – 6 PM)
          </p>
        </div>

        <hr className="my-8" />

        {/* Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support Policies</h3>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Warranty is valid only with proof of purchase.</li>
            <li>Physical damage is not covered under standard warranty.</li>
            <li>Backup your data before submitting the device.</li>
            <li>Service availability depends on location.</li>
            <li>Replacement is subject to internal verification.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Support;
