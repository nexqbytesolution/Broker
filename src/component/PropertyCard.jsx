import Link from "next/link";
import { MapPin, Bed, Bath, Maximize2, DollarSign } from "lucide-react";
import Image from "next/image";

export default function PropertyCard({ property }) {
  console.log("property details", property);
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={property.image || "/public/room/room3.jpg"}
          alt="Property Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          {property.type || "For Rent"}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            {property.size}
          </span>
          <span className="text-lg font-bold text-gray-900">
            {property.price}
          </span>
        </div>

        {(property.beds > 0 || property.baths > 0) && (
          <div className="flex gap-4 text-sm text-gray-500 border-t border-gray-100 pt-3">
            {property.beds > 0 && (
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span className="font-medium text-gray-700">
                  {property.beds}
                </span>{" "}
                Beds
              </span>
            )}
            {property.baths > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span className="font-medium text-gray-700">
                  {property.baths}
                </span>{" "}
                Baths
              </span>
            )}
          </div>
        )}

        <Link
          href={`/properties/${property.id}`}
          className="mt-4 inline-block w-full text-center bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
