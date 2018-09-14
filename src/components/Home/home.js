import React from 'react';

import NewsSlider from '../Widgets/NewsSilder/slider';
import NewsList from '../Widgets/NewsList/newsList';

const Home = () => {
    return(
        <div>
            <NewsSlider start={0} end={3} settings={{ dots:false}} />
            <NewsList start={0} amount={3} type='card' loadmore={true}/>
        </div>
    )
}

export default Home;
