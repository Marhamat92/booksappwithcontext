import "./App.css";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";

function App() {
  return (
    <div>
      <div className='bg-green-400'>
        <form>
          <TextInput
            label='Add Book Title'
            placeholder='Book Title'
            value='The Miserables'
            onChange={}
          />
          <ImageInput />
        </form>
      </div>
    </div>
  );
}

export default App;
