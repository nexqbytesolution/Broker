export default function StatCard({ stat }) {
  return (
    <div className="text-center">
      <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3">
        <stat.icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </div>
  );
}
