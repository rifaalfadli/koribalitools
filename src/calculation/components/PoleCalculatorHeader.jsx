import { Layout, RotateCcw } from "lucide-react";

export function HeaderCalculationPage({ onResetAll }) {
  return (
    <div className="bg-[#0d3b66] py-[25px] px-[40px] shadow-lg sticky top-[70px]  z-40  flex justify-between">
      <div className="max-w-7xl">
        <div className="flex items-center gap-4">
          {/* ICON KIRI */}
          <div className="bg-[#3399cc] p-[8px] rounded-lg">
            <Layout className="w-[32px] h-[32px]  text-white" />
          </div>
          {/* TEKS HEADER */}
          <div>
            <h1 className="text-white mb-0.5 text-l font-semibold">
              Calculation System
            </h1>
            <p className="text-[#3399cc] text-sm">
              Professional structural analysis tool
            </p>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-4">
        {/* Reset All */}
        <button
          onClick={onResetAll}
          className="flex items-center gap-2 bg-gray-200 text-[#0d3b66] px-7 py-2 rounded-lg font-medium shadow-sm
            hover:bg-gray-300 hover:shadow-md
            active:scale-95
            transition-all duration-200 ease-out"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset All</span>
        </button>
      </div>
    </div>
  );
}
