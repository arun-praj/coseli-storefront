import { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

const playfair_Display = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className={`relateive ${playfair_Display.className}`}>
          {props.children}
        </main>
      </body>
    </html>
  )
}
