import React from 'react';
import favoriteObject from '../../../../../objects/favorite';

const FavoriteCard = () => {
  return (
    <>
      {favoriteObject.map((item) => (
        <div
          key={item.id}
          className="favorito-card text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4 my-6 p-4 border border-gray-100 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <figure className="w-[118px] h-[118px] flex-shrink-0 overflow-hidden rounded-[25px]">
              <img src={item.imagem} alt="Imagem do imóvel" className="w-full h-full object-cover" />
            </figure>
            <div>
              <h3 className="font-bold text-[24px] leading-[100%] tracking-[0] text-[#000] mb-1">{item.localizacao}</h3>
              <p className="font-bold text-base leading-[100%] tracking-[0] text-gray-400 mb-1 mt-2">
                {new Intl.NumberFormat('pt-AO', {
                    style: 'currency',
                    currency: 'AOA',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(item.preco)}
                </p>

              <p className="text-sm">
                <span className='font-bold text-[13px] leading-[100%] tracking-[0] mr-2'>Área útil:</span>
                <span>{item.area_util}</span>
                </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-around text-sm w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img src="/profile-icons/users.png" alt="Adultos" className="w-5 h-5" />
              <span>{item.adultos} Adultos</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/profile-icons/bed.png" alt="Quartos e Camas" className="w-5 h-5" />
              <div className="flex flex-col">
                <span>{item.quartos} Quartos</span>
                <span>{item.camas} Camas</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src="/profile-icons/shower.png" alt="Banheiros" className="w-5 h-5" />
              <span>{item.banheiros} Banheiro(s)</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/profile-icons/restaurant.png" alt="Refeições" className="w-5 h-5" />
              <span>{item.refeicoes_por_dia} Refeições/dia</span>
            </div>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Editar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FavoriteCard;
