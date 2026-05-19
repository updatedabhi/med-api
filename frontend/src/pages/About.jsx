const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              MedsStore is a modern digital pharmacy platform built to simplify
              access to essential medicines and healthcare products. We aim to
              bridge the gap between patients and reliable pharmaceutical
              services using technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From prescription medicines to daily healthcare needs, MedsStore
              ensures quality, transparency, and fast delivery — all from the
              comfort of your home.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600">10k+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600">500+</h3>
              <p className="text-gray-600 mt-2">Medicines Available</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600">PAN India</h3>
              <p className="text-gray-600 mt-2">Delivery Network</p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            To make healthcare accessible, affordable, and transparent for
            everyone by leveraging technology and reliable supply chains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
