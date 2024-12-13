"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low -> High",
  },
  {
    value: "price_desc",
    label: "Price: High -> Low",
  },
]

const collectionOptions = [
  {
    value: "/store",
    label: "All",
  },
  {
    value: "/collections/formals",
    label: "Formal",
  },
  {
    value: "/collections/casuals",
    label: "Casual",
  },
  {
    value: "/collections/boots",
    label: "Boots",
  },
  {
    value: "/collections/kids",
    label: "Kids",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", newSortBy)
  }
  const handleCollectionChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    router.push(newSortBy)
  }
  return (
    <div className="gap-8 flex flex-col items-center ">
      <div className="flex justify-center w-full lg:hidden max-w-[300px] gap-6 sm:gap-16">
        {collectionOptions.map((el) => {
          return (
            <Link href={el.value} className=" " key={el.label}>
              <span>{el.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="hidden lg:block">
        <FilterRadioGroup
          title="Collections"
          items={collectionOptions}
          value={sortBy}
          handleChange={handleCollectionChange}
          data-testid={dataTestId}
        />
      </div>
      {/* <div className=" self-start">
        <FilterRadioGroup
          title="Sort by"
          items={sortOptions}
          value={sortBy}
          handleChange={handleChange}
          data-testid={dataTestId}
        />
      </div> */}
    </div>
  )
}

export default SortProducts
