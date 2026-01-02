
import React from 'react';

interface GoalCellProps {
  text: string;
  completed: boolean;
  isHeader?: boolean;
  colorClass: string;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
}

const GoalCell: React.FC<GoalCellProps> = ({ 
  text, 
  completed, 
  isHeader, 
  colorClass, 
  onClick, 
  onContextMenu 
}) => {
  return (
    <div 
      onClick={onClick}
      onContextMenu={onContextMenu}
      className={`
        relative h-full w-full p-2 flex items-center justify-center text-center
        text-[10px] md:text-[11px] lg:text-xs leading-tight cursor-pointer
        transition-all duration-200 border border-black/10 hover:shadow-inner
        ${isHeader ? `font-bold border-2 ${colorClass} z-10 shadow-sm` : colorClass}
        ${completed && !isHeader ? 'opacity-40 line-through scale-95' : 'opacity-100'}
        ${!isHeader && 'hover:bg-white/50'}
      `}
    >
      {text}
      {completed && !isHeader && (
        <div className="absolute top-1 right-1">
          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default GoalCell;
