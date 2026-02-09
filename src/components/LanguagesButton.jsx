export default function LanguageButton({ title, hiddenLanguage, isOpen }) {
  return (
    <>
      <button
        className={isOpen ? "btn btn-warning me-3" : "btn btn-primary me-3"}
        onClick={hiddenLanguage}
      >
        {title}
      </button>
    </>
  );
}
