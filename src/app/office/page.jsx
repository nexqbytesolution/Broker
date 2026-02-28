import Head from "next/head";
import { Building2, ArrowRight } from "lucide-react";
import PropertyCard from "../../component/PropertyCard";
import Link from "next/link";

export default function Office() {
  const offices = [
    {
      id: 1,
      title: "Modern Office Space",
      location: "Downtown Business District",
      size: "1,500 sq ft",
      price: "$4,500/month",
      image: "/images/office1.jpg",
      beds: 0,
      baths: 2,
      type: "Rent",
    },
    {
      id: 2,
      title: "Executive Suite",
      location: "Tech Park",
      size: "800 sq ft",
      price: "$2,800/month",
      image: "/images/office2.jpg",
      beds: 0,
      baths: 1,
      type: "Rent",
    },
    {
      id: 3,
      title: "Creative Studio Space",
      location: "Arts District",
      size: "1,200 sq ft",
      price: "$3,200/month",
      image: "/images/office3.jpg",
      beds: 0,
      baths: 2,
      type: "Rent",
    },
  ];

  return (
    <>
      <Head>
        <title>Office Space for Rent - PrimeBroker</title>
        <meta
          name="description"
          content="Professional office spaces for rent. Modern facilities in prime business locations."
        />
      </Head>

      {/* Hero Section - 30% Blue gradient */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Commercial Properties
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Office Space for Rent
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional spaces designed for your growing business
          </p>
        </div>
      </section>

      {/* Stats Bar - 60% White */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">
                {offices.length} Properties Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-600">Flexible Lease Terms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-gray-600">Prime Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid - 60% White */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <PropertyCard key={office.id} property={office} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Finding the Perfect Office?
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Let our commercial property experts guide you to the right space
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
