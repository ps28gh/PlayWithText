import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    // <div className="blank">hey</div>
    // // you can make changes to this in App.css
    <>
      <Navbar title = "PlayWithText"/>
      <div className="container my-3" >
        <TextForm heading = "Enter the text to analyze below"/>
      </div>
    </>
  )
}

export default App;
