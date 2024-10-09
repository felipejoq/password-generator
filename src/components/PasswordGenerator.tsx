import React from "react";
import {usePasswordGenerator} from "../utils/usePasswordGenerator.ts";

import { Toaster, toast } from 'sonner'

export const PasswordGenerator: React.FC = () => {

    const {
        password,
        passwordLength,
        passwordIncludeUppercase,
        passwordIncludeLowercase,
        passwordIncludeNumbers,
        passwordIncludeSymbols,
        setPasswordLength,
        setPasswordIncludeUppercase,
        setPasswordIncludeLowercase,
        setPasswordIncludeNumbers,
        setPasswordIncludeSymbols,
        generatePassword
    } = usePasswordGenerator(16, true, true, true, false);

    const notify = (message: string ) => {
        toast.success(message, {
            position: 'top-right',
        });
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            notify('Password copiado al portapapeles');
        });
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
                <div className="flex justify-between items-center">
                    <input
                        id="generated-password" type="text"
                        value={password}
                        className="w-full border border-gray-300 rounded-lg p-3 text-xl text-gray-800"
                        readOnly
                        placeholder="El password generado aparecerá aquí"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-600"
                    >
                        Copiar
                    </button>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto mt-6">
                <h2 className="text-xl font-semibold mb-4">
                    Personaliza tu contraseña
                </h2>

                <div className="mb-4">
                    <label htmlFor="length" className="block text-gray-700 font-medium mb-2">
                        Longitud de la contraseña
                    </label>
                    <input
                        id="length"
                        type="number"
                        min="6"
                        max="64"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-lg p-3"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                        <input
                            id="uppercase"
                            checked={passwordIncludeUppercase}
                            onChange={(e) => setPasswordIncludeUppercase(e.target.checked)}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="uppercase" className="ml-2 text-gray-700">
                            Incluir letras mayúsculas
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="lowercase"
                            checked={passwordIncludeLowercase}
                            onChange={(e) => setPasswordIncludeLowercase(e.target.checked)}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="lowercase" className="ml-2 text-gray-700">
                            Incluir letras minúsculas
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="numbers"
                            checked={passwordIncludeNumbers}
                            onChange={(e) => setPasswordIncludeNumbers(e.target.checked)}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="numbers" className="ml-2 text-gray-700">
                            Incluir números
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="symbols"
                            checked={passwordIncludeSymbols}
                            onChange={(e) => setPasswordIncludeSymbols(e.target.checked)}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="symbols" className="ml-2 text-gray-700">
                            Incluir símbolos
                        </label>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={generatePassword}
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600"
                    >
                        Generar contraseña
                    </button>
                </div>
            </div>
            <Toaster />
        </>
    )
}