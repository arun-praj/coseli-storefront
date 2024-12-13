"use client" // This directive ensures that this component is treated as a client component

import dynamic from "next/dynamic"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { ShoppingBag } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

// Dynamically import ReactPlayer to ensure it only renders on the client side
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
})

const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base  overflow-hidden">
      <video
        autoPlay
        playsInline
        loop
        muted
        src={"/hero.webm"}
        className="h-full w-full absolute z-9"
        style={{ objectFit: "cover" }}
      ></video>

      {/* Background Video */}
      {/* {isClient && (
        <div className="absolute inset-0">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RUW6X_J_c_0" // Replace with your YouTube URL
            playing
            muted
            loop
            controls={false}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
          />
        </div>
      )} */}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 sm:p-12 lg:p-24 gap-6 bg-black text-white bg-opacity-50">
        <h1 className="text-5xl font-bold mb-4">
          Exceptional Quality. Custom Fit.
        </h1>
        <p className="text-lg mb-6">Handcrafted Boots for Every Journey</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/store"
            className="px-6 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
