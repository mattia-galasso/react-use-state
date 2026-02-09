import Languages from "./components/Languages";

export default function App() {
  return (
    <>
      <div className="bg-header">
        <div className="px-4 pt-3 pb-2">
          <h1>Learn Web Development</h1>
        </div>
      </div>
      <div className="my-5 container">
        <Languages />
      </div>
    </>
  );
}
