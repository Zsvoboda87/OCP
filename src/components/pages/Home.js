import { useEffect, useState } from 'react';
import SlideDeck from '../Carousel';
import InfoBlocks from '../InfoBlocks';
import Register from '../Register';
import Footer from '../Footer';


// I used hardcoded data and put them in state as if I made a get request and that data was returned.  
// I had trouble using fetch with API.  The CORS may not be setup to work with a simple fetch 

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(
        {
            carousel_slides: [
                {
                    "title": "Announcing Delta City",
                    "content": "We're transforming Detroit into an efficient, clean, harmonious city.",
                    "image": "https://challenge-api.codered.cloud/static/images/slide1.jpg"
                },
                {
                    "title": "Slide 2: Electric Boogaloo",
                    "content": "It's electric!",
                    "image": "https://challenge-api.codered.cloud/static/images/slide2.jpg"
                },
                {
                    "title": "Slide 3: Revenge of the Slide",
                    "content": "Search your source, you know it to be True.",
                    "image": "https://challenge-api.codered.cloud/static/images/slide3.jpg"
                }
            ],
            info_blocks: [
                {
                    "title": "Lowe Technologies",
                    "content": "Lorem ipsum leverage agileframeworks to provide a robustsynopsis for high level overviews.Iterative approaches to corporatestrategy foster collaborativethinking to further the overallvalue proposition. Organicallygrow the holistic world view ofdisruptive innovation viaworkplace diversity."
                },
                {
                    "title": "Mediabreak",
                    "content": "Lorem ipsum podcastingoperational change managementinside of workflows to establish aframework. Taking seamless keyperformance indicators offline tomaximise the long tail. Keepingyour eye on the ball whileperforming a deep dive on thestart-up mentality to deriveconvergence."
                },
                {
                    "title": "Security Concepts",
                    "content": "Lorem ipsum capitalize on lowhanging fruit to identify a ballparkvalue added activity to beta test.Override the digital divide withadditional clickthroughs fromDevOps. Nanotechnologyimmersion along the informationhighway will close the loop onfocusing solely on the bottomline."
                },
                {
                    "title": "Urban Rehabilitators",
                    "content": "Lorem ipsum capitalize on lowhanging fruit to identify a ballparkvalue added activity to beta test.Override the digital divide withadditional clickthroughs fromDevOps. Nanotechnologyimmersion along the informationhighway will close the loop onfocusing solely on the bottomline."
                }
            ]
        }
    );

    // this would be how I do a fetch request to the API to get the Data

    // useEffect(() => {
    //     fetch("https://challenge-api.codered.cloud/api/v1/")
    //         .then(res => res.json())
    //         .then(result => {
    //             setIsLoaded(true);
    //             setItems(result);
    //         },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    return (
        <>
            <SlideDeck slides={items} />
            <InfoBlocks infoBlocks={items} />
            <Register></Register>
            <Footer />
        </>
    );
}
// }

export default Home;