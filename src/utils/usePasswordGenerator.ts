import { useEffect, useState } from "react";

interface UsePasswordGeneratorReturn {
    password: string;
    passwordLength: number;
    passwordIncludeUppercase: boolean;
    passwordIncludeLowercase: boolean;
    passwordIncludeNumbers: boolean;
    passwordIncludeSymbols: boolean;
    setPasswordLength: (length: number) => void;
    setPasswordIncludeUppercase: (include: boolean) => void;
    setPasswordIncludeLowercase: (include: boolean) => void;
    setPasswordIncludeNumbers: (include: boolean) => void;
    setPasswordIncludeSymbols: (include: boolean) => void;
    generatePassword: () => void;
}

export const usePasswordGenerator = (
    length: number,
    includeUppercase: boolean,
    includeLowercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
): UsePasswordGeneratorReturn => {

    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(length);
    const [passwordIncludeUppercase, setPasswordIncludeUppercase] = useState<boolean>(includeUppercase);
    const [passwordIncludeLowercase, setPasswordIncludeLowercase] = useState<boolean>(includeLowercase);
    const [passwordIncludeNumbers, setPasswordIncludeNumbers] = useState<boolean>(includeNumbers);
    const [passwordIncludeSymbols, setPasswordIncludeSymbols] = useState<boolean>(includeSymbols);

    // Función para generar la contraseña
    const generatePassword = () => {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+=";
        const passwordLengthFinal = isNaN(passwordLength) ? 16 : passwordLength;
        let characters = "";

        if (passwordIncludeUppercase) characters += uppercase;
        if (passwordIncludeLowercase) characters += lowercase;
        if (passwordIncludeNumbers) characters += numbers;
        if (passwordIncludeSymbols) characters += symbols;

        let generatedPassword = "";

        for (let i = 0; i < passwordLengthFinal; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    // useEffect que se ejecuta cuando cambian los valores de los estados
    useEffect(() => {
        generatePassword();
    }, [
        passwordLength,
        passwordIncludeUppercase,
        passwordIncludeLowercase,
        passwordIncludeNumbers,
        passwordIncludeSymbols
    ]);

    return {
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
    };
};
