import { RotateCcw, AlertCircle } from "lucide-react";

export function ConditionInput({ condition, onUpdate, onNext, errors }) {
  // Reset all condition fields
  const handleReset = () => {
    onUpdate({
      designStandard: "",
      windSpeed: "",
    });
  };

  // Function to helper class input
  const inputClass = (hasError) =>
    `w-full px-4 py-2.5 rounded-lg outline-none transition-all border
  ${
    hasError
      ? "border border-red-500 bg-[#fff5f5] ring-1 ring-red-200 focus:border-red-500 focus:ring-1 focus:ring-red-200"
      : "border-gray-300 bg-white focus:border-[#3399cc] focus:ring-1 focus:ring-[#3399cc]"
  }`;

  // Function to helper text error
  const ErrorText = ({ show, text }) =>
    show ? (
      <div className="absolute left-0 -bottom-5 flex items-center gap-1 text-[11px] text-red-500">
        <AlertCircle size={12} />
        <span>{text}</span>
      </div>
    ) : null;

  return (
    <div>
      {/* FORM CARD WRAPPER */}
      <div className="bg-white border border-gray-200 p-6 rounded-b-xl shadow-sm">
        {/* 2-Column Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
          {/* FIELD : Design Standard Dropdown */}
          <div className="relative">
            <label className="block text-gray-700 mb-2">Design Standard</label>
            <select
              value={condition.designStandard}
              onChange={(e) => onUpdate({ designStandard: e.target.value })}
              className={inputClass(errors.designStandard)}
            >
              <option value="" disabled selected>
                Select Design Standard
              </option>
              <option value="act">Standard Acts. (Law)</option>
              <option value="tower">Tower Standard</option>
              <option value="jil">JIL</option>
              <option value="haiden">Haiden</option>
            </select>
            <ErrorText show={errors.designStandard} text="Required field" />
          </div>

          {/* FIELD : Design Wind Speed Input */}
          <div className="relative">
            <label className="block text-gray-700 mb-2">
              Design Wind Speed
            </label>
            <div className="relative">
              <input
                type="number"
                value={condition.windSpeed}
                onChange={(e) => onUpdate({ windSpeed: e.target.value })}
                className={inputClass(errors.windSpeed)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black-400">
                m/s
              </span>
            </div>
            <ErrorText show={errors.windSpeed} text="Required field" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-200"></div>

        {/* FOOTER: LEFT (Reset Button) & RIGHT (Status Indicator) */}
        <div className="flex justify-between items-center pt-6">
          {/* RESET BUTTON */}
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-8 py-3 h-[48px] bg-[#eef2f6] text-[#0d3b66]
            border-2 border-[#d0d7e2] rounded-xl hover:bg-[#e2e8f0] transition-colors font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>

          {/* COMPLETION STATUS BADGE */}

          {/* Status Icon */}
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-8 py-3 h-[48px] 
            bg-gradient-to-r from-[#0d3b66] to-[#3399cc]
            text-white rounded-xl 
            hover:brightness-110 transition-all shadow-sm font-medium"
          >
            Next Input
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
