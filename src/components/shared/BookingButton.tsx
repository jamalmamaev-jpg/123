import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingButtonProps {
  provider: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BookingButton = ({ provider, className, size = 'md' }: BookingButtonProps) => {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button className={cn(
      "bg-secondary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20",
      sizes[size],
      className
    )}>
      Book via {provider}
      <ExternalLink size={16} />
    </button>
  );
};

export default BookingButton;