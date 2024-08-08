import "./App.css";
import UseCallbackHook from "./components/UseCallbackHook";
import UseCustomHook from "./components/UseCustomHook";
import UseEffectHook from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Demonstration.</h1>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseMemoHook />
      {/* <UseCallbackHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCustomHook /> */}
    </div>
  );
}

export default App;
