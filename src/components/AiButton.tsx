import { Loader } from "lucide-react";

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
      className="cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl border-b-4 border-green-700 bg-green-500 py-3 px-4 font-bold uppercase tracking-wider text-white transition-all duration-150 ease-in-out hover:brightness-105 active:translate-y-1 active:border-b-0 disabled:cursor-not-allowed disabled:border-b-0 disabled:bg-gray-300 disabled:text-gray-500"
    >
      {isGenerating ? <Loader className="animate-spin" /> : "✨"}
      <span>{isGenerating ? "Gerando..." : label}</span>
    </button>
  );
}
