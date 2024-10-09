import React, { useState, useEffect } from "react";
import './range.styles.css';

interface RangeSelectProps {
    handleRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    passwordLength: number;
}

export const RangeSelect: React.FC<RangeSelectProps> = ({ handleRange, passwordLength }) => {
    const [rangeValue, setRangeValue] = useState(passwordLength);

    useEffect(() => {
        const rangeInput = document.getElementById('password-length') as HTMLInputElement;
        if (rangeInput) {
            rangeInput.style.setProperty('--range-value', `"${rangeValue}"`);
        }
    }, [rangeValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(parseInt(e.target.value));
        handleRange(e);
    };

    return (
        <>
            <div className="w-full flex justify-start items-center">
                <span className="bg-blue-600 text-white px-3 rounded-full font-medium w-20 text-center">
                    {rangeValue}
                </span>
            </div>
            <input
                onChange={handleInputChange}
                id="password-length"
                type="range"
                min={6}
                max={32}
                step={1}
                className="w-full range-input"
                value={rangeValue}
                style={{
                    WebkitAppearance: 'none',
                    margin: '18px 0',
                }}
            />
            <label htmlFor="password-length" className="block text-gray-700 text-sm font-bold mb-2">Longitud de la contraseña</label>
            <span className="text-gray-600 text-xs">Entre 6 y 32 caracteres</span>
        </>
    );
}