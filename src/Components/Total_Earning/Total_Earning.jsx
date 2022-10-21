import React from "react";
import './Total_Earning.css'
import Chart from 'react-apexcharts'
const Total_Earning = (props) => {

    return (
        <div class="card radius-10" style={{ height: "26rem" }}>
            <div class="card-body text-center px-0">
                <h6 className="text-white">Activation Reward</h6>
                <div class="chart-container-10 ">

                    <Chart
                        options={props.opt.options}
                        series={props.opt.series}
                        type="radialBar"
                        height={'300'}
                    />
                    <div className="row px-2">
                        <div className=" col-6 d-flex flex-column text-center">
                            <h2 className="h3 h-color">{props.data.netbalance}</h2>
                            <p className="p-color">Net Balance</p>
                        </div>
                        <div className=" col-6 d-flex flex-column text-center">
                            <h2 className="h3 h-color">{props.data.withdrawal}</h2>
                            <p className="p-color">Total Withdrawal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Total_Earning;