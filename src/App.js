import Header from './components/ui/Header';
import CharacterGrid from './components/Characters/CharacterGrid';
import './App.css';
import React,{useState,useEffect} from 'react';
import  axios from 'axios'

const App = () => {

  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      // set result.data as our items state
      setItems(result.data);
      // change isLoading to false bcz we done with loading
      setIsLoading(false);
    }

    // call fetchItems
    fetchItems();
  
  },[])


  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
