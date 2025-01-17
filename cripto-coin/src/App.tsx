import CriptoSearchForm from "./components/CriptoSearchForm";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="app_title">
          Cryptocurrency <span> Price Tracker</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
