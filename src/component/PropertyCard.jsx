import Head from "next/head";
import Link from "next/link";
import {
  Home,
  Wifi,
  Coffee,
  Bath,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  CreditCard,
  Key,
  Sparkles,
  PenTool as Tool,
  Search,
  FileText,
} from "lucide-react";
import PropertyCard from "../component/PropertyCard";

export default function Rooms() {
  // Dummy rooms data
  const rooms = [
    {
      id: 1,
      title: "Cozy Studio Apartment",
      location: "Downtown Arts District",
      size: "450 sq ft",
      price: "$1,200/month",
      image: "/images/room1.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
      amenities: ["Furnished", "WiFi", "Utilities Included"],
    },
    {
      id: 2,
      title: "Modern 1-Bedroom",
      location: "City Center",
      size: "650 sq ft",
      price: "$1,500/month",
      image: "/images/room2.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
      amenities: ["Gym Access", "Parking", "Security"],
    },
    {
      id: 3,
      title: "Shared 2-Bedroom",
      location: "University Area",
      size: "900 sq ft",
      price: "$800/month",
      image: "/images/room3.jpg",
      beds: 2,
      baths: 1,
      type: "Rent",
      amenities: ["Furnished", "Utilities", "Laundry"],
    },
    {
      id: 4,
      title: "Luxury Studio",
      location: "Waterfront",
      size: "550 sq ft",
      price: "$1,800/month",
      image: "/images/room4.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
      amenities: ["Pool", "Gym", "Concierge"],
    },
    {
      id: 5,
      title: "Family 3-Bedroom",
      location: "Suburb Heights",
      size: "1,200 sq ft",
      price: "$2,200/month",
      image: "/images/room5.jpg",
      beds: 3,
      baths: 2,
      type: "Rent",
      amenities: ["Backyard", "Garage", "Pet Friendly"],
    },
    {
      id: 6,
      title: "Bachelor Pad",
      location: "Nightlife District",
      size: "600 sq ft",
      price: "$1,400/month",
      image: "/images/room6.jpg",
      beds: 1,
      baths: 1,
      type: "Rent",
      amenities: ["Modern", "Balcony", "Smart Home"],
    },
  ];

  // Room services
  const roomServices = [
    {
      icon: Search,
      title: "Room Finding Service",
      description:
        "We find rooms matching your budget, location, and preferences",
    },
    {
      icon: Users,
      title: "Roommate Matching",
      description:
        "Connect with compatible roommates for shared accommodations",
    },
    {
      icon: Shield,
      title: "Tenant Screening",
      description: "Background checks and verification for shared rooms",
    },
    {
      icon: FileText,
      title: "Lease Agreement",
      description: "Legal documentation and contract assistance",
    },
    {
      icon: Tool,
      title: "Maintenance Support",
      description: "24/7 maintenance coordination for rental issues",
    },
    {
      icon: CreditCard,
      title: "Rent Negotiation",
      description: "Expert negotiation for best rental rates",
    },
  ];

  // Amenities list
  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi" },
    { icon: Coffee, name: "Fully Furnished" },
    { icon: Bath, name: "Private Bathroom" },
    { icon: Key, name: "Secure Access" },
    { icon: Sparkles, name: "Cleaning Service" },
    { icon: Clock, name: "24/7 Support" },
  ];

  return (
    <>
      <Head>
        <title>Rooms for Rent - PrimeBroker</title>
        <meta
          name="description"
          content="Find your perfect room for rent. Browse cozy studios, shared apartments, and luxury rooms in prime locations."
        />
      </Head>

      {/* Hero Section - 30% Blue */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Find Your Perfect Space
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Rooms for Rent
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover cozy studios, shared apartments, and luxury rooms in prime
            locations
          </p>
        </div>
      </section>

      {/* Quick Stats - 60% White */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">
                {rooms.length}+ Rooms Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Shared & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Prime Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Verified Listings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid - 60% Gray */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <PropertyCard key={room.id} property={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Room Services - 60% White */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Room Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Room Finding Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to find and secure your perfect room
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities - 60% Gray */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What to Expect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Common Room Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Many of our rooms come with these premium features
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
              >
                <amenity.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-700">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Guide - 60% White */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Average Room Prices
              </h3>
              <p className="text-gray-600">Based on location and room type</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">
                  Studio Apartment
                </span>
                <span className="text-blue-600 font-bold">
                  $1,200 - $1,800/mo
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">
                  1-Bedroom Private
                </span>
                <span className="text-blue-600 font-bold">
                  $1,500 - $2,200/mo
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">
                  Shared 2-Bedroom (per room)
                </span>
                <span className="text-blue-600 font-bold">
                  $800 - $1,200/mo
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">Luxury Suite</span>
                <span className="text-blue-600 font-bold">
                  $2,000 - $3,000/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Find Your New Room?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our room specialists help you find the perfect space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Search <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Room Specialist
            </Link>
          </div>
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
              <span className="text-sm">rooms@primebroker.com</span>
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
