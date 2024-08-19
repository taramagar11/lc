import React from 'react'

const jobs = () => {
  return (
    <div className="bg-[#2A30AB] text-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Careers at LearnClub</h1>
          <p className="mt-2 text-lg">Join our team and help us shape the future of education!</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <ul className="space-y-6">
            <li className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold"> Social Media Handler</h3>
              <p className="mt-2">We're looking for a talented Social Media Handler to join our team and work on exciting projects.</p>
              <a href="#" className="mt-4 inline-block text-blue-400 underline">Apply Now</a>
            </li>

            <li className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Digital Marketing</h3>
              <p className="mt-2">We're looking for a Digital Marketing person to help us grow bigger and better.</p>
              <a href="#" className="mt-4 inline-block text-blue-400 underline">Apply Now</a>
            </li>

            {/* Add more job listings here */}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <p className="text-lg mb-4">To apply for any of the positions listed above, please send your resume and cover letter to <a href="mailto:jobs@learnclub.com" className="text-blue-400 underline">jobs@learnclub.com</a>.</p>
          <p>If you have any questions, feel free to reach out to us at the same email address. We look forward to hearing from you!</p>
        </section>
      </div>
    </div>
  )
}

export default jobs