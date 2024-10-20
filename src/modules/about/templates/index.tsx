import React from "react"
import { FaShieldAlt, FaShoePrints, FaMapMarkedAlt } from "react-icons/fa" // Importing Font Awesome Icons

const TitleText = () => (
  <div className="title-text text-center mb-10">
    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
  </div>
)

const CompanyInfo = () => (
  <div className="company-info text-left w-1/2">
    <p className="px-4 md:px-8 lg:px-8">
      Formed in 1992 as a company named Perth, Rabin Kumar Shrestha along with a
      group of colleagues started out a new venture to set a new standard in the
      shoe industry at a very young age. With very less capital, the company was
      funded from the pockets of the flag bearers of the company. Eventually, in
      1999, the company was renamed as Coseli. Coseli uses 100% leather of wide
      varieties. Products from Coseli ranges from school shoes, safety/security
      shoes to casual and formal leather shoes.
    </p>
  </div>
)

const BrandInfo = () => (
  <div className="brand-info text-center mt-8">
    <h2 className="text-2xl font-semibold mb-10">Our Brand Values</h2>
    <div className="flex justify-around mt-4">
      <div className="flex flex-col items-center">
        <FaShieldAlt size={40} className="text-blue-600 mb-2" />
        <p>Guarentee on leather</p>
      </div>
      <div className="flex flex-col items-center">
        <FaShoePrints size={40} className="text-blue-600 mb-2" />
        <p>Comfort & Style</p>
      </div>
      <div className="flex flex-col items-center">
        <FaMapMarkedAlt size={40} className="text-blue-600 mb-2" />
        <p>Shipping all over Nepal</p>
      </div>
    </div>
  </div>
)

const FounderSection = () => (
  <div className="founder-section text-center my-12">
    <img
      src="images/founder.png"
      alt="Founder Image"
      className="mx-auto mb-4 rounded-full w-48 h-48 object-cover"
    />
    <p className="italic">
      &quot;At Coseli, our mission has always been to craft shoes that embody
      excellence in quality and design. We believe in the power of innovation
      and the value of hard work.&qout;
    </p>
  </div>
)

const AboutPage = () => {
  return (
    <div
      className="content-container py-6 px-4 md:px-8 lg:px-16 mt-10 mb-20"
      data-testid="about-page-container"
    >
      {/* Title */}
      <TitleText />

      <div className="w-full flex mb-8">
        <div className="w-1/2">
          {/* Video from Local Device */}
          <video controls className="w-full h-auto">
            <source src="/videos/factory_vid.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Display Company Information */}
        <CompanyInfo />
      </div>

      {/* Founder Section */}
      <FounderSection />

      {/* Display Brand Information */}
      <BrandInfo />
    </div>
  )
}

export default AboutPage
