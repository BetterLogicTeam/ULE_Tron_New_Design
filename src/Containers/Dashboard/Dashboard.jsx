import React, { useEffect } from "react";
import { useState } from "react";
import {
  All_Participates,
  Joining,
  Total_Earning,
  All_Income,
  Earned_Wire,
  Earned_USD,
  Id_Number,
  Profit,
  Registration_Reward
} from "../../Components";
import "./Dashboard.css";
import { API } from "../../Redux/actions/API";
import {
  getWalletAddress,
  getDailyYeild,
  getTeamDy,
  getAllParticipants,
  getBonusDy,
  getReferralEarning,
  getPools,
  getWithdrawal,
  getDownlineBusiness,
} from "../../Redux/actions/dashboard";
import { useDispatch, useSelector } from "react-redux";
import Affiliate from "../../Components/Affiliate_Link/Affiliate";
import axios from "axios";

import './app.css'
import './bootstrap-extended.css'
import './CustomNav.css'
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const dashboard = useSelector((state) => state?.dashboard);
  const user = localStorage.getItem("user");

  console.log("User_id", user);
  const dispatch = useDispatch();
  const getAllData = () => {
    if (user) {
      let ress = JSON.parse(user);
      let uId = ress?.uid;
      dispatch(getWalletAddress(uId));
      dispatch(getAllParticipants(uId));
      dispatch(getDailyYeild(uId));
      dispatch(getTeamDy(uId));
      dispatch(getBonusDy(uId));
      dispatch(getReferralEarning(uId));
      dispatch(getPools(uId));
      dispatch(getWithdrawal(uId));
      dispatch(getDownlineBusiness(uId));
    }
  };
  useEffect(() => {
    // getBetaWallet();
    getAllData();
  }, []);

  let [earn, setearn] = useState();
  const [netBalance, setnetBalance] = useState();
  const [withdrawal, setwithdrawal] = useState();
  const [leftbusiness, setLeftbusiness] = useState();
  const [rightbusiness, setRightbusiness] = useState();
  const [left_direct_business, setLeft_direct_business] = useState();
  const [right_direct_business, setRight_direct_business] = useState();
  const [left_downline, setLeft_downline] = useState();
  const [right_downline, setRight_downline] = useState();
  const [left_direct, setLeft_direct] = useState();
  const [right_direct, setRight_direct] = useState();
  const [pack, setPack] = useState();
  const [total, setTotal] = useState();
  const [rlevelincom, setRlevelincom] = useState();
  const [rdirectincom, setRdirectIncome] = useState();
  const [roiIncome, setroiIncome] = useState();
  const [binaryIncome, setBinaryIncome] = useState();
  const [dividend_income, setDividend_income] = useState();
  const [rank_yield_income, setRank_yield_income] = useState();
  const [earnAmount, setearnAmount] = useState();
  const [TotalAmount, setTotalAmount] = useState(0);
  const [MaxIncome, setMaxIncome] = useState(0);
  const [allParticipants, setallParticipants] = useState(0);
  const [joined_last_24_hour, setjoined_last_24_hour] = useState();
  let [participantEarned, setparticipantEarned] = useState(0);
  const [earendUSD, setearendUSD] = useState();
  const [particioatEarnd, setparticioatEarnd] = useState();
  const [nettokenUsdvalue, setEarnAmount] = useState();
  const [levelincome, setLevelincome] = useState(0);
  const [joinhere, setjoinhere] = useState();
  const [rewardName, setRewardName] = useState();
  const [LeftDirect, setLeftDirect] = useState(0)
  const [copyTest, setcopyTest] = useState(false)
  const [leftdirecttotal, setleftdirecttotal] = useState(0)
  const [rightdirecttotal, setrightdirecttotal] = useState(0)



  // console.warn("dddddd=>",direct)
  let ress = JSON.parse(user);
  let uId = ress?.uid;
  console.log("UID=>", uId);
  const DashboardAPI = async () => {
    try {
      let res = await API.get(`/get_betawallet?id=${uId}`);
      res = res.data.data[0];
      console.log("res", res);
      //  Total Earning-----------
      let Earning_Total = 30000 / parseInt(res.totalincome);
      earn = Earning_Total;
      let referralEarnng = res.registration_directIncome;
      setLeftDirect(res)

      setearning(Earning_Total);
      console.log("Data", earn);
      localStorage.setItem("ID", res.totalincome);

      setreferralearning(referralEarnng);

      setearn(res?.totalincome);
      //  Net Balance-----------
      setnetBalance(res.netbal);
      //  Total Withdrawal-----------
      setwithdrawal(res.withdrawal);
      //  Net Leftbusiness-----------
      setLeftbusiness(res.leftbusiness);
      setLeft_direct_business(res.left_direct_business);
      //  Total Rightbusiness-----------
      setRightbusiness(res.rightbusiness);
      setRight_direct_business(res.right_direct_business);
      //  Net Left-----------
      setLeft_downline(res.left_downline);
      //  total Right-----------
      setRight_downline(res.right_downline);
      //  Net Left-----------
      setLeft_direct(res.left_direct);
      //  total Right-----------
      setRight_direct(res.right_direct);
      //  UID-----------
      setPack(res.direct);

      //  Referral Income-----------------------
      setRlevelincom(res.registration_levelIncome);
      localStorage.setItem("ID2", res.registration_directIncome);
      // Matching Income------------------------
      setRdirectIncome(res.registration_directIncome);
      // ROI Income---------------------
      setroiIncome(res.roiincome);
      setBinaryIncome(res.binaryIncome);
      setDividend_income(res.dividend_income);
      setRank_yield_income(res.rank_yield_income);
      // Your total earning----------------------
      setearnAmount(res.MaxIncome);
      // out of ---------------------------------
      setTotalAmount(res.tt);
      setjoinhere(res.totalactivationamount);
      setTotal((res.totalactivationamount))
      setEarnAmount(res.nettokenUsdvalue);

      setMaxIncome(res.MaxIncome);
      setLevelincome(res.levelincome);
      let earned_wire = res.ParticipantEarnedWire;
      setparticioatEarnd(earned_wire);
      setearendUSD(res?.ParticipantEarnedUSD);
      setRewardName(res?.rewardIncome);

      // console.log("ParticipantEarnedWire",earned_wire);

      setallParticipants(res?.TotalMembers);
      setjoined_last_24_hour(res?.NewToday);
      // {dashboard?.allParticipants?.all_participants
      //   ? dashboard?.allParticipants?.all_participants
      //   : 0}
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  useEffect(() => {
    DashboardAPI();
  }, []);

  let [joining, setjoining] = new useState({
    series: [
      {
        name: "STOCK ABC",
        data: [
          [1, 34],
          [3, 54],
          [5, 23],
          [15, 43],
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#FFFFFF"],
      },
      fill: {
        colors: ["#ffffff"],
        opacity: 1,
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
      },
    },
  });

  const IDHERE = localStorage.getItem("ID");


  let [earning, setearning] = new useState({
    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450",
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#000",
            strokeWidth: "90%",
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem",
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: "solid",
      },
      colors: ["#ffffff"],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  });

  const IDHERES = localStorage.getItem("ID2");

  let [referralearning, setreferralearning] = new useState({
    series: [IDHERES],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450",
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#000",
            strokeWidth: "90%",
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem",
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: "solid",
      },
      colors: ["#ffffff"],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERES],
    },
  });

  let [earned_wire, setearned_wire] = new useState({
    series: [
      {
        name: "STOCK ABC",
        data: [
          [1, 34],
          [3, 54],
          [5, 23],
          [15, 43],
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#FFFFFF"],
      },
      fill: {
        colors: ["#ffffff"],
        opacity: 1,
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
      },
    },
  });
  let [id_number, setid_number] = new useState({
    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
          {
            x: "category D",
            y: 10,
          },
          {
            x: "category E",
            y: 18,
          },
          {
            x: "category F",
            y: 13,
          },
          {
            x: "category G",
            y: 10,
          },
          {
            x: "category H",
            y: 18,
          },
          {
            x: "category I",
            y: 13,
          },
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#FFFFFF"],
      },
      fill: {
        colors: ["#ffffff"],
        opacity: 1,
        type: "solid",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
          e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
          borderRadius: 0,
          columnWidth: 7,
          barHeight: "70%",
        },
      },
    },
  });
  let [profit, setprofit] = new useState({
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            colors: "#293450",
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#000",
            strokeWidth: "97%",
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              color: "#fff",
              fontSize: "2.5rem",
            },
          },
        },
      },
      fill: {
        type: "solid",
      },
      colors: ["#2cd719"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      labels: ["300%"],
    },
  });


  useEffect(() => {
    copyTest ? toast.success("Copied") : <></>
    setTimeout(() => {
      setcopyTest(false)
    }, 10);
  }, [copyTest])
  return (
    <>
      <div className="page-wrapper dashboard_home" style={{ height: '170vh' }}>
        <div className="page-content">
          <div className="row  ">
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-6">
                  <Registration_Reward
                    data={{ netbalance: `${LeftDirect.netRegistrationWithdrawal || "0"}`, withdrawal: `${LeftDirect.registrationWithdrawal || "0"}` }}
                    opt={referralearning}
                  >
                    <div id=""></div>
                  </Registration_Reward>
                </div>
                <div className="col-12 col-lg-6 col-xl-6">
                  <Total_Earning
                    data={{ netbalance: `${netBalance || "0"}`, withdrawal: `${withdrawal || "0"}` }}
                    opt={earning}
                  >
                    <div id=""></div>
                  </Total_Earning>
                </div>
              </div>
              {/* <!--end row--> */}
            </div>

            <div className="col-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10 overflow-hidden">
                    <div className="card-body">
                      <p>My Package</p>
                      <h3 className="text-white">$ {LeftDirect.totalactivationamount}</h3>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>My Team</p>
                      <div className="Left_Right">
                        <h6 className="text-white">
                          Total : {LeftDirect.left_downline}

                          <br />
                          Active : {LeftDirect.Ad}

                          <br />
                          Left
                        </h6>
                        <h6 className="text-white">
                          Total : {LeftDirect.right_downline}

                          <br />
                          Active : {LeftDirect.AdR}

                          <br />
                          Right
                        </h6>
                      </div>

                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Team Yield Business</p>
                      <div className="Left_Right">
                        <h6 className="text-white">
                          $ {LeftDirect.leftbusiness}

                          <br />
                          Left
                        </h6>
                        <h6 className="text-white">
                          $ {LeftDirect.rightbusiness}

                          <br />
                          Right
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-12 col-lg-6 col-xl-6"> */}
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>My Referral</p>
                      <div className="Left_Right">
                        <h6 className="text-white">
                          Total : {LeftDirect.leftdirecttotal}
                          <br />
                          Active : {LeftDirect.left_direct}
                          <br />
                          Left
                        </h6>
                        <h6 className="text-white">
                          Total : {LeftDirect.rightdirecttotal}

                          <br />
                          Active : {LeftDirect.right_direct}

                          <br />
                          Right
                        </h6>
                      </div>

                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>

                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Affiliate Link Left</p>

                      <div class=" copy_btn_set">

                        <div class="wdg-box bxset primary">
                          <input type="text" class="wdg-input-box" id="myInput" readonly="" value={`https://www.uletron.com/registration?referrallink=${uId}&position=Left`} />
                          <div class="fast-msg-box"></div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;

                        <CopyToClipboard text={`https://www.uletron.com/registration?referrallink=${uId}&position=Left`}
                          onCopy={() => setcopyTest(true)}  >
                          <div class="wdg-actions copy_btn_set2">
                            <button type="button" class="copy_btn_set3" >
                              <span className="fontdata">Copy</span>
                            </button>

                          </div>
                        </CopyToClipboard>

                      </div>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Affiliate Link Right</p>
                      <div class=" copy_btn_set">

                        <div class="wdg-box bxset primary">
                          <input type="text" class="wdg-input-box" id="myInput" readonly="" value={`https://www.uletron.com/registration?referrallink=${uId}&position=Right`} />
                          <div class="fast-msg-box"></div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;

                        <CopyToClipboard text={`https://www.uletron.com/registration?referrallink=${uId}&position=Right`}
                          onCopy={() => setcopyTest(true)}  >
                          <div class="wdg-actions copy_btn_set2">
                            <button type="button" class="copy_btn_set3" >
                              <span className="fontdata">Copy</span>
                            </button>

                          </div>
                        </CopyToClipboard>

                      </div>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end row--> */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="col-md-12">
                  <div className="prgs">
                    <img src="assets3/images/ule.png" id="dynamicwidth" style={{ marginLeft: ((LeftDirect.MaxIncome / 300) * 100).toFixed(0) + "%" }} />

                    <div id="myProgress">
                      <div id="myBar" style={{ width: ((LeftDirect.MaxIncome / 300) * 100).toFixed(0) + "%", backgroundColor: "green" }}></div>
                    </div>
                  </div>
                  <div style={{ fontSize: 'medium', color: '#fff' }}>
                    {/* You have Earned Total 9.77% ($58) out of 400% ($600) of Total Investment ($200). */}
                    You have earned a total $ {LeftDirect.EarnAmount}  out of $ {LeftDirect.tt} ({LeftDirect.MaxIncome}% out of your total 300% of your investment)

                  </div>

                  <br />


                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 ">
                <div className="card radius-10 Share">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="text-white" >All Income</h6>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4 className="text-white">Registration Reward</h4>

                        <h4 className="text-white">$ {LeftDirect.registration_directIncome} </h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '44%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Activation Reward</h4>
                        <h4>$ {LeftDirect.direct}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Daily Yield</h4>
                        <h4>$ {LeftDirect.roiincome}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Referral Daily Yield Booster</h4>
                        <h4>$ {LeftDirect.levelincome}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Referral Level Income</h4>
                        <h4>$ {LeftDirect.registration_levelIncome}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Matching Reward</h4>
                        <h4>$ {LeftDirect.binaryIncome}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Dividend Reward</h4>
                        <h4>$ {LeftDirect.dividend_income}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name text-white">
                        <h4>Rank Achievers Yield</h4>
                        <h4>$ {LeftDirect.rank_yield_income}</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-6">
                {/* <div className="card radius-10 overflow-hidden">
                  <div className="card-body">
                    <p>Next Rank</p>
                    <h3 className="text-white">$ {LeftDirect.totalactivationamount}</h3>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div> */}
                <div className="card radius-10">
                  <div className="card-body">
                    <p>Rank </p>
                    <div className="Left_Right">
                      <h6 className="text-white">
                        {LeftDirect.currentRank}

                        <br />
                        Current Rank
                      </h6>
                      <h6 className="text-white">
                        {LeftDirect.nextRank}

                        <br />
                        Next Rank
                      </h6>
                    </div>

                  </div>

                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="card radius-10">
                  <div className="card-body">
                    <p>Today Team Yield Business </p>
                    <div className="Left_Right">
                      <h6 className="text-white">
                        $ {LeftDirect.todayleftbusiness}

                        <br />

                        Left
                      </h6>
                      <h6 className="text-white">
                        $ {LeftDirect.todayrightbusiness}

                        <br />

                        Right
                      </h6>
                    </div>

                  </div>

                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="card radius-10">
                  <div className="card-body">
                    <p>Booster Status </p>
                    <div className="Left_Right">
                      <h6 className="text-white">
                        {LeftDirect.boosterstatus}

                        <br />
                      </h6>
                    </div>

                  </div>

                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* <!--end row--> */}
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default Dashboard;
