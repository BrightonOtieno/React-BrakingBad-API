import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/Characters/CharacterGrid';
import './App.css';
import React,{useState,useEffect} from 'react';
import  axios from 'axios'

const App = () => {

  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      // set result.data as our items state
      setItems(result.data);
      // change isLoading to false bcz we done with loading
      setIsLoading(false);
    }

    // call fetchItems
    fetchItems();
  
  },[query])


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
