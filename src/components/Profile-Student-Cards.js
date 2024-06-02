import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faFilePen, faHourglassHalf, faUpload, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileStudentCards() {
    return (
        <>  
            {/* احصاءات الطالب  */}
            <div className="statistics d-flex justify-content-center my-3 gap-3">
                {/* احصاءات المحاضرات */}
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title text-center pb-2">Lectures</h5>
                        <div class="card-text mt-4 d-flex align-items-center justify-content-between">
                            <div>
                                <FontAwesomeIcon icon={faUpload} size="xl" className="icon-colored"/>
                                <p className="fs-4 mt-2 text-center">20</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: 'green'}}/>
                                <p className="fs-4 mt-2 text-center">10</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: 'red'}}/>
                                <p className="fs-4 mt-2 text-center">7</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHourglassHalf} size="xl" style={{color: 'yellow'}}/>
                                <p className="fs-4 mt-2 text-center">3</p>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* احصاءات الامتحانات */}
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title text-center pb-2">Exams</h5>
                        <div class="card-text mt-4 d-flex align-items-center justify-content-between">
                            <div>
                                <FontAwesomeIcon icon={faUpload} size="xl" className="icon-colored"/>
                                <p className="fs-4 mt-2 text-center">20</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: 'green'}}/>
                                <p className="fs-4 mt-2 text-center">10</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: 'red'}}/>
                                <p className="fs-4 mt-2 text-center">7</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHourglassHalf} size="xl" style={{color: 'yellow'}}/>
                                <p className="fs-4 mt-2 text-center">3</p>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* احصاءات الواجيات */}
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title text-center pb-2">Home Works</h5>
                        <div class="card-text mt-4 d-flex align-items-center justify-content-between">
                            <div>
                                <FontAwesomeIcon icon={faUpload} size="xl" className="icon-colored"/>
                                <p className="fs-4 mt-2 text-center">20</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: 'green'}}/>
                                <p className="fs-4 mt-2 text-center">10</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: 'red'}}/>
                                <p className="fs-4 mt-2 text-center">7</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHourglassHalf} size="xl" style={{color: 'yellow'}}/>
                                <p className="fs-4 mt-2 text-center">3</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* مهام الطالب و نسبه اكتمالها */}
            <div className="tasks my-3">
                <div class="card mt-3">
                    {/* نوع المهمه */}
                    <div class="card-title d-flex align-items-center p-2">
                        <FontAwesomeIcon icon={faVideo} />
                        <h5 className=" ms-3 my-0">Lecture</h5>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-between">
                        {/* اسم المهمه */}
                        <blockquote class="blockquote mb-0">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            <footer class="blockquote-footer">12 march</footer>
                        </blockquote>
                        {/* نسبه اكتمالها */}
                        <div>
                            <div className="circle-progress" style={{background: `conic-gradient(var(--main-color) ${50 * 3.6}deg, var(--background-color) 0deg)`}}>
                                <p className="z-3 position-absolute top-50 start-50 translate-middle">50%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-3">
                    {/* نوع المهمه */}
                    <div class="card-title d-flex align-items-center p-2">
                        <FontAwesomeIcon icon={faFilePen} />
                        <h5 className=" ms-3 my-0">Exam</h5>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-between">
                        {/* اسم المهمه */}
                        <blockquote class="blockquote mb-0">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            <footer class="blockquote-footer">12 march</footer>
                        </blockquote>
                        {/* نسبه اكتمالها */}
                        <div>
                            <div className="circle-progress" style={{background: `conic-gradient(var(--main-color) ${100 * 3.6}deg, var(--background-color) 0deg)`}}>
                                <p className="z-3 position-absolute top-50 start-50 translate-middle">100%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-3">
                    {/* نوع المهمه */}
                    <div class="card-title d-flex align-items-center p-2">
                        <FontAwesomeIcon icon={faFilePen} />    
                        <h5 className=" ms-3 my-0">Home Work</h5>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-between">
                        {/* اسم المهمه */}
                        <blockquote class="blockquote mb-0">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            <footer class="blockquote-footer">12 march</footer>
                        </blockquote>
                        {/* نسبه اكتمالها */}
                        <div>
                            <div className="circle-progress" style={{background: `conic-gradient(var(--main-color) ${25 * 3.6}deg, var(--background-color) 0deg)`}}>
                                <p className="z-3 position-absolute top-50 start-50 translate-middle">25%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}