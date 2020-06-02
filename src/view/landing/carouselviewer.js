import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carouselviewer.scss';

export default function CarouselViewer(props) {
    const items = props.carouselItems.map((val, index) => {
        return (
            <div key={val.id}>
                <img src={val.src} alt={val.title} />
                <a href={val.redirectUrl} alt={val.title}>
                    <span className='descriptionLegend'>{val.description}</span>
                </a>
            </div>
        );
    });
    return <Carousel renderThumbs={() => null}>{items}</Carousel>;
}
