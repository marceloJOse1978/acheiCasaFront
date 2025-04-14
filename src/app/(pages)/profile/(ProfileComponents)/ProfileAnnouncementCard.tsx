import React from 'react';
import { Eye, Pencil, Star } from 'lucide-react';
import { useState } from 'react';

interface ProfileAnnouncementCardProps {
  isFavorite: boolean;
  imageSrc: string;
  location: string;
  price: string;
  dimensions: string;
  views: number;
  clicks: number;
  onEdit?: () => void;
  onFavorite?: () => void;
}

const ProfileAnnouncementCard = ({ 
  isFavorite,
  imageSrc,
  location,
  price,
  dimensions,
  views,
  clicks,
  onEdit = () => {},
  onFavorite = () => {}
}: ProfileAnnouncementCardProps) => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='flex items-center justify-between w-full rounded-2xl p-6 shadow bg-white border border-gray-100 mb-5'>
      <div className='flex items-center gap-4'>
        {/* Favorite Button */}
        <button
            onClick={onFavorite}
            className="text-gray-300 hover:text-yellow-400 transition-transform hover:scale-110"
            title="Favoritar"
          >
          <Star fill={isFavorite ? "#FFD700" : "none"} size={22} />
        </button>

          {/* Property Image */}
           <figure className="relative w-[120px] h-[120px] rounded-xl overflow-hidden shadow-sm">
              <img
                src={imageSrc}
                alt={location}
                className="w-full h-full object-cover"
              />
            </figure>

             {/* Property Details */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{location}</h3>
              <p className="text-sm font-medium text-gray-500">
                {Number(price).toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
              </p>

              <p className="text-xs text-gray-400">{dimensions}</p>
            </div>
      </div>
      <div className='flex items-center gap-6'>
          {/* Unified Status Box */}
          <div className="bg-gray-100 rounded-xl shadow-sm flex items-center justify-between px-4 py-2 w-48">
            <span className="text-sm text-gray-600 font-medium">
              {isActive ? "Activo" : "Inactivo"}
            </span>
            <button
              onClick={toggleActive}
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
            >
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
          {/* Estatísticas */}
          <div className="flex items-center gap-6">
            <div className="flex items-center text-gray-500 text-sm">
              <Eye size={18} className="mr-1" />
              {views}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Star size={18} className="mr-1" />
              {clicks}
            </div>
          </div>
      </div>
      {/* Edit Button */}
      <div>
        <button
          onClick={onEdit}
          className="flex items-center text-[16px] gap-1 px-5 py-3 text-sm text-gray-400 bg-white rounded-[25px] hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer"
        >
          <span>Editar</span>
          <Pencil className='text-[#FF453A]' size={16} />
        </button>
      </div>

    </div>
  );
  
};

export default ProfileAnnouncementCard;