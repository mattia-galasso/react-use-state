export default function LanguagesItem({ title, description, isVisible }) {
  return (
    <>
      {isVisible && (
        <div className="language-item">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}

<div id="container-btn">
  <button>HTML</button>
  <button>CSS</button>
  <button>JavaScript</button>
  <button>Node.js</button>
  <button>Express</button>
  <button>ReactJS</button>
</div>;
