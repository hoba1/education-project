import { LineChart } from "@mui/x-charts";

export default function ProfileStudentGraphs() {
    return(
        <>
            {/* يحتوي علي جميع الرسومات البيانيه */}
            <div class="graphs-table rounded my-4 p-4" style={{maxWidth: "35%", backgroundColor: 'var(--alt-background-color)'}}>   
                <h2 className="text-center mb-4" style={{color: 'var(--text-color)'}}>Performance</h2>
                <div class="card my-3">
                    <div class="card-body bg-transparent" style={{border: "1px solid var(--main-color)", borderRadius: '6px'}}>
                        <h5 class="card-title text-center pb-3">In Exams</h5>
                        <LineChart
                            // النقاط علي حسب المحور س
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            // النقاط علي حسب المحور ص
                            series={[
                                {
                                data: [0, 8, 2, 8.5, 3, 5],
                                },
                            ]}
                            width={'400'}
                            height={'300'}
                            // لون الخط
                            colors={["var(--main-color)"]}
                        />
                    </div>
                </div>
                <div class="card my-3">
                    <div class="card-body bg-transparent" style={{border: "1px solid var(--main-color)", borderRadius: '6px'}}>
                        <h5 class="card-title text-center pb-3">In Lectures</h5>
                        <LineChart
                            // النقاط علي حسب المحور س
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            // النقاط علي حسب المحور ص
                            series={[
                                {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={'400'}
                            height={'300'}
                            // لون الخط
                            colors={["var(--main-color)"]}
                        />
                    </div>
                </div>
                <div class="card my-3">
                    <div class="card-body bg-transparent" style={{border: "1px solid var(--main-color)", borderRadius: '6px'}}>
                        <h5 class="card-title text-center pb-3">In Home Works</h5>
                        <LineChart
                            // النقاط علي حسب المحور س
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            // النقاط علي حسب المحور ص
                            series={[
                                {
                                data: [1, 3, 7, 8.5, 4, 5],
                                },
                            ]}
                            width={'400'}
                            height={'300'}
                            // لون الخط
                            colors={["var(--main-color)"]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}