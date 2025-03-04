import React from 'react';
import { X, Search, PlusCircle, Filter, Clock } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

const HelpModal = ({ onClose }: HelpModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Help & Tips</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Search Recipes
                </h3>
                <p className="text-gray-600">
                  Use the search bar to find recipes by name or ingredients. Type any ingredient
                  you have, and we'll show you matching recipes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Filter className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Filter Options
                </h3>
                <p className="text-gray-600">
                  Use the cuisine and meal type filters to narrow down your search. You can
                  combine filters with the search to find exactly what you're looking for.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <PlusCircle className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Add Your Recipes
                </h3>
                <p className="text-gray-600">
                  Click the "Add Recipe" button to share your own recipes. Fill in all the
                  required details, including ingredients and instructions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Recipe Details
                </h3>
                <p className="text-gray-600">
                  Each recipe card shows cooking time, servings, and key ingredients. Click
                  "View Recipe" to see the full instructions and ingredient list.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;