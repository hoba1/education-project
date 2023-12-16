import { useSelector } from "react-redux";

function Randomizebackground(){
    let backgroundsimgs = ["background-1.jpg","background-2.jpg","background-3.jpg","background-4.jpg","background-5.jpg"];

    const randomizebackground = useSelector((state) => state.Options);

    return(
        <>
            <div className="overlay position-absolute start-0 top-0 w-100 h-100 z-1"></div>
            <div id="carouselExampleSlidesOnly" className="carousel slide position-relative vh-100 overflow-hidden h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    {backgroundsimgs.map((img) => {
                        if(randomizebackground === true){
                            if(backgroundsimgs.indexOf(img) === 0){
                                return(
                                    <div key={0} className="carousel-item active h-100" data-bs-interval="10000">
                                        <img src={`../images/${img}`} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                )
                            } else{
                                return(
                                    <div key={backgroundsimgs.indexOf(img)} className="carousel-item h-100" data-bs-interval="10000">
                                        <img src={`../images/${img}`} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                )
                            }
                        } else{
                            return(
                                <div key={backgroundsimgs.indexOf(img)} className="w-100 h-100">
                                    <img src={`../images/${randomizebackground}`} className="d-block w-100 h-100" alt="..." />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default Randomizebackground