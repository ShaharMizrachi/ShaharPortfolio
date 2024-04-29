import React, { CSSProperties } from 'react';
import './Carousel.css';


const Carousel = ({ images }: { images: string[] }) => {

    const itemCount = images.length;
    const angle = 360 / itemCount;
    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((url, index) => (
                    <div
                        key={index}
                        className="carousel-item"
                        style={
                            {
                                // Correctly rotate each item based on its index
                                '--i': index,
                                transform: `rotateY(${angle * index}deg) translateZ(350px)`, // Distribute items evenly
                            } as CSSProperties
                        }                >
                        <img src={url} alt="raect" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
