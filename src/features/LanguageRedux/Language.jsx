import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeToAz, changeToEn } from './languageSlice';

function Language() {
    const language = useSelector((state) => state.language.value);

    const dispatch = useDispatch();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        switch (selectedLanguage) {
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
        <div>
            <select onChange={handleLanguageChange} value={language.value}>
                <option value="AZ">AZ</option>
                <option value="EN">EN</option>
            </select>

        </div>
    );
}

export default Language;