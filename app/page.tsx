export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Domain Available for Purchase
          </h1>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 backdrop-blur-sm text-center">
          <div className="mb-6">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Interested in acquiring this premium domain? We&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-gray-700 font-medium">
              Contact us to discuss pricing and transfer details:
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:support@aipresentationmaker.app"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                support@aipresentationmaker.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
