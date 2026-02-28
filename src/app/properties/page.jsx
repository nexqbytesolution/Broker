"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Building2,
  Grid3x3,
  List,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import PropertyCard from "../../component/PropertyCard";
import PropertyFilter from "../../component/PropertyFilter";
import SearchBar from "../../component/SearchBar";
import Pagination from "../../component/Pagination";

export default function Properties() {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const propertiesPerPage = 9;

  // Sample properties data
  const allProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, City Center",
      size: "850 sq ft",
      price: "$450,000",
      type: "Sale",
      image: "/images/apartment1.jpg",
      beds: 2,
      baths: 2,
      category: "rooms",
    },
    {
      id: 2,
      title: "Commercial Land Plot",
      location: "Business District",
      size: "5,000 sq ft",
      price: "$750,000",
      type: "Sale",
      image: "/images/land1.jpg",
      beds: 0,
      baths: 0,
      category: "land",
    },
    {
      id: 3,
      title: "Office Space for Rent",
      location: "Tech Park",
      size: "1,200 sq ft",
      price: "$3,500/month",
      type: "Rent",
      image: "/images/office1.jpg",
      beds: 0,
      baths: 2,
      category: "office",
    },
    {
      id: 4,
      title: "Cozy Studio Room",
      location: "Arts District",
      size: "450 sq ft",
      price: "$1,200/month",
      type: "Rent",
      image: "/images/room1.jpg",
      beds: 1,
      baths: 1,
      category: "rooms",
    },
    {
      id: 5,
      title: "Luxury Penthouse",
      location: "Downtown",
      size: "2,000 sq ft",
      price: "$1.2M",
      type: "Sale",
      image: "/images/apartment2.jpg",
      beds: 3,
      baths: 3,
      category: "rooms",
    },
    {
      id: 6,
      title: "Agricultural Land",
      location: "Green Valley",
      size: "10 acres",
      price: "$500,000",
      type: "Sale",
      image: "/images/land2.jpg",
      beds: 0,
      baths: 0,
      category: "land",
    },
    {
      id: 7,
      title: "Executive Suite",
      location: "Business Hub",
      size: "800 sq ft",
      price: "$2,800/month",
      type: "Rent",
      image: "/images/office2.jpg",
      beds: 0,
      baths: 1,
      category: "office",
    },
    {
      id: 8,
      title: "Family Apartment",
      location: "Suburb Heights",
      size: "1,200 sq ft",
      price: "$320,000",
      type: "Sale",
      image: "/images/apartment3.jpg",
      beds: 3,
      baths: 2,
      category: "rooms",
    },
    {
      id: 9,
      title: "Retail Space",
      location: "Shopping District",
      size: "1,500 sq ft",
      price: "$4,000/month",
      type: "Rent",
      image: "/images/office3.jpg",
      beds: 0,
      baths: 2,
      category: "office",
    },
  ];

  // Filter properties based on filters and search
  const filteredProperties = allProperties.filter((property) => {
    // Search filter
    if (
      searchQuery &&
      !property.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !property.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Type filter
    if (
      filters.type &&
      filters.type !== "all" &&
      property.category !== filters.type
    ) {
      return false;
    }

    // Price filter (simplified)
    if (filters.priceRange && filters.priceRange !== "all") {
      const price = parseInt(property.price.replace(/[^0-9]/g, ""));
      if (filters.priceRange === "0-1000" && price > 1000) return false;
      if (filters.priceRange === "1000-3000" && (price < 1000 || price > 3000))
        return false;
      if (filters.priceRange === "3000-5000" && (price < 3000 || price > 5000))
        return false;
      if (filters.priceRange === "5000+" && price < 5000) return false;
    }

    // Beds filter
    if (filters.beds && filters.beds !== "any") {
      if (property.beds < parseInt(filters.beds)) return false;
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (filters.sort === "price-low") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      return priceA - priceB;
    }
    if (filters.sort === "price-high") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      return priceB - priceA;
    }
    return 0; // newest (default)
  });

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  );
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  return (
    <>
      <Head>
        <title>Properties - PrimeBroker Real Estate</title>
        <meta
          name="description"
          content="Browse our extensive collection of properties including rooms, land, and office spaces for sale and rent."
        />
      </Head>

      {/* Hero Section - 30% Blue */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Browse Listings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Property
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover rooms, land, and offices tailored to your needs
          </p>
        </div>
      </section>

      {/* Search and Filter Section - 60% White */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <SearchBar onSearch={setSearchQuery} />
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg border transition ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg border transition ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <PropertyFilter onFilterChange={setFilters} />
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold">
                    {currentProperties.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold">
                    {sortedProperties.length}
                  </span>{" "}
                  properties
                </p>
                <p className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages}
                </p>
              </div>

              {/* Properties Display */}
              {currentProperties.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No Properties Found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search query
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert brokers help you find the perfect property
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Contact a Broker <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact Info Bar - 10% Black */}
      <section className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">info@primebroker.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">123 Business Ave, NY 10001</span>
            </div>
            <div className="flex gap-4">
              {["FB", "TW", "IG", "LI"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition text-sm font-medium"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
