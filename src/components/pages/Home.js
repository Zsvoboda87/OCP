import { useEffect, useState } from 'react';
import SlideDeck from '../Carousel';
import InfoBlocks from '../InfoBlocks';
import Register from '../Register';
import Footer from '../Footer';


function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://challenge-api.codered.cloud/api/v1/")
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <SlideDeck slides={items} />
                <InfoBlocks infoBlocks={items} />
                <Register></Register>
                <Footer />
            </>
        );
    }
}

export default Home;