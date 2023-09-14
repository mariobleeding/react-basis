import CompleteName from "./Components/CompleteName";
import FromComponent from "./Components/FromComponent";
import LifeCycle from "./Components/LifeCycle";

const App = () => {
  return (
    <>
      <FromComponent />
      <LifeCycle name="Mario" />
      <CompleteName />
    </>
  );
};

export default App;
