import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { background, randomizebackground } from "../rtk/Slices/Options";
import { Bulletsoption } from "../rtk/Slices/Bulletsopt";
import { Darkorlight } from "../rtk/Slices/DarkorLight";
import { Chooselanguage } from "../rtk/Slices/Langauage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear , faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function Slidebar(){
    const randomizebackgroundoption = useSelector((state) => state.Options);
    const darkopt = useSelector((state) => state.Dark);
    const language = useSelector((state) => state.Chooselanguage);

    let backgroundsimgs = ["background-1.jpg","background-2.jpg","background-3.jpg","background-4.jpg","background-5.jpg"];

    const dispatch = useDispatch();

    const setbackground = () => {
        if(randomizebackgroundoption !== true){
            return(
                <div className="option-box bg-body-secondary p-2 mt-3">
                    <h4 className="text-center fs-6">Set Background</h4>
                    <div className="set-backgrounds text-center p-0 mt-3">
                        <div  className="row row-cols-1 row-cols-md-2 g-4">
                            {backgroundsimgs.map((img) => {
                                return(
                                    <div key={backgroundsimgs.indexOf(img)} className="col">
                                        <div className="card h-100">
                                            <img src={`./images/${img}`} className="card-img-top" onClick={() => {dispatch(background(img))
                                            localStorage.setItem("background",`${img}`)}}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                <button className="btn options-btn z-2 position-fixed end-0 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <FontAwesomeIcon icon={faGear} spin />
                </button>
    
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title" id="offcanvasExampleLabel">الاعدادات</h4>
                        <FontAwesomeIcon icon={faCircleXmark} className="close fs-5" type="button" data-bs-dismiss="offcanvas" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="option-box rounded p-2 pb-1 mb-3">
                            <h4 className="text-center fs-6">الالوان</h4>
                            <ul className="colors-list text-center p-0 mt-3">
                                <li className="active rounded-circle d-inline-block ms-2" data-color="#FF9800"></li>
                                <li className=" rounded-circle d-inline-block ms-2" data-color="#E91E63"></li>
                                <li className=" rounded-circle d-inline-block ms-2" data-color="#009688"></li>
                                <li className=" rounded-circle d-inline-block ms-2" data-color="#03A9F4"></li>
                                <li className=" rounded-circle d-inline-block ms-2" data-color="#4CAF50"></li>
                            </ul>
                        </div>
                        <div className="option-box rounded bg-body-secondary p-2">
                            <h4 className="text-center fs-6">الخلفية المتغيرة</h4>
                            <div className="random-backgrounds text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 yes active" onClick={() => {dispatch(randomizebackground(true))
                                localStorage.removeItem("background")
                                }}>نعم</button>
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 no" onClick={() => {dispatch(randomizebackground(backgroundsimgs[0]))}}>لا</button>
                            </div>
                        </div>
                        {setbackground()}
                        <div className="option-box rounded bg-body-secondary p-2 mt-3">
                            <h4 className="text-center fs-6">ظهور كرات التنقل</h4>
                            <div className="Show-Bullets text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 show active" onClick={() => {dispatch(Bulletsoption(true))
                                localStorage.setItem("show-bullets", "show")
                                }}>نعم</button>
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 none" onClick={() => {dispatch(Bulletsoption(false))
                                localStorage.setItem("show-bullets", "none")
                                }}>لا</button>
                            </div>
                        </div>
                        <div className="option-box rounded bg-body-secondary p-2 mt-3">
                            <h4 className="text-center fs-6">الوضع المظلم</h4>
                            <div className="dark-mode text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 yes" onClick={() => {dispatch(Darkorlight(true))
                                localStorage.setItem("dark-mode",true)
                                }}>نعم</button>
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 no active" onClick={() => {dispatch(Darkorlight(false))
                                localStorage.setItem("dark-mode",false)
                                }}>لا</button>
                            </div>
                        </div>
                        <div className="option-box rounded bg-body-secondary p-2 mt-3">
                            <h4 className="text-center fs-6">اللغة</h4>
                            <div className="Language-box text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 arabic" onClick={() => {dispatch(Chooselanguage("arabic"))
                                localStorage.setItem("language","arabic")
                                window.location.reload();
                                }}>عربي</button>
                                <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 english active" onClick={() => {dispatch(Chooselanguage("english"))
                                localStorage.setItem("language","english")
                                window.location.reload();
                                }}>انجليزي</button>
                            </div>
                        </div>
                        <div className="d-grid mt-3">
                            <button className="btn btn-danger" type="button" onClick={() => {
                                localStorage.removeItem("color_option")
                                localStorage.removeItem("background")   
                                localStorage.removeItem("show-bullets")
                                localStorage.removeItem("dark-mode")
    
                                window.location.reload();
                            }}>اعادة التعيين</button>
                        </div>
                    </div>
                </div>
            </>
            )
        } else {
            return(
                <>
                    <button className="btn options-btn z-2 position-fixed start-0 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <FontAwesomeIcon icon={faGear} spin />
                    </button>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h4 className="offcanvas-title" id="offcanvasExampleLabel">Options</h4>
                            <FontAwesomeIcon icon={faCircleXmark} className="close fs-5" type="button" data-bs-dismiss="offcanvas" />
                        </div>
                        <div className="offcanvas-body">
                            <div className="option-box rounded p-2 pb-1 mb-3">
                                <h4 className="text-center fs-6">Colors</h4>
                                <ul className="colors-list text-center p-0 mt-3">
                                    <li className="active rounded-circle d-inline-block ms-2" data-color="#FF9800"></li>
                                    <li className=" rounded-circle d-inline-block ms-2" data-color="#E91E63"></li>
                                    <li className=" rounded-circle d-inline-block ms-2" data-color="#009688"></li>
                                    <li className=" rounded-circle d-inline-block ms-2" data-color="#03A9F4"></li>
                                    <li className=" rounded-circle d-inline-block ms-2" data-color="#4CAF50"></li>
                                </ul>
                            </div>
                            <div className="option-box rounded bg-body-secondary p-2">
                                <h4 className="text-center fs-6">Random Backgrounds</h4>
                                <div className="random-backgrounds text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 yes active" onClick={() => {dispatch(randomizebackground(true))
                                    localStorage.removeItem("background")
                                    }}>Yes</button>
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 no" onClick={() => {dispatch(randomizebackground(backgroundsimgs[0]))}}>No</button>
                                </div>
                            </div>
                            {setbackground()}
                            <div className="option-box rounded bg-body-secondary p-2 mt-3">
                                <h4 className="text-center fs-6">Show Bullets</h4>
                                <div className="Show-Bullets text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 show active" onClick={() => {dispatch(Bulletsoption(true))
                                    localStorage.setItem("show-bullets", "show")
                                    }}>Yes</button>
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 none" onClick={() => {dispatch(Bulletsoption(false))
                                    localStorage.setItem("show-bullets", "none")
                                    }}>No</button>
                                </div>
                            </div>
                            <div className="option-box rounded bg-body-secondary p-2 mt-3">
                                <h4 className="text-center fs-6">Dark Mode</h4>
                                <div className="dark-mode text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 yes" onClick={() => {dispatch(Darkorlight(true))
                                    localStorage.setItem("dark-mode",true)
                                    }}>Yes</button>
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 no active" onClick={() => {dispatch(Darkorlight(false))
                                    localStorage.setItem("dark-mode",false)
                                    }}>No</button>
                                </div>
                            </div>
                            <div className="option-box rounded bg-body-secondary p-2 mt-3">
                                <h4 className="text-center fs-6">Language</h4>
                                <div className="Language-box text-center p-0 mt-3 d-flex align-items-center justify-content-center gap-2">
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 arabic" onClick={() => {dispatch(Chooselanguage("arabic"))
                                    localStorage.setItem("language","arabic")
                                    window.location.reload();
                                    }}>Arabic</button>
                                    <button type="button" className="btn btn-primary px-3 pt-1 opacity-50 english active" onClick={() => {dispatch(Chooselanguage("english"))
                                    localStorage.setItem("language","english")
                                    window.location.reload();
                                    }}>English</button>
                                </div>
                            </div>
                            <div className="d-grid mt-3">
                                <button className="btn btn-danger" type="button" onClick={() => {
                                    localStorage.removeItem("color_option")
                                    localStorage.removeItem("background")   
                                    localStorage.removeItem("show-bullets")
                                    localStorage.removeItem("dark-mode")

                                    window.location.reload();
                                }}>Reset Options</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    useEffect(() => {
        if(darkopt === true){
            document.documentElement.style.setProperty('--background-color', '#1d1d1d');
            document.documentElement.style.setProperty('--alt-background-color', '#333');
            document.documentElement.style.setProperty('--text-color', 'white');
        } else{
            document.documentElement.style.setProperty('--background-color', 'white');
            document.documentElement.style.setProperty('--alt-background-color', '#ddd');
            document.documentElement.style.setProperty('--text-color', 'black');
        }

        // Check If There's Local Storage Color Option
        let mainColors = localStorage.getItem("color_option");
        // If There's Color Item In Local Storage
        if (mainColors !== null) {

            document.documentElement.style.setProperty('--main-color', mainColors);

            // Remove Active Class From All Colors List Item
            document.querySelectorAll(".colors-list li").forEach(element => {

            element.classList.remove("active");

            // Add Active Class On Element With Data-Color === Local Storage Item
            if (element.dataset.color === mainColors) {

            // Add Active Class
                element.classList.add("active");

            }

        })};

        const colorsLi = document.querySelectorAll(".colors-list li");

        // Loop On All List Items
        colorsLi.forEach(li => {

            // Click On Every List Items
            li.addEventListener("click", (e) => {

            // Set Color On Root
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

            // Set Color On Local Storage
            localStorage.setItem("color_option", e.target.dataset.color);

            handleActive(e);
            
        });
    });

        const randomback = document.querySelectorAll(".random-backgrounds")
        randomback.forEach(btn => {
            btn.addEventListener("click", (e) => {
                handleActive(e)
            })
        })

        const bulitscontainer = document.querySelectorAll(".Show-Bullets");
        bulitscontainer.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                handleActive(e)
            })
        })

        const Darkmodebox= document.querySelectorAll(".dark-mode");
        Darkmodebox.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                handleActive(e)
            })
        })

        const Languagebox= document.querySelectorAll(".Language-box");
        Languagebox.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                handleActive(e)
            })
        })
        
        // Handle Active State
        function handleActive(ev) {

            // Remove Active Class From All Childrens
            ev.target.parentElement.querySelectorAll(".active").forEach(element => {
                
                element.classList.remove("active");
                
            });
            
            // Add Active Class On Self
            ev.target.classList.add("active");
        };

        if(localStorage.getItem("background") !== null){
            document.querySelector(".no").parentElement.querySelectorAll(".active").forEach(element => {
                
                element.classList.remove("active");
                
            });
            document.querySelector(".no").classList.add("active");
        }

        if(localStorage.getItem("show-bullets") === "none"){
            document.querySelector(".none").parentElement.querySelectorAll(".active").forEach(element => {
                
                element.classList.remove("active");
                
            });
            document.querySelector(".none").classList.add("active");
        }

        if(localStorage.getItem("dark-mode") === "true"){
            document.querySelector(".dark-mode .yes").parentElement.querySelectorAll(".active").forEach(element => {
                
                element.classList.remove("active");
                
            });
            document.querySelector(".dark-mode .yes").classList.add("active");
        }

        if(localStorage.getItem("language") === "arabic"){
            document.querySelector(".Language-box .english").parentElement.querySelectorAll(".active").forEach(element => {
                
                element.classList.remove("active");
                
            });
            document.querySelector(".Language-box .arabic").classList.add("active");
        }


    })

    return(
        <>
            {changelanguage()}
        </>
    )
}


export default Slidebar;