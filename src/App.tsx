import { MantineProvider, Slider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { Test } from "./components";

function App() {
  return (
    <MantineProvider>
      <h1>Welcome to Mantine!</h1>
      <Slider
        color="red"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <Test/>
    </MantineProvider>
  );
}

export default App;
