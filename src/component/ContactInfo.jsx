import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business Avenue", "Suite 100, NY 10001"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@primebroker.com", "support@primebroker.com"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Cards Grid - 60% White */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 group"
          >
            <div
              className={`bg-gradient-to-br ${item.gradient} w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white shadow-sm group-hover:scale-110 transition-transform`}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <div className="space-y-0.5">
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-xs">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Location Card - 60% White */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Our Location</h3>
        </div>
        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center border border-gray-200">
          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <p className="text-xs text-gray-500">123 Business Avenue, NY</p>
          </div>
        </div>
        <Link
          href="#"
          className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1 font-medium"
        >
          <Globe className="w-4 h-4" />
          <span>Get Directions</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Bottom Row - 30% Blue & 10% Black */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">
            Follow Us
          </h3>
          <div className="flex gap-2">
            {["FB", "TW", "IG", "LI"].map((social, index) => (
              <Link
                key={index}
                href="#"
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-sm transition-all text-xs font-medium border border-gray-200"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 text-white">
          <h3 className="font-semibold mb-2 text-sm">FAQ</h3>
          <p className="text-gray-300 text-xs mb-2">
            Quick answers to common questions
          </p>
          <Link
            href="/faq"
            className="text-blue-300 hover:text-white text-xs inline-flex items-center gap-1 font-medium"
          >
            View FAQ <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
