import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
      <div className="relative mb-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform">
          {member.name.charAt(0)}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
        {member.name}
      </h3>
      <p className="text-blue-600 text-sm text-center mb-3">{member.role}</p>
      <p className="text-gray-600 text-xs text-center mb-4">{member.bio}</p>
      <div className="flex justify-center gap-3">
        <Link href="#" className="text-gray-400 hover:text-blue-600 transition">
          <Mail className="w-4 h-4" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-blue-600 transition">
          <Linkedin className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
