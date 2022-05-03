import "./App.css";
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import {DataProvider} from "./components/DataProvider"

function App() {
  return (
    <DataProvider>
      <div className="container pt-3">
      <h1 className="text-center">TodoList</h1>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <FormInput/>
         <List/>
         <Footer/>
         </div>
      </div>
    </div>
    </DataProvider>
  );
}

export default App;
