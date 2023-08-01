
import {HomeCarouselData} from "../customer/components/Carousel/HomeCarouselData"
import HomeProductSection from "../customer/components/Home/HomeProductSection"
import HomeCarousel from "../customer/components/Carousel/HomeCarousel"
import {Mens} from "../Data/Men/Mens"
import {Shoes} from "../Data/Shoes/shoes"
import {sareePage1} from "../Data/Saree/page1"
import {dressPage1} from "../Data/Dress/page1"
import {gounsPage1} from "../Data/Gouns/gouns"
import {kurtaPage1} from "../Data/Kurta/kurta"

const Homepage = () => {
    return (
        <div className="">

            <HomeCarousel images={HomeCarouselData}/>
            <div className="space-y-10 py-20">

            <HomeProductSection data={Mens} section={"Men's Kurta"} />
        <HomeProductSection data={Shoes} section={"Men's Shoes"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dresses"} />
        <HomeProductSection data={gounsPage1} section={"Womens Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Womens Kurtas"} />

            </div>
        </div>
    )



}

export default Homepage;