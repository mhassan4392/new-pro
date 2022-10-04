import StartModal from "./components/layouts/home/StartModal";
import Router from "./routes";

const App = () => {
  return (
    <div className="overflow-hidden">
      <StartModal />
      <Router />
    </div>
  );
};

export default App;
