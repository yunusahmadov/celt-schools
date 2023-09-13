import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToAz, changeToEn } from './languageSlice';
import azicon from "../../images/flag-400.png";
import enicon from "../../images/flag-800.png";

function Language() {
    const language = useSelector((state) => state.language.value);
    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState('AZ');

    // Загрузить значение языка из localStorage при первой загрузке
    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
        if (storedLanguage == 'EN') {
            dispatch(changeToEn());
            setSelectedLanguage('EN')
        }else if (storedLanguage == 'AZ') {
                        dispatch(changeToAz());
                        setSelectedLanguage('AZ ')
        }else{
            console.log('he');
        }
    }, [selectedLanguage]);

    const handleLanguageChange = (newLanguage) => {
        setSelectedLanguage(newLanguage);

        localStorage.setItem('selectedLanguage', newLanguage);

        switch (newLanguage) {
            case 'AZ':
                dispatch(changeToAz());
                break;
            case 'EN':
                dispatch(changeToEn());
                break;
            default:
                break;
        }
    };

    return (
        <div className='lang-select'>
             <img src={selectedLanguage === 'EN' ? enicon : azicon} alt={selectedLanguage} />
            <div className="lang-select-items">
                <img src='https://cdn.countryflags.com/thumbs/azerbaijan/flag-400.png' alt="azicon" onClick={() => handleLanguageChange('AZ')} />
                <img src='https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png' alt="enicon" onClick={() => handleLanguageChange('EN')} />
            </div>
        </div>
    );
}

export default Language;
