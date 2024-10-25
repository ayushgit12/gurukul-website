import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-black text-lg">
          At Gurukul Research Foundation, we value your interest and look forward to helping you with your project needs. Whether you have questions, need additional information, or are ready to start a new project, we’re here to support you every step of the way. Our team takes pride in offering timely, friendly, and comprehensive responses to all inquiries.
        </p>
        <p className="text-black text-lg mt-4">
          Our response time is fast, and we aim to provide answers and solutions quickly, ensuring that you never have to wait long to get the information you need. We understand that effective communication is key to any successful project, and that’s why we make it a priority to stay connected with our clients. Reach out to us, and you’ll find a dedicated team ready to assist you with all your technical requirements.
        </p>
        <p className="text-black text-lg mt-4">
          We’re not only focused on delivering high-quality solutions but also on building lasting relationships with our clients. Each project we undertake is approached with a customer-first mindset, where your satisfaction is paramount. So feel free to reach out—whether it's a big project idea or a quick question, we’re always happy to connect. Let's turn your ideas into impactful realities together.
        </p>
      </header>

      {/* Contact Information */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Get in Touch</h2>
        <p className="text-black text-lg mb-1">We’d love to hear from you!</p>
        <p className="text-blue-600 font-medium text-lg">
          Contact Number: +1 (555) 123-4567
        </p>
        <p className="text-blue-600 font-medium text-lg">
          Email: info@gurukulresearch.com
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
