import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="h-8 w-8 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-800">Digital Recipe Book</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;