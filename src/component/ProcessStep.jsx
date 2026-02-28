import { CheckCircle } from "lucide-react";

export default function ProcessStep({ step, index }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
          {index + 1}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </div>
  );
}
