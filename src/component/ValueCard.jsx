export default function ValueCard({ value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <value.icon className="w-8 h-8 text-blue-600 mb-3" />
      <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-sm text-gray-600">{value.description}</p>
    </div>
  );
}
