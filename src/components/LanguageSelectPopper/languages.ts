export interface ILanguage {
  title: string;
  isChecked: boolean;
}

const languagesList: ILanguage[] = [
  {
    title: "English",
    isChecked: false,
  },
  {
    title: "Spanish",
    isChecked: false,
  },
  {
    title: "French",
    isChecked: false,
  },
  {
    title: "Portuguese",
    isChecked: false,
  },
];

export default languagesList;
