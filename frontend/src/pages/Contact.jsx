const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">Address:</span>{" "}
                MedsStore Pvt. Ltd., Sector 62, Noida, Uttar Pradesh, India
              </p>

              <p>
                <span className="font-semibold text-gray-800">Phone:</span> +91
                98765 43210
              </p>

              <p>
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                support@medsstore.com
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Working Hours:
                </span>{" "}
                Mon – Sat (9:00 AM – 9:00 PM)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
