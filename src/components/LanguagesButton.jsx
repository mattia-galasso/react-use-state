export default function LanguageButton({ title, hiddenLanguage }) {
  return (
    <>
      <button onClick={hiddenLanguage}>{title}</button>
    </>
  );
}
