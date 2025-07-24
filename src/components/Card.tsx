// src/components/Card.tsx

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md transition-transform hover:-translate-y-1 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
