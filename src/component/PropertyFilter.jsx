import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

export default function PropertyFilter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    priceRange: "all",
    beds: "any",
    sort: "newest",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      type: "all",
      priceRange: "all",
      beds: "any",
      sort: "newest",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center justify-between w-full"
      >
        <span className="font-semibold text-gray-900">Filters</span>
        <SlidersHorizontal className="w-5 h-5 text-gray-500" />
      </button>

      {/* Filter Content */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
        <div className="space-y-4">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              <option value="all">All Types</option>
              <option value="rooms">Rooms</option>
              <option value="land">Land</option>
              <option value="office">Office</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              <option value="all">Any Price</option>
              <option value="0-1000">Under $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000+">$5,000+</option>
            </select>
          </div>

          {/* Beds */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <select
              value={filters.beds}
              onChange={(e) => handleFilterChange("beds", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              <option value="any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="w-full flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition py-2"
          >
            <X className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
