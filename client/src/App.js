import './App.css';
import { useQuery } from "@tanstack/react-query"
import Form from './componnens/Form';

function App() {
  const {data, isFetching} = useQuery(
    ["todo"],
   async () => await ( await fetch('http://localhost:8000/todo')).json());
  console.log("data>>>",data);
      
  if(isFetching){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <Form/>     
       {
        data && data.data && data.data.map((todo) => <li>{todo.title}</li> )
       }
      
    </div>
  );
}

export default App;
