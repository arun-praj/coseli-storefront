"use client"
import React, { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Trophy,
  Star,
} from "lucide-react"

const SliderContent = [
  {
    mainHeading: "Unmatched Comfort!",
    subHeading:
      "These boots feel like they were made for my feet—no break-in needed. Perfect for all-day wear!",
    icon: Smartphone,
  },
  {
    mainHeading: "Rugged and Reliable!",
    subHeading:
      "Wore them hiking, rain or shine, and they held up perfectly. Built to last!",
    icon: Trophy,
  },
  {
    mainHeading: "Stylish and Functional!",
    subHeading:
      "Finally, boots that look great and handle any adventure I throw at them.",
    icon: Star,
  },
  {
    mainHeading: "Great Support!",
    subHeading:
      "These boots offer excellent ankle support and keep my feet comfortable on long days.",
    icon: Star,
  },
  {
    mainHeading: "Perfect Fit, Right Out of the Box!",
    subHeading:
      "No blisters, no soreness. Just pure comfort and style. Love them!",
    icon: Star,
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState("right")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSlide = (dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    const nextSlide =
      dir === "right"
        ? (currentSlide + 1) % SliderContent.length
        : (currentSlide - 1 + SliderContent.length) % SliderContent.length

    setCurrentSlide(nextSlide)
    setTimeout(() => setIsAnimating(false), 500) // Match with transition duration
  }

  //   const handleIconClick = (index) => {
  //     if (isAnimating || index === currentSlide) return
  //     setDirection(index > currentSlide ? "right" : "left")
  //     setIsAnimating(true)
  //     setCurrentSlide(index)
  //     setTimeout(() => setIsAnimating(false), 500)
  //   }
  const handleDotClick = (index) => {
    if (isAnimating || index === currentSlide) return

    setIsAnimating(true)
    setDirection(index > currentSlide ? "right" : "left")
    setCurrentSlide(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div className="bg-gray-50 py-24 ">
      <div className="w-full mx-auto text-center tracking-[5px] uppercase">
        What people are saying
      </div>
      <div className="relative w-full  mx-auto overflow-hidden p-12 rounded-lg">
        {/* Navigation Arrows */}
        <button
          onClick={() => handleSlide("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleSlide("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Content */}
        <div className="text-center relative h-44">
          <div
            className={`absolute w-full transition-all duration-500 ease-in-out transform ${
              isAnimating ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-4xl font-bold mb-8  ">
              {SliderContent[currentSlide].mainHeading}
            </h1>
            <h2 className="text-xl text-gray-600">
              {SliderContent[currentSlide].subHeading}
            </h2>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {SliderContent.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-500 w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              disabled={isAnimating}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Brand Icons Navigation */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {SliderContent.map((slide, index) => {
            const IconComponent = slide.icon
            return (
              <button
                key={index}
                onClick={() => handleIconClick(index)}
                className={`p-2 rounded-full ${
                  currentSlide === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              >
                <IconComponent className="w-5 h-5" />
              </button>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default Slider
