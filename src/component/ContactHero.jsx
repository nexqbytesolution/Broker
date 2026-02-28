import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern - 10% Black accent */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Badge - 30% Blue accent */}
        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
          Let&apos;s Connect
        </span>

        {/* Main Content - 60% White text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Get in <span className="text-blue-200">Touch</span>
        </h1>

        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100">
          Have questions? Our team is ready to help you find your perfect
          property
        </p>

        {/* CTA Buttons - 30% Blue with white */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="tel:+15551234567"
            className="group bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span>Call Us Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-3 text-blue-100">
            <Mail className="w-5 h-5" />
            <span className="text-sm">info@primebroker.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
