import { useSelector } from "react-redux";

export default function LandingText() {
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                    <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h3 className="text-light fw-bold fs-2">نحن نساعدك علي <span>تحقيق</span> حلمك</h3>
                            <p className="text-light fs-5">نحن دائما سنكون بجانبك لمساعدتك علي الوصول الي اعلي المراتب</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h3 className="text-light fw-bold fs-2">We help you <span>achieve</span> your dream</h3>
                            <p className="text-light fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias at ab id animi.</p>
                        </div>
                    </div>
                </>
            )
        }
    }
    return(
        <>
            {changelanguage()}
        </>
    )
}