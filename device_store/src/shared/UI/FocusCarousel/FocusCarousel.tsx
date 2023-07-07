import { useEffect, useState } from "react";



export function FocusCarousel(children){

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        function changeCarouselSlide(){
            if(activeSlideIndex < children.length - 1){
                setActiveSlideIndex(activeSlideIndex + 1);
            }else{
                setActiveSlideIndex(0);
            }
        }

        setTimeout(() => changeCarouselSlide(), 3000);
    }, [activeSlideIndex, children.length])
    
    return (
        <section className="carousel">  
            {children.map((child, index) => 
                <div className={`carousel__slide ${activeSlideIndex == index? "carousel__slide--active": ""}`}>
                    <div className="product-slide__header">
                        <hr className="line line--white"/>
                        <p className="product-slide__header__num">{index < 10? `0${index}` : index}</p>
                    </div>
                    { child }
                </div>
            )}

        </section>
    )
}