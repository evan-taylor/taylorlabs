"use client"

import { Coffee } from "lucide-react"

const BuyMeCoffeeButton = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/evan.taylor"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-[#BD5FFF] hover:bg-[#a346e0] transition-colors"
    >
      <Coffee className="mr-2 h-5 w-5" />
      Buy me a coffee
    </a>
  )
}

export default BuyMeCoffeeButton
