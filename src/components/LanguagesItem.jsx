export default function LanguagesItem({ title, description }) {
  return (
    <>
      <div className="language-item">
        <h4 className="title-card">{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
}
