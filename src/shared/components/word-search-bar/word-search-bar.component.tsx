'use client'
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import styles from './word-search-bar.module.scss';

const WordSearchBarStyles = {
    main: {key: '', style: styles.form__main},
    header: {key: '', style: styles.form__header}
}

export default function WordSearchBar({style = 'main'}: {style?: 'main'|'header'}) {
    const router = useRouter();
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      if (!event) return;
      event.preventDefault()
   
      const formData = new FormData(event.currentTarget);
      const word = formData.get("name");
      if (!word) return;
      router.push(`/definition?word=${word}`);
    }

    return (
      <form onSubmit={onSubmit}
      className={`${styles.form} ${WordSearchBarStyles[style].style}`}>
        <input type="text" name="name" placeholder="Search..." />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    );
}