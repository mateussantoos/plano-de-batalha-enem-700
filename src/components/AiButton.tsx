// src/components/AiButton.tsx
import Loader from "./Loader";

interface AiButtonProps {
  onClick: () => void;
  label: string;
  isGenerating: boolean;
}

export default function AiButton({
  onClick,
  label,
  isGenerating,
}: AiButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isGenerating}
      className="w-full py-2 px-4 rounded-md text-sm font-semibold flex items-center justify-center gap-2 bg-[#8338ec] text-white transition-colors hover:bg-[#6a2ab3] disabled:bg-[#a481d1] disabled:cursor-not-allowed"
    >
      {isGenerating ? <Loader /> : "✨"}
      <span>{isGenerating ? "Gerando..." : label}</span>
    </button>
  );
}
