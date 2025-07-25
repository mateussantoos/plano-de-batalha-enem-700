import React from "react";
import Loader from "../components/Loader";

interface ActionButtonProps {
  onClick: () => void;
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export default function ActionButton({
  onClick,
  text,
  isLoading = false,
  disabled = false,
  className = "bg-blue-500 hover:bg-blue-600",
  icon,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-2 px-4 rounded-md text-sm font-semibold flex items-center justify-center gap-2 text-white transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? <Loader /> : icon}
      <span>{isLoading ? "Gerando..." : text}</span>
    </button>
  );
}
