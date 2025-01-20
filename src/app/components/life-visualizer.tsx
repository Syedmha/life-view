"use client"

import { useState } from "react"
import LifeChart from "./life-chart"

const countries = [
  { name: "United States", code: "US", lifeExpectancy: 78.5 },
  { name: "Japan", code: "JP", lifeExpectancy: 84.2 },
  { name: "Germany", code: "DE", lifeExpectancy: 81.1 },
]

export default function LifeVisualizer() {
  const [age, setAge] = useState("")
  const [country, setCountry] = useState("")
  const [lifeData, setLifeData] = useState<{ lived: number; remaining: number } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedCountry = countries.find((c) => c.code === country)
    if (selectedCountry) {
      const lived = Number.parseInt(age)
      const remaining = Math.max(0, selectedCountry.lifeExpectancy - lived)
      setLifeData({ lived, remaining })
    }
  }

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Visualize Your Life</h2>
        <p className="text-gray-600 mb-6">Enter your age and country to see your life expectancy visualization.</p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
          <div className="flex-1 space-y-2">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code} >
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </form>
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Visualize
        </button>
        {lifeData && <LifeChart data={lifeData} />}
      </div>
    </div>
  )
}

