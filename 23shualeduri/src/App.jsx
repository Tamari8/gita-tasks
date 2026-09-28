import React, { useState, useEffect } from 'react';

// Character sets
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const STRENGTH_CONFIG = {
  0: { label: '', color: '', bars: 0 },
  1: { label: 'TOO WEAK!', color: '#F64A4A', bars: 1 },
  2: { label: 'WEAK', color: '#FB7C58', bars: 2 },
  3: { label: 'MEDIUM', color: '#F8CD65', bars: 3 },
  4: { label: 'STRONG', color: '#A4FFAF', bars: 4 },
};

export default function App() {
  const [password, setPassword] = useState('PTx1f5DaFX');
  const [length, setLength] = useState(10);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  // Calculate strength level (0 to 4)
  const getStrengthLevel = () => {
    if (length === 0) return 0;
    const selectedTypes = [includeUpper, includeLower, includeNumbers, includeSymbols].filter(Boolean).length;
    if (selectedTypes === 0) return 0;

    if (length < 6 || selectedTypes === 1) return 1;
    if (length < 9 && selectedTypes <= 2) return 2;
    if (length < 12 && selectedTypes <= 3) return 3;
    if (length >= 10 && selectedTypes === 4) return 4;
    if (length >= 12 && selectedTypes >= 3) return 4;
    return 3;
  };

  const strengthLevel = getStrengthLevel();
  const currentStrength = STRENGTH_CONFIG[strengthLevel];

  // Generate password function
  const generatePassword = () => {
    if (length === 0) {
      setPassword('');
      return;
    }

    let charPool = '';
    const guaranteedChars = [];

    if (includeUpper) {
      charPool += UPPERCASE;
      guaranteedChars.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]);
    }
    if (includeLower) {
      charPool += LOWERCASE;
      guaranteedChars.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]);
    }
    if (includeNumbers) {
      charPool += NUMBERS;
      guaranteedChars.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
    }
    if (includeSymbols) {
      charPool += SYMBOLS;
      guaranteedChars.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
    }

    if (charPool === '') {
      setPassword('');
      return;
    }

    const generatedArray = [...guaranteedChars];
    for (let i = guaranteedChars.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      generatedArray.push(charPool[randomIndex]);
    }

    // Shuffle array (Fisher-Yates)
    for (let i = generatedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generatedArray[i], generatedArray[j]] = [generatedArray[j], generatedArray[i]];
    }

    // Slice to exact requested length in case guaranteed exceeded length
    setPassword(generatedArray.slice(0, length).join(''));
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Dynamic slider gradient
  const sliderPercentage = (length / 20) * 100;

  const checkboxOptions = [
    { label: 'Include Uppercase Letters', checked: includeUpper, onChange: () => setIncludeUpper(!includeUpper) },
    { label: 'Include Lowercase Letters', checked: includeLower, onChange: () => setIncludeLower(!includeLower) },
    { label: 'Include Numbers', checked: includeNumbers, onChange: () => setIncludeNumbers(!includeNumbers) },
    { label: 'Include Symbols', checked: includeSymbols, onChange: () => setIncludeSymbols(!includeSymbols) },
  ];

  return (
    <main className="min-h-screen bg-[#08070B] flex flex-col justify-center items-center px-4 py-8">
      <div className="w-full max-w-[540px]">
        {/* Header Title */}
        <h1 className="text-center text-[#817D92] text-base md:text-2xl font-bold mb-4 md:mb-8">
          Password Generator
        </h1>

        {/* Password Display Box */}
        <div className="bg-[#24232C] px-4 py-4 md:px-8 md:py-5 flex items-center justify-between mb-4 md:mb-6 shadow-md">
          <div className="overflow-x-auto select-all pr-2">
            {password ? (
              <span className="text-2xl md:text-3xl font-bold text-[#E6E5EA] tracking-wider break-all">
                {password}
              </span>
            ) : (
              <span className="text-2xl md:text-3xl font-bold text-[#817D92]/50 tracking-wider">
                P4$5W0rD!
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {copied && (
              <span className="text-[#A4FFAF] text-xs md:text-sm font-bold uppercase tracking-wider animate-fade-in">
                COPIED
              </span>
            )}
            <button
              type="button"
              onClick={copyToClipboard}
              aria-label="Copy password to clipboard"
              className="text-[#A4FFAF] hover:text-[#E6E5EA] transition-colors p-1 cursor-pointer focus:outline-none"
            >
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 fill-current">
                <path d="M15 0H2C0.9 0 0 0.9 0 2V16H2V2H15V0ZM18 4H6C4.9 4 4 4.9 4 6V22C4 23.1 4.9 24 6 24H18C19.1 24 20 23.1 20 22V6C20 4.9 19.1 4 18 4ZM18 22H6V6H18V22Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Options & Controls Container */}
        <div className="bg-[#24232C] p-4 md:p-8 space-y-6 shadow-md">
          {/* Character Length */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm md:text-base font-bold text-[#E6E5EA]">
                Character Length
              </span>
              <span className="text-2xl md:text-3xl font-bold text-[#A4FFAF]">
                {length}
              </span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="0"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, #A4FFAF ${sliderPercentage}%, #18171F ${sliderPercentage}%)`,
              }}
              className="w-full"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-2">
            {checkboxOptions.map((opt, index) => (
              <label
                key={index}
                className="flex items-center gap-4 md:gap-5 cursor-pointer select-none group"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={opt.checked}
                    onChange={opt.onChange}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[#E6E5EA] bg-transparent group-hover:border-[#A4FFAF] peer-checked:bg-[#A4FFAF] peer-checked:border-[#A4FFAF] flex items-center justify-center transition-colors">
                    {opt.checked && (
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#18171F" strokeWidth="2.5" strokeLinecap="square"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[#E6E5EA] text-sm md:text-base font-bold">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>

          {/* Strength Indicator Box */}
          <div className="bg-[#18171F] px-4 py-4 md:px-8 md:py-5 flex items-center justify-between">
            <span className="text-[#817D92] text-xs md:text-sm font-bold uppercase tracking-wider">
              STRENGTH
            </span>

            <div className="flex items-center gap-4">
              {currentStrength.label && (
                <span className="text-[#E6E5EA] text-base md:text-xl font-bold uppercase">
                  {currentStrength.label}
                </span>
              )}
              {/* 4 Strength Bars */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((barNumber) => {
                  const isFilled = barNumber <= currentStrength.bars;
                  return (
                    <div
                      key={barNumber}
                      style={{
                        backgroundColor: isFilled ? currentStrength.color : 'transparent',
                        borderColor: isFilled ? currentStrength.color : '#E6E5EA',
                      }}
                      className="w-[10px] h-[28px] border-2 transition-colors duration-150"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="button"
            onClick={generatePassword}
            className="w-full py-4 md:py-5 bg-[#A4FFAF] text-[#24232C] font-bold text-base md:text-lg flex items-center justify-center gap-4 border-2 border-transparent hover:bg-[#24232C] hover:text-[#A4FFAF] hover:border-[#A4FFAF] cursor-pointer transition-all duration-200 uppercase tracking-wider group focus:outline-none"
          >
            <span>GENERATE</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 fill-current transition-colors"
            >
              <path d="M5.106 12L4 10.894L8.894 6L4 1.106L5.106 0L11.106 6L5.106 12Z"/>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
