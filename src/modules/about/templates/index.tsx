import { Suspense } from "react"

import React from "react"

const CompanyInfo = () => (
  <div className="company-info">
    <h2>About Us</h2>
    <p>Welcome to our company! We are dedicated to providing top-notch products and services to our customers. Here is a little bit about our story:</p>
    <p>Our company was founded in [Year] with the mission to [Company Mission]. Over the years, we have grown into a leading provider of [Products/Services], serving customers across [Regions/Countries].</p>
    <p>Our core values include [Core Values]. We strive to maintain these values in every aspect of our business to ensure the highest quality and customer satisfaction.</p>
    <p>If you have any questions or would like to get in touch with us, please contact us at [Contact Information].</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="flex flex-col py-6 content-container" data-testid="about-page-container">
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="about-page-title">About Our Company</h1>
        </div>
        {/* Display Company Information */}
        <CompanyInfo />
      </div>
    </div>
  );
}

export default AboutPage;

