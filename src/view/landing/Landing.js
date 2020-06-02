import React, { useEffect, useState } from 'react';
import CarouselViewer from './carouselviewer';
import Introduction from './introduction';

const items = [
    {
        id: 1,
        src: 'h-51.gif',
        title: 'title is 51',
        description: 'click to know more',
        redirectUrl: 'http://google.com',
    },
    { id: 2, src: 'h-52.jpg', title: 'title is 52', description: 'click to know more' },
    {
        id: 3,
        src: 'h-53.jpg',
        title: 'title is 53',
        description: 'click to know more',
        redirectUrl: 'http://google.com',
    },
];

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('assets/homecarousel/', false, /\.(png|jpe?g|svg|gif)$/));

export default function Home() {
    const [carouselItems, setCarouselItems] = useState([]);
    useEffect(() => {
        const itemColl = [];
        for (let i = 0; i < items.length; i++) {
            itemColl.push({ ...items[i], src: cache['./' + items[i].src] });
        }
        setCarouselItems(itemColl);
    }, []);
    return (
        <div className='home'>
            <CarouselViewer carouselItems={carouselItems}></CarouselViewer>
            <Introduction ></Introduction>
        </div>
    );
}
