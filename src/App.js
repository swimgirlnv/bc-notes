  import "./App.css";
  import { useState, useEffect } from "react";
  import moviedata from "./assets/movie-data.json";
  import MovieCard from "./buildingblocks/MovieCard.js";
  import Break from "./buildingblocks/Break";
  import { Heading } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'


  function App() {

    const [sortBy, setSortBy] = useState("")
    const [filterBy, setFilterBy] = useState([])

    let displayedItems = moviedata.filter((item) => 
      {for(let i=0; i <= filterBy.length; i++)
        {if (item.type === filterBy[i]) 
          return false;
        }
        return true;
      })
      
      displayedItems = [...displayedItems].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else {
          return 0;
        }
      })

    return (
      <div className="App">
        <div className="page-content">
        <div className="item1" id="top">
          <Heading size='3xl' className="header">Movies to Watch</Heading>
        </div>

        <div className="items">
            {displayedItems.map((item, index) => (  
            <div className="checkbox" key={item.name}>
              <Checkbox>
                <MovieCard {...item} />
              </Checkbox>
            </div>
          ))}
          </div>

        </div>
      </div>
    );
  }

  export default App;
