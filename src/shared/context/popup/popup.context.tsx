'use client'
import { createContext, useState } from 'react';
import styles from './popup-context.module.scss';

const PopupContext = createContext<any>(null);
const vAlign = {
    top: styles.topAlign,
    center: styles.vMidAlign,
    bottom: styles.bottomAlign,
}
const hAlign = {
    left: styles.leftAlign,
    center: styles.hMidAlign,
    right: styles.rightAlign,
}

function PopupProvider({children} : any) {
    const [popupContent, setPopupContent] = useState<any[]>([]);
    const [hasBackdrop, setHasBackdrop] = useState<boolean>(true);
    const [vPosition, setVPosition] = useState<'top'|'center'|'bottom'>('center');
    const [hPosition, setHPosition] = useState<'left'|'center'|'right'>('center');
    
    const openPopup = (
        content: any,
        vPos?: 'top'|'center'|'bottom',
        hPos?: 'left'|'center'|'right'
    ) => {
        setPopupContent(prevPopups => {
            const currentPopUps = [...prevPopups];
            currentPopUps.push(content);

            return currentPopUps;
        });
        setVPosition(vPos ?? 'center');
        setHPosition(hPos ?? 'center');
        document.body.style.overflowY = 'hidden';
    }

    const closePopup = () => {
        setPopupContent(prevPopups => {
            const currentPopUps = [...prevPopups];
            currentPopUps.pop();

            return currentPopUps;
        });
        document.body.style.overflowY = 'auto'
    }

    const closeBackdrop = (value: false) => {
        setHasBackdrop(value);
    }

    const handleBackdropClose = () => {
        closePopup();
    }

    const stopPropagation = (event: any) => {
        event.stopPropagation();
    }

    return (
        <PopupContext.Provider value={{openPopup, closePopup, closeBackdrop}}>
            {children}
            {(popupContent?.length > 0)?
            (popupContent.map((content, index) => 
                <div key={`popUp_${index}`} className={styles.popUp_backdrop}
                onClick={handleBackdropClose}
                style={{zIndex: 100000 + index}}>
                    <div className={`${vAlign[vPosition]} ${hAlign[hPosition]}`}
                    onClick={(e) => stopPropagation(e)}>
                        {content}
                    </div>
                </div>
            ))
            :(null)}
        </PopupContext.Provider>
    );
}

export { PopupContext, PopupProvider };