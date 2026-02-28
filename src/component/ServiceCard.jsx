import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
      <div
        className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}
      >
        <service.icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {service.description}
      </p>
      <Link
        href={service.link}
        className="text-blue-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
