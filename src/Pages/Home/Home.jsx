import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cars from './Cars';
import Banner from './Banner';
import Section2 from './Section2';
import Section3 from './Section3';
import TeamSection from './TeamSection';


const Home = () => {
    const categories = useLoaderData();
    return (


        
        <div>
            <Banner></Banner>
            <Section2></Section2>
            {/* <Section3></Section3> */}
            

        <h1 className='text-4xl font-bold text-center'>Our Collection</h1>
       <div className='grid lg:grid-cols-3'>
       {
                        categories.map(category =><Cars
                            key={category.id}
                            category={category}>
                            
                        </Cars> )
                    }
                    
       </div>
       <TeamSection></TeamSection>
       
        </div>
    );
};

export default Home;