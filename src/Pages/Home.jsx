import React from "react";
import img2 from "../assets/rs=w_1160,h_773 (1).webp";
import img3 from "../assets/rs=w_1160,h_773 (2).webp";
import img4 from "../assets/rs=w_1160,h_773 (3).webp";

const Home = () => {
    return (
        <div className="w-full mt-10 border-4 border-cyan-700 rounded-lg">
            <div className="carousel w-full  h-[500px] carousel-end ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img2} alt="Slide 1" className="w-full h-[500px] object-cover rounded-lg" />
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img3} alt="Slide 2" className="w-full  h-[500px] object-cover rounded-lg" />
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} alt="Slide 3" className="w-full  h-[500px]object-cover rounded-lg" />
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center w-full py-2 gap-2 mt-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
                <a href="#slide3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Home;
