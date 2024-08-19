import React from 'react'

const privacy = () => {
  return (
    <div className="bg-[#2A30AB] text-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-lg">Your privacy is important to us. Please read our policy to understand how we handle your information.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information to provide and improve our services. This may include:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal information such as name, email address, and contact details.</li>
            <li>Usage data to understand how our services are used.</li>
            <li>Cookies and similar technologies to enhance your experience.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve and personalize your experience.</li>
            <li>Send updates, marketing communications, and other information related to our services.</li>
            <li>Analyze usage to improve our platform.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Contact us for any privacy-related concerns.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update our privacy policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:support@learnclub.com" className="text-blue-400 underline">support@learnclub.com</a>.</p>
        </section>
      </div>
    </div>
  )
}

export default privacy