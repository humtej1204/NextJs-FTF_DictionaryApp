'use client'
import { getWordDefinition } from '@/services/Dictionary.service';
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import WordNotFound from './components/word-not-found/word-not-found.component';
import WordDefinition from './components/word-definition/word-definition.component';
import Loading from '@/shared/components/loading/loading.component';
import styles from './definition.module.scss'
import WordSearchBar from '@/shared/components/word-search-bar/word-search-bar.component';

export default function Definition() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const word = searchParams.get('word');
    const [wordData, setWordData] = useState<IWordData[] | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const getWordDefinitionData = async () => {
        if (!word) return router.push('/');

        setIsLoading(true);
        await getWordDefinition(word)
        .then((data: IWordData[]) => {
            setIsLoading(false);
            setWordData(data);
        });
    }

    useEffect(() => {
        getWordDefinitionData();
    }, [word])

    return (
        <div className={styles.container}>
            {isLoading ?
                (<Loading text='Serching word definition' />)
                : (<div className={styles.container__content}>
                    <div className={styles.container__searchBar}>
                        <WordSearchBar style='header' />
                    </div>
                    {(!wordData)
                        ? <WordNotFound />
                        : <WordDefinition word={word!} wordData={wordData} />
                    }
                </div>)
            }
        </div>
    )
}
