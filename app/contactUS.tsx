export default function Contact() {
    return (
      <div className="py-6 md:py-10 px-4 md:px-5">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Contact Us</h1>
          <p className="text-base md:text-lg">We’re here to help</p>
        </div>
  
        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-between gap-4 max-w-4xl mx-auto">
          {/* Call Us */}
          <div className="flex-1 border-2 border-gray-200 rounded-lg p-4 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium mb-3">Call Us</h2>
            <p className="text-base md:text-lg">8700720850</p>
          </div>
  
          {/* Ask a Question */}
          <div className="flex-1 border-2 border-gray-200 rounded-lg p-4 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">✉️</span>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium mb-3">Ask a Question</h2>
            <p className="text-sm mb-3">
              Send an E-mail to{" "}
              <a href="mailto:tasfoundationid@gmail.com" className="text-blue-600">
                tasfoundationid@gmail.com
              </a>
            </p>
          </div>
        </div>
  
        {/* Additional Links */}
        <div className="text-center mt-6 md:mt-10">
          <p className="text-sm mb-3">
            Looking for someone you know?{" "}
            <a href="#" className="text-blue-600">
              Try our Staff Directory.
            </a>
          </p>
          <p className="text-sm">
            For media inquiries, contact{" "}
            <a href="mailto:press@gsa.gov" className="text-blue-600">
              press@gsa.gov
            </a>{" "}
            or find your regional media contact{" "}
            <a href="#" className="text-blue-600">
              Regional Media Contacts.
            </a>
          </p>
        </div>
      </div>
    );
  }