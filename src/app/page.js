import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Map,
  Building2,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Clock,
  ChevronRight,
  Award,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: HomeIcon,
      title: "Room Finding",
      description:
        "Find the perfect room that matches your lifestyle and budget",
      link: "/rooms",
      accent: "from-blue-500 to-blue-600",
    },
    {
      icon: Map,
      title: "Land for Sale",
      description: "Prime locations for your dream construction or investment",
      link: "/land",
      accent: "from-blue-600 to-blue-700",
    },
    {
      icon: Building2,
      title: "Office for Rent",
      description:
        "Professional spaces for your business with modern amenities",
      link: "/office",
      accent: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Broker Services",
      description:
        "Expert guidance through the entire buying or renting process",
      link: "/services",
      accent: "from-blue-600 to-blue-700",
    },
  ];

  const featuredProperties = [
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
    },
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Properties Listed" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Award, value: "4.9", label: "Client Rating" },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Home Buyer",
      content:
        "PrimeBroker helped me find my dream home within my budget. Their team was professional and supportive throughout the process.",
      rating: 5,
      image: "/images/client1.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "Found the perfect office space for my startup. Great location and excellent negotiation on the lease terms.",
      rating: 5,
      image: "/images/client2.jpg",
    },
    {
      name: "Mike Chen",
      role: "Investor",
      content:
        "Their market knowledge helped me make informed investment decisions. Highly recommended for land purchases.",
      rating: 5,
      image: "/images/client3.jpg",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "10+ years of market experience",
    },
    {
      icon: TrendingUp,
      title: "Best Deals",
      description: "Competitive market prices",
    },
    {
      icon: Award,
      title: "Certified Brokers",
      description: "Licensed professionals",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      {/* Hero Section - 30% Blue */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Welcome to PrimeBroker
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect <span className="text-blue-200">Property</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Rooms, Land, Offices - Expert Broker Services Tailored to You
            </p>

            {/* Search Bar - 60% White */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search location or property..."
                    className="w-full pl-10 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition duration-300 font-medium flex items-center justify-center gap-2">
                  Search <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Stats - 10% Black accents */}
            <div className="flex justify-center gap-8 mt-12">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-blue-200">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 60% Gray/White */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Broker Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional real estate solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`bg-linear-to-br ${service.accent} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="text-blue-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Featured Listings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Properties You&aops;ll Love
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group"
            >
              View All{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {property.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm truncate">
                      {property.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      {property.size}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {property.price}
                    </span>
                  </div>
                  {(property.beds > 0 || property.baths > 0) && (
                    <div className="flex gap-3 text-sm text-gray-500 border-t border-gray-100 pt-3">
                      {property.beds > 0 && (
                        <span className="flex items-center gap-1">
                          <span className="font-medium text-gray-700">
                            {property.beds}
                          </span>{" "}
                          Beds
                        </span>
                      )}
                      {property.baths > 0 && (
                        <span className="flex items-center gap-1">
                          <span className="font-medium text-gray-700">
                            {property.baths}
                          </span>{" "}
                          Baths
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 60% Gray */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied clients who found their perfect
              property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  {testimonial.content}
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert brokers guide you through the entire process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Bar - 10% Black/Dark */}
      <section className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">info@primebroker.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">123 Business Ave, Suite 100</span>
            </div>
            <div className="flex gap-4">
              {["FB", "TW", "IG", "LI"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
