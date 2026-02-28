import Head from "next/head";
import Link from "next/link";
import {
  Building2,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
} from "lucide-react";
import TeamCard from "../../component/TeamCard";
import StatCard from "../../component/StatCard";
import ValueCard from "../../component/ValueCard";

export default function About() {
  const stats = [
    { icon: Building2, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We believe in transparent dealings and honest advice. Your trust is our greatest asset.",
    },
    {
      icon: Target,
      title: "Client-First Approach",
      description:
        "Your goals are our priority. We tailor our services to meet your specific needs.",
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We're dedicated to providing the highest quality service in every transaction.",
    },
    {
      icon: Clock,
      title: "Commitment",
      description:
        "We stay with you through every step of your property journey.",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      role: "Founder & CEO",
      bio: "15+ years in real estate. Expert in commercial properties.",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Broker",
      bio: "Specializes in residential properties and client relations.",
    },
    {
      name: "Michael Chen",
      role: "Investment Advisor",
      bio: "Helps clients maximize ROI on property investments.",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      bio: "Ensures smooth transactions and happy clients.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Company Founded" },
    { year: "2016", event: "100th Property Sold" },
    { year: "2018", event: "Expanded to Commercial" },
    { year: "2020", event: "500+ Happy Clients" },
    { year: "2022", event: "Best Broker Award" },
    { year: "2024", event: "Serving 1000+ Clients" },
  ];

  return (
    <>
      <Head>
        <title>About Us - PrimeBroker Real Estate</title>
        <meta
          name="description"
          content="Learn about PrimeBroker's journey, our values, and the team dedicated to helping you find your perfect property."
        />
      </Head>

      {/* Hero Section - 30% Blue */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About PrimeBroker
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in real estate since 2014
          </p>
        </div>
      </section>

      {/* Mission Section - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To provide exceptional real estate brokerage services with
              integrity, transparency, and a client-first approach. We&apos;re
              committed to helping you find not just a property, but the perfect
              place to call home or grow your business.
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - 60% Gray */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                From Humble Beginnings to Trusted Brokers
              </h2>
              <p className="text-gray-600 mb-4">
                PrimeBroker started in 2014 with a simple vision: to make
                property transactions transparent, hassle-free, and
                client-focused. What began as a small team of passionate real
                estate professionals has grown into one of the most trusted
                brokerages in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we&apos;re proud to have helped over 500 families and
                businesses find their perfect properties, with a team of
                experienced brokers dedicated to your success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {item.year}
                  </div>
                  <div className="text-sm text-gray-600">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - 60% Gray */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - 60% White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Your Trusted Advisors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 30% Blue */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to start your property journey with a team that cares?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Explore Services
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
