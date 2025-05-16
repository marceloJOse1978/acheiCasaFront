import React, { useState, useEffect } from 'react';

interface Country {
  keyText: string;
  translations?: {
    por?: {
      common: string;
    };
  };
  name: {
    common: string;
  };
}

interface ProfileListDataProps {
  keyText: string;
  isEditable: boolean;
  value: string;
  onChange: (val: string) => void;
}

const ProfileListCountry = ({ keyText, isEditable, value, onChange }: ProfileListDataProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json() as Country[];
        const countryNames = data.map((country) =>
          country.translations?.por?.common || country.name.common
        );
        countryNames.sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);
      } catch (error) {
        console.error('Erro ao buscar países:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredSuggestions = countries.filter((country) =>
    country.toLowerCase().includes(value.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEditable || !showSuggestions || filteredSuggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
      );
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
      );
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
        onChange(filteredSuggestions[highlightedIndex]);
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
      <p className="font-semibold text-sm leading-none tracking-normal text-gray-500">
        {keyText}
      </p>
      <input
        type="text"
        placeholder="Pesquisar país"
        value={value}
        readOnly={!isEditable}
        onChange={(e) => {
          if (isEditable) {
            onChange(e.target.value);
            setShowSuggestions(e.target.value.length > 0);
            setHighlightedIndex(-1); // reset ao digitar
          }
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowSuggestions(false);
            if (value && !countries.some(country => country.toLowerCase() === value.toLowerCase())) {
              alert('país não reconhecido');
            }
          }, 150);
        }}
        onFocus={() => {
          if (isEditable && value) setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        className={`w-full h-[40px] rounded-[5px] px-4 py-2 text-sm leading-none tracking-normal mt-[3px] 
          ${isEditable ? 'bg-white text-[#000000] border border-[#FF453A] outline-none' : 'bg-[#F5F5F5] text-[#999999] border border-transparent cursor-default'}
        `}
      />

      {isEditable && showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          className="
            absolute top-full left-0 right-0 
            m-0 p-0 list-none 
            bg-white border border-t-0 border-gray-300 
            shadow-md max-h-[200px] overflow-y-auto 
            z-[1000] rounded-b-xl text-black
          "
        >
          {filteredSuggestions.map((country, index) => (
            <li
              key={index}
              onMouseDown={() => {
                onChange(country);
                setShowSuggestions(false);
                setHighlightedIndex(-1);
              }}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                backgroundColor: highlightedIndex === index ? '#f0f0f0' : 'white',
                borderBottom: '1px solid #eee',
              }}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileListCountry;
