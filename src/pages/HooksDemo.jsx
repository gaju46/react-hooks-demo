import React from "react";
import UseStateHook from "../components/UseStateHook";
import UseEffectHook from "../components/UseEffectHook";
import UseCallbackHook from "../components/UseCallbackHook";
import UseMemoHook from "../components/UseMemoHook";
import UseRefHook from "../components/UseRefHook";
import UseCustomHook from "../components/UseCustomHook";

const HooksDemo = () => {
  return (
    <div>
      <h2>React Hooks Demonstration</h2>
      <UseStateHook />
      <UseEffectHook />
      <UseCallbackHook />
      <UseMemoHook />
      <UseRefHook />
      <UseCustomHook />
    </div>
  );
};

export default HooksDemo;
