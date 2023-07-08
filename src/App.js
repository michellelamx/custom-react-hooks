import "./styles.css";
import UseFetchApp from "./hooks/useFetch/UseFetchApp";
import UseModalApp from "./hooks/useModal/UseModalApp";
import UseToggleApp from "./hooks/useToggle/UseToggleApp";

export default function App() {
  return (
    <div className="App">
      <div className="left">
        <h3>useFetch custom hook:</h3>
        <UseFetchApp />
      </div>
      <div className="right">
        <h3>useToggle custom hook:</h3>
        <UseToggleApp />
        <h3>useModal custom hook:</h3>
        <UseModalApp />
      </div>
    </div>
  );
}
