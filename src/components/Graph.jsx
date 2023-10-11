import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const Graph = ({ data }) => {
    const [crimeData, setCrimeData] = useState();
    const [currentDate, setCurrentDate] = useState(new Date());

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv');
            setCrimeData(response)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    const years = crimeData?.data?.data.map(item => item.data_year);
    const aggravatedAssaultData = crimeData?.data?.data.map(item => item['Burglary']);

    const options = {
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: years
        }
    };

    const series = [{
        name: 'Aggravated Assault',
        data: aggravatedAssaultData
    }];

    return (
        <div className="p-4 bg-white mx-auto">
            <div className="flex justify-between items-center">
                <div className="text-sm font-semibold mb-4">RealAssist.ai</div>
                <div className="text-sm font-semibold mb-4">123 Main street, Dover, 23526-27546</div>
            </div>

            <div className="bg-blue-500 h-0.5"></div>

            <div className="w-full bg-[#e8edf4] rounded-xl mt-4 h-60">
                <div className="text-sm font-semibold mb-4 bg-[#dde4ee] rounded-t-xl h-8 pl-5 text-blue-600 flex items-center">&nbsp;</div>
                <div className="w-full flex justify-center items-center h-40">
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                        Only focus on crime graph
                    </div>
                </div>

            </div>

            <div className="w-full bg-[#e8edf4] rounded-xl mt-4 h-60">
                <div className="text-sm font-semibold mb-4 bg-[#dde4ee] rounded-t-xl h-8 pl-5 text-blue-600 flex items-center">&nbsp;</div>
                <div className="w-full flex justify-center items-center h-40">
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                        Only focus on crime graph
                    </div>
                </div>
            </div>

            <div className="flex items-center my-4 justify-center ">
                <div className="text-sm font-semibold mr-4">Crime</div>
                <div className="bg-blue-500 h-0.5 w-full"></div>
            </div>

            <div className="w-full bg-[#e8edf4] rounded-xl">
                <div className="text-sm font-semibold mb-4 bg-[#dde4ee] rounded-t-xl h-8 pl-5 text-blue-600 flex items-center">Burglary</div>
                <div className="w-full flex justify-center items-center">
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width={700}
                        height={320}
                    />
                </div>
            </div>

            <div className="bg-blue-500 h-0.5 mt-4"></div>

            <div className="flex justify-between items-center">
                <div className="text-sm font-semibold mt- text-blue-600">Report generated on {currentDate.toDateString()}</div>
                <div className="text-sm font-semibold mt-4">RealAssist Property Paper</div>
            </div>

        </div>
    );
}

export default Graph;
