import "./App.css";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";

function App() {
  return (
    <div>
      <div className='bg-green-300'>
        <TextInput />
        <ImageInput />
      </div>
    </div>
  );
}

export default App;
