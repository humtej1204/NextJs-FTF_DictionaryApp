interface IPhonetic {
    text: string;
    audio?: string;
    sourceUrl?: string;
    license?: ILicense;
  }
  
  interface IMeaningDefinition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }
  
  interface IMeaning {
    partOfSpeech: string;
    definitions: IMeaningDefinition[];
    synonyms: string[];
    antonyms: string[];
  }
  
  interface ILicense {
    name: string;
    url: string;
  }
  
  interface IWordData {
    word: string;
    phonetic: string;
    phonetics: IPhonetic[];
    origin?: string;
    meanings: IMeaning[];
    license: ILicense;
    sourceUrls: string[];
  }