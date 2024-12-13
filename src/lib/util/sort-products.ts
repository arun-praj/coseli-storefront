import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { ProductPreviewType } from "types/global"

const stripCurrency = (price: string) => {
  return parseFloat(price.replace(/[^0-9.]/g, ""))
}

const sortProducts = (products: ProductPreviewType[], sortBy: SortOptions) => {
  if (sortBy === "price_asc") {
    return products.sort((a, b) => {
      if (!a.price?.calculated_price || !b.price?.calculated_price) return 0

      return (
        stripCurrency(a.price?.calculated_price) -
        stripCurrency(b.price?.calculated_price)
      )
    })
  }

  if (sortBy === "price_desc") {
    return products.sort((a, b) => {
      if (!a.price?.calculated_price || !b.price?.calculated_price) return 0

      return (
        stripCurrency(b.price?.calculated_price) -
        stripCurrency(a.price?.calculated_price)
      )
    })
  }

  if (sortBy === "created_at") {
    return products.sort((a, b) => {
      if (!a.created_at || !b.created_at) return 0

      return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
    })
  }
  if (sortBy === "collection_formal") {
    return products.filter(
      (el) => el.collection_id === "pcol_01JCNSX4VE0S2RBEGCM2R1PN2G"
    )
  }
  if (sortBy === "collection_casual") {
    return products.filter(
      (el) => el.collection_id === "pcol_01JCNSXCD8FZPB09EVGE7S04B0"
    )
  }
  if (sortBy === "collection_boot") {
    return products.filter(
      (el) => el.collection_id === "pcol_01JCNSY9DMPJVHEDME0VG5GQ3F"
    )
  }
  if (sortBy === "collection_kid") {
    return products.filter(
      (el) => el.collection_id === "pcol_01JCNSXYYE3PV869XWNF0MDT84"
    )
  }
  return products
}

export default sortProducts
