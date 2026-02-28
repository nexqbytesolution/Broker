import Head from "next/head";
import Link from "next/link";
import {
  Home,
  MapPin,
  Maximize2,
  DollarSign,
  Search,
  ArrowRight,
} from "lucide-react";
import PropertyCard from "../../component/PropertyCard";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Cozy Studio Apartment",
      location: "Downtown Arts District",
      size: "450 sq ft",
      price: "$1,200/month",
      image: "/room/room1.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
    },
    {
      id: 2,
      title: "2-Bedroom Family Room",
      location: "Suburb Heights",
      size: "850 sq ft",
      price: "$1,800/month",
      image: "/room/room2.jpg",
      beds: 2,
      baths: 1,
      type: "Rent",
    },
    {
      id: 3,
      title: "Modern Studio Loft",
      location: "City Center",
      size: "550 sq ft",
      price: "$1,500/month",
      image: "/room/room3.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
    },
    {
      id: 4,
      title: "Shared 3-Bedroom",
      location: "University Area",
      size: "1,200 sq ft",
      price: "$700/month",
      image: "/room/room4.jpg",
      beds: 3,
      baths: 2,
      type: "Rent",
    },
    {
      id: 5,
      title: "Luxury Studio",
      location: "Waterfront",
      size: "600 sq ft",
      price: "$2,200/month",
      image: "/room/room1.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
    },
    {
      id: 6,
      title: "1-Bedroom Apartment",
      location: "Green Park",
      size: "650 sq ft",
      price: "$1,400/month",
      image: "/room/room3.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
    },
  ];

  return (
    <>
      <Head>
        <title>Rooms for Rent - PrimeBroker</title>
        <meta
          name="description"
          content="Find your perfect room for rent. Browse cozy studios, shared apartments, and luxury rooms."
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Home className="w-4 h-4" />
              100+ Rooms Available
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect <span className="text-blue-200">Room</span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Discover cozy studios, shared apartments, and luxury rooms in
              prime locations
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">50+ Studios</div>
                  <div className="text-sm text-blue-200">Available now</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">30+ Shared</div>
                  <div className="text-sm text-blue-200">Roommates welcome</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">20+ Luxury</div>
                  <div className="text-sm text-blue-200">Premium living</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <PropertyCard key={room.id} property={room} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2">
              Load More Rooms <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Rooms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for comfortable living
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Fully Furnished",
              "Utilities Included",
              "High-Speed WiFi",
              "24/7 Security",
              "Cleaning Service",
              "Flexible Lease",
              "Pet Friendly",
              "Parking Available",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-3 text-center"
              >
                <p className="text-sm font-medium text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Finding the Perfect Room?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our room specialists are here to help you find your ideal space
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Contact a Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
