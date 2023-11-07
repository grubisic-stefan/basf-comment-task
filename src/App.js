import CommentList from "./components/CommentList/CommentList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#125CB1",
        height: "100vh",
      }}
    >
      <CommentList />
    </div>
  );
}

export default App;
