import { ShoppingBag, InformationCircle } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            सधैं एक पाइला अगाडी।
          </Heading>
        </span>
        <a
          href="#"
          target="_blank"
        >
          <Button variant="secondary">
            Visit Store
            <ShoppingBag />
          </Button>
          <Button variant="secondary">
            More Info
            <InformationCircle />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
