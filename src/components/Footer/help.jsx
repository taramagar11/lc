import React from 'react'

const help = () => {
  return (
    <div className="bg-[#2A30AB] text-white py-8 flex flex-col items-center">
      <div className="container px-6 py-12 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Help Center</h1>
          <p className="text-lg">Find answers to your questions or contact us for support.</p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-[#6168CF] ">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p>
              Our platform provides a variety of features to help you connect with peers and explore your interests. 
              Whether you need assistance with your account, navigating the site, or understanding how to use specific 
              features, you can find helpful information in this section.
            </p>
          </div>

          <div className="p-6 bg-[#6168CF] ">
            <h2 className="text-xl font-semibold mb-4">FAQs</h2>
            <ul className="list-disc list-inside">
              <li><strong>How do I create an account?</strong> Visit the registration page and follow the prompts to create an account.</li>
              <li><strong>How can I reset my password?</strong> Use the "Forgot Password" link on the login page to reset your password.</li>
              <li><strong>How do I join a club?</strong> Search for clubs in your area of interest and click "Join" to become a member.</li>
              <li><strong>Who can I contact for support?</strong> Reach out to us via email at <a href="mailto:support@learnclub.com" className="text-white underline">support@learnclub.com</a>.</li>
            </ul>
          </div>

          <div className="p-6 bg-[#6168CF] ">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or need further assistance, feel free to get in touch with our support team:
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>Email:</strong> <a href="mailto:support@learnclub.com" className="text-white underline">support@learnclub.com</a></li>
              <li><strong>Phone:</strong> +1 (555) 000-0000</li>
              <li><strong>Office:</strong> 100 Smith Street, Collingwood VIC 3066, AU</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default help