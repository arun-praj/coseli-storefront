import Image from "next/image"
import Link from "next/link"
const WhySection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 px-8">
        <Link href="/collections/formals">
          <div className="relative h-64 w-full sm:h-80 lg:h-[480px]">
            <Image
              src="/formal.png"
              alt="Men's Boots"
              fill={true}
              // className=" aspect-square"
              className=" object-cover aspect-square "
            />
            <h3 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] text-white font-bold tracking-wider text-4xl">
              Formals
            </h3>
          </div>
        </Link>

        <Link href={"/collections/casuals"}>
          <div className="relative h-64 w-full sm:h-80 lg:h-[480px] ">
            <Image
              src="/casual.png"
              alt="Men's Boots"
              fill={true}
              // className=" aspect-square"
              className=" object-cover"
            />
            <h3 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] text-white font-bold tracking-wider text-4xl">
              Casuals
            </h3>
          </div>
        </Link>
        <Link href={"collections/casuals"}>
          <div className="relative h-64 w-full sm:h-80 lg:h-[480px] ">
            <Image
              src="/casual.png"
              alt="Men's Boots"
              fill={true}
              // className=" aspect-square"
              className=" object-cover"
            />
            <h3 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] text-white font-bold tracking-wider text-4xl">
              Boots
            </h3>
          </div>
        </Link>
        <Link href={"collections/kids"}>
          <div className="relative h-64 w-full sm:h-80 lg:h-[480px] ">
            <Image
              src="/kids.png"
              alt="Kids Boots"
              fill={true}
              // className=" aspect-square"
              className=" object-cover"
            />
            <h3 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] text-white font-bold tracking-wider text-4xl">
              Kids
            </h3>
          </div>
        </Link>
      </div>
      <div className="my-16"></div>
      <div className="bg-[#1A2A2E] text-white py-14 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          Why &quot;Coseli Footwear&quot;?
        </h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8 font-sans tracking-wide fon">
          At Coseli Footwear, we craft boots that are as unique as you are. We
          design, tailor, and create custom boots with quality and versatility
          in mind. Your style and comfort aren&apos;t one-size-fits-all, and
          neither are our boots.
        </p>
        <div className="flex justify-center space-x-4">
          {/* <button className="px-6 py-2 bg-white text-[#1A2A2E] rounded-lg font-semibold hover:bg-gray-100">
          SHOP MEN
        </button>
        <button className="px-6 py-2 bg-white text-[#1A2A2E] rounded-lg font-semibold hover:bg-gray-100">
          SHOP WOMEN
        </button> */}
        </div>
      </div>
    </>
  )
}

export default WhySection
