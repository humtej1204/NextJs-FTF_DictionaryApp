import styles from './word-definition.module.scss';

interface IWordDefinition {
    word: string,
    wordData: IWordData[]
}

export default function WordDefinition({word, wordData}: IWordDefinition) {
    return (
        <div className={styles.container}>
            {wordData.map((elem, index) => (
                <div className={styles.wordDefinitionContainer}
                key={`${word}-definition-${index}`}>
                    <div className={styles.title}>
                        <h1>{elem.word}</h1>
                        <span>{elem.phonetic}</span>
                    </div>
                    <WordPhonetics wordPhonetics={elem.phonetics} />

                    <WordDefinitions word={word} wordMeanings={elem.meanings} />

                    {elem.license ?
                        <b>
                            License <a href={elem.license.url} target="_blank">{elem.license.name}</a>
                        </b>
                    : ''}
                    
                    <ul className={styles.wordResourcesContainer}>
                        <b>Resources:</b>
                        {elem.sourceUrls?.map((elem: string, index) => (
                            <li key={`sourceUrl_${index}`}>
                                <a href={elem} target="_blank">{elem}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function WordPhonetics({wordPhonetics}: {wordPhonetics: IPhonetic[]}) {
    if (!wordPhonetics?.length) return;

    return (
        <div className={styles.wordPhoneticsContainer}>
            {wordPhonetics?.map((phonetic, index) => (
                phonetic.text ?
                    <div className={styles.phoneticElem}
                    key={`${phonetic}_${index}`}>
                        <span>{phonetic.text}</span>
                        {phonetic.audio ?
                            <audio controls src={phonetic.audio} preload="none" />
                        : ''}
                    </div>
                : ''
            ))}
        </div>
    )
}

function WordDefinitions(
    {word, wordMeanings}
    :
    {word: string, wordMeanings: IMeaning[]}
) {
    return (
        <div className={styles.wordMeaningsContainer}>
            {wordMeanings?.map((elem, index) => (
                <div className={styles.wordMeaning}
                key={`${word}-meaning-${index}`}>
                    <h2>{word} ({elem.partOfSpeech})</h2>
                    <div className={styles.meaningsTable}>
                        <div className={styles.meaningsHeader}>
                            <div className={styles.definitionRow}>Definition</div>
                            <div className={styles.exampleRow}>Example</div>
                        </div>
                        {elem.definitions?.map((definition, index) => (
                            <div className={styles.meaningsContent}
                            key={`${word}-definition-${index}`}>
                                <div className={styles.definitionRow}>{definition.definition}</div>
                                <div className={styles.exampleRow}>{definition.example}</div>
                            </div>
                        ))}
                    </div>

                    {elem.synonyms?.length ?
                        <div className={styles.wordRelation}>
                            <h3>Synonyms</h3>
                            {elem.synonyms.map((synonym, index) => (
                                <span key={`${word}-synonym-${index}`}>{synonym}</span>
                            ))}
                        </div>
                    : ''}

                    {elem.antonyms?.length ?
                        <div className={styles.wordRelation}>
                            <h3>Antonyms</h3>
                            {elem.antonyms.map((antonym, index) => (
                                <span key={`${word}-antonym-${index}`}>{antonym}</span>
                            ))}
                        </div>
                    : ''}
                </div>
            ))}
        </div>
    )
}
