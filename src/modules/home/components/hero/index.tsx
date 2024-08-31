'use client'; // This directive ensures that this component is treated as a client component

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";

// Dynamically import ReactPlayer to ensure it only renders on the client side
const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base bg-ui-bg-subtle overflow-hidden">
      {/* Background Video */}
      {isClient && (
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
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 sm:p-12 lg:p-24 gap-6 bg-black bg-opacity-50">
        <span>
          <Heading
            level="h1"
            className="text-3xl sm:text-4xl lg:text-5xl leading-10 text-white font-normal"
          >
            सधैं एक पाइला अगाडी।
          </Heading>
        </span>
        <a
          href="/Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="flex items-center gap-2">
            Visit Store
            <ShoppingBag />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
