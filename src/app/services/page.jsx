import Head from "next/head";
import Link from "next/link";
import {
  Home,
  Map,
  Building2,
  Wrench,
  Shield,
  TrendingUp,
  Award,
  Users,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle,
  FileText,
  Handshake,
  Search,
  Key,
} from "lucide-react";
import ServiceCard from "../../component/ServiceCard";
import ProcessStep from "../../component/ProcessStep";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Room Finding Service",
      description:
        "Find the perfect room that matches your lifestyle, budget, and preferences. We handle all the legwork.",
      link: "/rooms",
      linear: "from-blue-500 to-blue-600",
    },
    {
      icon: Map,
      title: "Land Acquisition",
      description:
        "Prime locations for your dream construction or investment. Expert negotiation and due diligence.",
      link: "/land",
      linear: "from-blue-600 to-blue-700",
    },
    {
      icon: Building2,
      title: "Office Rental",
      description:
        "Professional spaces for your business with modern amenities and flexible lease terms.",
      link: "/office",
      linear: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Property Management",
      description:
        "Complete property management services including maintenance, tenant screening, and rent collection.",
      link: "/services",
      linear: "from-blue-600 to-blue-700",
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description:
        "Expert assistance with all legal paperwork, contracts, and compliance requirements.",
      link: "/services",
      linear: "from-blue-500 to-blue-600",
    },
    {
      icon: Handshake,
      title: "Investment Consulting",
      description:
        "Strategic advice for property investors. Market analysis and ROI optimization.",
      link: "/services",
      linear: "from-blue-600 to-blue-700",
    },
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We discuss your requirements, budget, and timeline",
    },
    {
      title: "Property Search",
      description: "We find and vet properties matching your criteria",
    },
    {
      title: "Site Visits",
      description: "Guided tours of shortlisted properties",
    },
    {
      title: "Negotiation",
      description: "Expert negotiation for the best terms",
    },
    {
      title: "Documentation",
      description: "Complete legal paperwork assistance",
    },
    {
      title: "Deal Closure",
      description: "Smooth handover and post-deal support",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Licensed & Insured Brokers" },
    { icon: TrendingUp, text: "Best Market Rates" },
    { icon: Award, text: "10+ Years Experience" },
    { icon: Users, text: "500+ Happy Clients" },
    { icon: Clock, text: "Fast Response Time" },
    { icon: Search, text: "Personalized Search" },
  ];

  return (
    <>
      <Head>
        <title>Broker Services - PrimeBroker</title>
        <meta
          name="description"
          content="Comprehensive real estate broker services including room finding, land acquisition, office rental, property management, and investment consulting."
        />
      </Head>

      {/* Hero Section - 30% Blue */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Comprehensive Broker Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            End-to-end real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid - 60% White */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional broker services for all your property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Simple Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make buying, selling, or renting property hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - 60% Gray */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              The PrimeBroker Advantage
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
              >
                <benefit.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-700">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your property needs and find the perfect solution
            together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badge - 10% Black */}
      <section className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>100% Transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
