import { Metadata } from "next"

import { SortOptions } from "@modules/about/components/refinement-list/sort-products"
import AboutTemplate from "@modules/about/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function AboutPage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <AboutTemplate/>
  )
}
