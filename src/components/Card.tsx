// src/components/Card.tsx

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`${className} rounded-xl  border-2 border-b-6 border-gray-200 transition-transform hover:bg-neutral-50 flex flex-col `}
    >
      {children}
    </div>
  );
}
