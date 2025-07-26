import { LoaderCircle } from "lucide-react";
import { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  icon?: ReactNode;
  isGenerating?: boolean;
}

export default function Button({
  children,
  className,
  isLoading = false,
  variant = "primary",
  icon,
  isGenerating = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "w-full flex items-center justify-center gap-2 font-extrabold uppercase tracking-wider transition-all duration-150 ease-in-out disabled:cursor-not-allowed rounded-2xl py-3 px-4 cursor-pointer";

  const variants = {
    primary:
      "border-b-4 border-duo-green-dark bg-duo-green text-white hover:brightness-95 active:translate-y-1 active:border-b-0 disabled:border-b-0 disabled:bg-gray-300 disabled:text-gray-500",
    secondary:
      "border-2 border-gray-300 bg-white text-sky-500 hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200",
    tertiary:
      "border-b-4 border-duo-blue-dark bg-duo-blue text-white hover:brightness-95 active:translate-y-1 active:border-b-0 disabled:border-b-0 disabled:bg-gray-300 disabled:text-gray-500",
    danger:
      "border-b-4 border-red-700 bg-red-500 text-white hover:brightness-95 active:translate-y-1 active:border-b-0 disabled:border-b-0 disabled:bg-gray-300 disabled:text-gray-500",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${
    className || ""
  }`;

  return (
    <button
      className={combinedClasses}
      disabled={props.disabled || isLoading || isGenerating}
      {...props}
    >
      {isLoading ? (
        <LoaderCircle className="animate-spin h-4 w-4 stroke-3" />
      ) : isGenerating ? (
        <>
          <LoaderCircle className="animate-spin h-4 w-4 stroke-3" />
          <span>Carregando...</span>
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}
