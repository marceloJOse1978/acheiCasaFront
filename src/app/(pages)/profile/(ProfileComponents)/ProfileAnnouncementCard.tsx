import React from 'react';
import { Eye, Pencil, Star } from 'lucide-react';

const ProfileAnnouncementCard = ({ 
  isFavorite = false,
  imageSrc = "https://i.ibb.co/Y4XmbyQs/12210e817bc81b3c098f358fe631496c.jpg",
  location = "Sequele, Cacuaco",
  price = "1.500.000,00",
  dimensions = "15×20m",
  views = 3034,
  clicks = 1567,
  isActive = false,
  onEdit = () => {},
  onFavorite = () => {}
}) => {
  return (
    <div className="flex items-center w-full rounded-lg p-4 bg-white">
      {/* Favorite Star */}
      <button 
        onClick={onFavorite}
        className="mr-4 text-gray-300 hover:text-yellow-400"
      >
        <Star fill={isFavorite ? "#FFD700" : "none"} size={20} />
      </button>
      
      {/* Property Image */}
      <div className="relative w-20 h-20 mr-4">
        <img 
          src={imageSrc} 
          alt={location} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      {/* Property Details */}
      <div className="flex-1 mr-8">
        <h3 className="text-lg text-[#000000] font-bold">{location}</h3>
        <p className="text-sm font-bold text-gray-400">{price}</p>
        <p className="text-xs text-gray-500">{dimensions}</p>
      </div>
      
      {/* Status Indicator */}
      <div className="mr-6">
        <span className={`px-3 py-1 rounded-full text-xs ${
          isActive 
            ? "bg-green-100 text-green-800" 
            : "bg-gray-100 text-gray-600"
        }`}>
          {isActive ? "Activo" : "Inactivo"}
        </span>
      </div>
      
      {/* View Statistics */}
      <div className="flex items-center mr-6">
        <Eye size={18} className="text-gray-400 mr-1" />
        <span className="text-sm text-gray-500">{views}</span>
      </div>
      
      {/* Click Statistics */}
      <div className="flex items-center mr-6">
        <Star size={18} className="text-gray-400 mr-1" />
        <span className="text-sm text-gray-500">{clicks}</span>
      </div>
      
      {/* Edit Button */}
      <button 
        onClick={onEdit}
        className="flex items-center text-sm text-gray-500 hover:text-blue-500"
      >
        <span className="mr-1">Editar</span>
        <Pencil size={16} />
      </button>
    </div>
  );
};

export default ProfileAnnouncementCard;