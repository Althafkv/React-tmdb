import Home from "./components/Home";
import "./index.css";
function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] ">
        <div className="text-4xl text-center py-3 text-purple-800">
          <i class="fa-solid fa-compact-disc"></i> Movie Corner{" "}
        </div>
        <Home term={""} />
      </div>
    </div>
  );
}

export default App;
