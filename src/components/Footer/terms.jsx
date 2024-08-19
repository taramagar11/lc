import React from 'react'

const terms = () => {
  return (
    <div className="bg-[#2A30AB] text-white min-h-screen py-12 px-6">
    <div className="container mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-lg">Please read these Terms of Service carefully before using our platform.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
        <p className="mb-4">As a user, you agree to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide accurate and complete information when creating an account.</li>
          <li>Keep your account credentials confidential and secure.</li>
          <li>Use our platform in compliance with all applicable laws and regulations.</li>
          <li>Not engage in any activity that may harm or disrupt our services.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Account Responsibilities</h2>
        <p className="mb-4">You are responsible for:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>All activities that occur under your account.</li>
          <li>Maintaining the security of your account and reporting any unauthorized use.</li>
          <li>Ensuring that your use of our platform does not violate any laws or regulations.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Limitations of Liability</h2>
        <p className="mb-4">
          Our platform is provided "as is" and we make no warranties or representations regarding its reliability, accuracy, or availability. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms of Service from time to time. Changes will be effective immediately upon posting on this page, and your continued use of our platform signifies your acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@learnclub.com" className="text-blue-400 underline">support@learnclub.com</a>.</p>
      </section>
    </div>
  </div>
  )
}

export default terms