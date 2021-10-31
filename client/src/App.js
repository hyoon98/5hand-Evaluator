import "bootstrap/dist/css/bootstrap.css";

function App() {
  document.body.style.backgroundColor = "lightsteelblue";
  return (
    <div className="App">
      <h1 className="mx-auto my-4 text-center">Poker Hand Evaluator</h1>
      <div className="mx-auto" style={{ height: "40vh", width: "40vw" }}></div>
      <div className="buttons d-flex justify-content-between align-items-center w-25 mx-auto h-100 my-auto">
        <button className="generate btn btn-secondary">Generate Hand</button>
        <button className="generate btn btn-primary">Evaluate Hand</button>
      </div>
    </div>
  );
}

export default App;
