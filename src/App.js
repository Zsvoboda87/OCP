
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SlideDeck from './components/Carousel';
import Header from './components/Header'
import InfoBlocks from './components/InfoBlocks';
import Register from './components/Register'
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/https://challenge-api.codered.cloud/api/v1/", {
      mode: 'cors',
      headers: {
        'origin': 'https://challenge-api.codered.cloud'
      }
    })
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log(items)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header />
        <SlideDeck slides={items} />
        <InfoBlocks infoBlocks={items} />
        <Register />
        <Footer />
      </>
    );
  }
}

export default App;
