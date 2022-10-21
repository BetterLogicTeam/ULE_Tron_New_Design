import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from '../../assets/activateYello.png';
import logo1 from '../../assets/images/logo (2).png';
import { getDownlineReport } from "../../Redux/actions/dailyYield";
import { API } from "../../Redux/actions/API";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Activation.css';
import { toast } from "react-toastify";
import Web3 from "web3";
import moment from "moment";
import TronWeb from "tronweb";

import {
  contractAddressToken,
  abiToken,
  contractAddress,
  abi,
  troncontract_abi,
  troncontract,
  ULE_token,
  ule_token_abi,
} from "../../Containers/Activate/constants";
import { loadWeb3 } from "../../apis/api";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export const Activate = () => {
  const downlineReport = useSelector(
    (state) => state?.dailyYield?.downlineReport
  );
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  let ress = JSON?.parse(user);
  let uId = ress?.uid;//778899;
  console.log("user", uId);
  const dashboard = useSelector((state) => state?.dashboard);

  const [blnce, setBlnce] = useState(0);
  const [account, setAccount] = useState("Plz insconnect wallet!");
  const [chainId, setChainId] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoadingTrans, setLoadingTrans] = useState(false);
  const [isloading, setIsLoading] = useState(false)
  const [apiDate, setDate] = useState(true);
  const [pending, setPending] = useState(0);
  const [betaWallet, setBetaWallet] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [confirm, setConfirm] = useState([]);
  const [rate, setRate] = useState(0);
  const [ratematic, setRateMatic] = useState(0)
  const [TronAddress, setTronAddress] = useState("")
  const [balanceUle, setbalanceUle] = useState(0);
  const [TrxBalance, setTrxBalance] = useState(0)
  const [ValueTron, setValueTron] = useState(0)
  const [ValueTron500, setValueTron500] = useState(500)
  const [ValueTron1000, setValueTron1000] = useState(1000)
  const [ValueTron100, setValueTron100] = useState(100)
  const [loader, setloader] = useState(false)






  const getLiveRate = async () => {
    try {
      const res = await API.get(`/live_rate?id=${ValueTron / 2}`);
      setRate((res?.data.data[0].usdperunit));
    } catch (e) {
      console.log("error", e);
    }
  };
  const LiveRateMaticAPI = async () => {
    try {
      let res = await API.get(`/live_rate_USD_Tron`);
      res = res.data.data[0];
      console.log("res", res);
      setRateMatic((res.limits));

    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  useEffect(() => {
    LiveRateMaticAPI();
  }, []);
  const getBetaWallet = async () => {
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    try {
      const res = await API.get(`/get_betawallet?id=${uId}`);
      setBetaWallet((res?.data.data[0]));
      console.log("res?.data.data[0]", res?.data.data[0].activatupgradeamnt_trading);
      setLoading(false);
    } catch (e) {
      console.log("error", e);
      setLoading(false);
    }
  };
  const getLiveRate1 = async () => {
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    try {
      const res = await API.get(`/pending_date?id=${uId}`);
      setDate(res?.data.data[0].edate);
      let date1 = moment(res?.data.data[0].edate)
        .add(15, "minutes")
        .isBefore(moment());
      setDate(date1);
    } catch (e) {
      console.log("error", e);
    }
  };
  const getLiveRate2 = async () => {
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    try {
      const res = await API.get(`/pending_activation?id=${uId}`);
      setPending(res?.data.data[0]);
    } catch (e) {
      console.log("error", e);
    }
  };
  const getLiveRate3 = async () => {
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    try {
      const res = await API.get(`/confirm_payment?id=${uId}`);
      setConfirm(res?.data.data);
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    getBetaWallet();
    getLiveRate();
    getLiveRate1();
    getLiveRate2();
    getLiveRate3();
  }, []);



  let mainAccount = "";
  async function Ethereum() {

    try {
      console.log("initial");
      mainAccount = await window?.tronWeb?.defaultAddress?.base58;
      console.log("main Account", mainAccount);
      setTronAddress(mainAccount)
      // setAccountAddress(mainAccount);
      if (mainAccount) {
        setAccount("Wallet Connected")
        localStorage.setItem("mainAccount", mainAccount);
        console.log("mainAccount", mainAccount);
        setTimeout(() => {
          getBalanceOfAccount();
        }, 100);
      } else {
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
        const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
        const eventServer = "https://api.shasta.trongrid.io/";
        const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer);
        setTimeout(() => {
          // getData();
        }, 100);

        toast.warning("Please login or install tron wallet!");
        setAccount("Please login or install tron wallet!")

      }
    } catch (error) {
      toast.error(error.message);

      console.log("error", error.message);
    }
  }
  const getBalanceOfAccount = async () => {
    try {
      await window.tronWeb.trx.getBalance(mainAccount, function (err, res) {
        var blnc = parseInt(res) / 1000000;
        setTrxBalance(blnc.toFixed(3));
      });
    }
    catch (e) {
      console.log("blnc", e);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      Ethereum();
    }, 2000);
  }, []);









  const CONTRACT_ADDRESS = "TLcKN2SBTAhiuUmkCvb86hRGdnV42cGyrt";
  const Widthdraw_Address = "TRXR8S92Sx2aAX1H4kBU6Ub9Vgtg9mFrQZ"
  const UleBalance = async () => {

    let contract = await window.tronWeb.contract().at(CONTRACT_ADDRESS);
    mainAccount = await window?.tronWeb?.defaultAddress?.base58;
    let result = await contract.balanceOf(mainAccount).call()

    result = parseInt(result)
    result = result / 1000000000000000000;
    result = result.toFixed(1)
    console.log("Addressss", result);
    setBlnce(result);

    setbalanceUle(result)
    console.log("Balance Ule", result);



  }


  async function handleActivation() {
    try {
      setLoadingTrans(true);
      setloader(true)


      // let address = dashboard?.walletAddress; //Login User Address
      let address = TronAddress;
      // console.log("ADDRESSSS",address);
      let ress = JSON?.parse(user);
      let uid = ress?.uid;   //Login User Id
      let usdamt = ValueTron; //Package USD Amount
      let token = blnce; //Package ULE Value
      let packid = usdamt;
      // let package = 1;

      // alert(uid);
      let mainadd = TronAddress;

      if (parseInt(blnce) < parseInt(parseInt(ValueTron) / rate)) {
        alert("Wallet balance insufficient!!!");
        setLoadingTrans(false);
        setloader(false)


        return;
      }

      // if (parseInt(usdamt) < 100) {
      //   alert("Enter Minimum package amount 100 USD!!!");
      //   setLoadingTrans(false);
      //   return;
      // }

      // if (parseInt(parseInt(usdamt) % 100) != 0) {
      //   alert("Enter package amount in multiple of 100 USD!!!");
      //   setLoadingTrans(false);
      //   return;
      // }

      if (parseInt(usdamt) > 10000) {
        alert("Maximum package amount is 10000 USD");
        setLoadingTrans(false);
        setloader(false)

        return false;
      }

      if (mainadd == undefined) {
        alert("Please connect wallet!!!");
        setLoadingTrans(false);
        setloader(false)

        return;
      }
      if (address.toUpperCase() != mainadd.toUpperCase()) {
        alert("Wallet address and login miss match");
        setLoadingTrans(false);
        setloader(false)

        return;
      }
      if (packid == "0" || packid == "") {
        alert("Please Enter correct package amount!!!");
        setLoadingTrans(false);
        setloader(false)

        return;
      }
      let tron_Rate = ValueTron / 2 * ratematic;
      let ULE_rate = ValueTron / 2 * rate
      // ULE_rate=parseFloat(ULE_rate).toFixed(0)
      //  let value_here=BigNumber((ULE_rate) * 1000000000000000000)
      // const web3 = window.web3;
      ULE_rate = (ULE_rate) * 1000000000000000000;
      ULE_rate = ULE_rate.toLocaleString('fullwide', { useGrouping: false });
      console.log("ULE_rate", (ULE_rate))

      tron_Rate = tron_Rate * 1000000;

      // let ule=1*1000000000000000000;
      // ule=ule.toLocaleString('fullwide', { useGrouping: false })

      // let trone=1*1000000
      // tron_Rate=tron_Rate/10000000000000000000;
      // ULE_rate = parseInt(ULE_rate).toString()

      tron_Rate = parseInt(tron_Rate).toString()
      console.log("tron_Rate", tron_Rate);

      // let tokenAmount = web3.utils.toWei(tron_Rate.toString());
      let tokenAmount = tron_Rate
      // let contract = new web3.eth.Contract(abi, contractAddress);
      let contractToken = await window.tronWeb.contract().at(CONTRACT_ADDRESS);
      await contractToken.approve(Widthdraw_Address, ULE_rate).send({}).then((output) => {
        console.log("- approve Output:", output, "\n");
        toast.success("approve Successful");
        // setLoadingTrans(false)

      })
        .catch((e) => {
          toast.error(e.message);
          setLoadingTrans(false);
          setloader(false)

        });
      let contract = await window.tronWeb.contract().at(Widthdraw_Address);
      await contract
        .ULEbuyRouter(ULE_rate)
        .send({
          callValue: tron_Rate,
          feeLimit: 100000000,
        }).then(async (hash) => {
          if (hash != "") {
            try {

              console.log("activation data", uid, mainadd, usdamt, ValueTron, hash);
              let responce = await API.post(`/activation`, {
                "uid": uid,
                "useraddress": mainadd,
                "amount": usdamt,
                "tokenamount": ValueTron,
                "transaction": hash
              })
              responce = responce?.data?.data;

              toast.success('Please Wait while transaction is processing...')
            } catch (e) {
              console.log("error", e);
              setLoadingTrans(false);
              toast.error("Something went wrong ! ");
            }
          }
          console.log("Final Output:", hash, "\n");
          toast.success("Transaction is complete");
          setTimeout(() => {
            setloader(false)

          }, 40000)

          setLoadingTrans(false);



        }).catch((e) => {
          toast.error(e.message);
          setLoadingTrans(false);
          setloader(false)


        })

    } catch (error) {
      console.log("error", error);
      setLoadingTrans(false);
      setloader(false)


    }
  }
  const getLastTransaction = async () => {
    try {
      let ress = JSON.parse(user);
      let uId = ress?.user_id;
      const res = await API.get(`/verify_last_update_time?id=${uId}`);
      return res?.data?.data ? res?.data?.data : [];
    } catch (e) {
      return [];
    }
  };
  async function handleUpdation() {
    try {
      setLoadingTrans(true);
      setIsLoading(true);
      // setLoadingTrans(false);
      let maxWithdraw = await getLastTransaction();
      // let address = dashboard?.walletAddress; //Login User Address
      // let address = await loadWeb3()
      // console.log("ADDDDDD", address);
      let uid = dashboard?.userId; //Login User Id
      let usdamt = amount; //Package USD Amount
      let token = blnce; //Package ULE Value
      let packid = usdamt;
      // console.log("VAlue",amount);

      // let package = 1;
      // if (maxWithdraw.length > 0) {
      //   alert(
      //     "You can make upgrade after 2 hours from your previous Upgrade !"
      //   );
      //   setLoadingTrans(false);

      //   return;
      // }
      // let mainadd = account;
      // if (parseInt(amount) < parseInt(betaWallet?.activatupgradeamnt_trading)) {
      //   alert(
      //     "Your Current Package amount should me more than or equal to Last Package"
      //   );
      //   setLoadingTrans(false);

      //   return;
      // }
      // if (parseInt(blnce) < parseInt(parseInt(amount) / rate)) {
      //   alert("Wallet balance insufficient!!!");
      //   setLoadingTrans(false);

      //   return;
      // }

      // if (parseInt(usdamt) < 100) {
      //   alert("Enter Minimum package amount 100 USD!!!");
      //   setLoadingTrans(false);

      //   return;
      // }

      // if (parseInt(parseInt(usdamt) % 100) != 0) {
      //   alert("Enter package amount in multiple of 100 USD!!!");
      //   setLoadingTrans(false);

      //   return;
      // }

      // if (parseInt(usdamt) > 10000) {
      //   alert("Maximum package amount is 10000 USD");
      //   setLoadingTrans(false);

      //   return false;
      // }

      // if (mainadd == undefined) {
      //   alert("Please connect wallet!!!");
      //   return;
      // }
      // if (address.toUpperCase() != mainadd.toUpperCase()) {
      //   setLoadingTrans(false);
      //   alert("Wallet address and login miss match");
      //   setLoadingTrans(false);

      //   return;
      // }
      // if (packid == "0" || packid == "") {
      //   alert("Please Enter correct package amount!!!");
      //   setLoadingTrans(false);
      //   return;
      // }

      let tron_Rate = amount * rate;
      let ULE_rate = amount * ratematic

      // const web3 = window.web3;
      ULE_rate = ULE_rate * 1000000000000000000;
      tron_Rate = tron_Rate * 1000000;

      // tron_Rate=tron_Rate/10000000000000000000;
      ULE_rate = parseInt(ULE_rate).toString()

      tron_Rate = parseInt(tron_Rate).toString()
      console.log("tron_Rate", tron_Rate);

      // let tokenAmount = web3.utils.toWei(tron_Rate.toString());
      let tokenAmount = tron_Rate
      // let contract = new web3.eth.Contract(abi, contractAddress);
      let contractToken = await window.tronWeb.contract().at(CONTRACT_ADDRESS);
      await contractToken.approve(Widthdraw_Address, ULE_rate).send({}).then((output) => {
        console.log("- Output:", output, "\n");
        toast.success("approve Successful");
        // setLoadingTrans(false)

      })
        .catch((e) => {
          toast.error(e.message);
          setLoadingTrans(false);
        });
      let contract = await window.tronWeb.contract().at(Widthdraw_Address);
      await contract.UlebuyRouter(ULE_rate).send({
        feeLimit: 100000000,
        callValue: tron_Rate,
        shouldPollResponse: true
      }).then(async (hash) => {
        // if (hash != "") {
        //   try {
        //    toast.success('')
        //   } catch (e) {
        //     console.log("error", e);
        //     setLoadingTrans(false);
        //     toast.error("Something went wrong ! ");
        //   }
        // }
        console.log("- Output:", hash, "\n");
        toast.success("Transaction is complete");
        setLoadingTrans(false);



      }).catch((e) => {
        toast.error(e.message);
        setLoadingTrans(false);


      })
    } catch (error) {
      console.log("error", error);
      setLoadingTrans(false);
    }
  }


  useEffect(() => {
    UleBalance()
  }, [])


  const increment_add = (add) => {
    if (add == 100) {
      setValueTron(0)
      setValueTron100(100 + ValueTron100)
      setValueTron(ValueTron100)
    } else if (add == 500) {
      setValueTron(0)
      setValueTron500(500 + ValueTron500)
      setValueTron(ValueTron500)


    } else if (add == 1000) {
      setValueTron(0)
      setValueTron1000(1000 + ValueTron1000)
      setValueTron(ValueTron1000)

    } else {
      setValueTron(0)
      setValueTron1000(1000)
      setValueTron500(500)
      setValueTron100(100)

    }

  }


  return (
    <>
      <div class="page-wrapper">
        <div class="page-content">


          {loader == true || account == null ?
            <>
              <div className='LoaderSpinner'>
                <Dna
                  visible={true}
                  height="180"
                  width="180"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div>
            </>

            : <></>}




          <div class="row" style={{ marginTop: "0rem" }} >
            <div className="col-lg-3"></div>
            <div class="col-lg-5 col-md-12 col-12">
              <div class="" role="document">
                <div class="modal-content10">
                  <div class="modal-header" style={{ paddingBottom: "10px" }}>
                    <div class="avlbal">
                      <h2 class="modal-title" id="exampleModal3Label2">
                        Activate / Upgrade
                      </h2>
                      <div className="Model_text_inner" >
                        <h5 class="modal-title" id="exampleModal3Label2">
                          ULE Balance :
                          <span id="tokenbalance" style={{ color: "#fff" }}>{balanceUle}</span><span style={{ color: "#fff" }}> Coin</span>
                        </h5>

                        <h5 class="modal-title" id="exampleModal3Label2">
                          TRON Balance :
                          <span style={{ color: "#fff" }} readonly="" id="getBalance">{TrxBalance}</span>
                          <span style={{ color: "#fff" }}> TRON</span>

                        </h5>
                      </div>
                      <div className="Model_text_inner"  >
                        <h5 class="modal-title" id="exampleModal3Label2">
                          Live Rate :
                          <input type="text" class="input_width input_width-2" id="txtchangevalue" style={{ color: "black" }} value={`${ratematic} Tron` + "/" + ` ${rate} ULE`} readonly="" />


                        </h5>

                        <h5 class="modal-title" id="exampleModal3Label2">

                          <input type="text" class="input_width input_width-1" id="txtchangevalue" style={{ color: "black" }} placeholder={`1 TRON = 0.063USD`} readonly="" />


                        </h5>
                      </div>

                    </div>
                  </div>
                  <div class="modal-body">
                    <span class="metamaskConnection text-success text-center">{account}</span>
                    <div class="popup_net">
                      <br />
                      {/* <!---onclick number increase start--> */}
                      <div class="addNum">
                        <div class="trxnumber">
                          <input type="text" readonly="" id="txtamount2" class="form5" value={ValueTron} />
                          <span>USD</span>
                        </div>

                        <div class="trxnumber">
                          <input type="text" readonly="" id="txtTokenvalue2" class="form5" placeholder={(`${ValueTron / 2}` * `${rate}` + " " + "ULE")} />
                          <span>ULE Value</span>
                        </div>

                        <div class="trxnumber">
                          <input type="text" value="" readonly="" id="txtTronvalue2" class="form5" placeholder={(`${ValueTron / 2}` * `${ratematic}` + " " + "Tron")} />
                          <span>TRON Value</span>
                        </div>

                        <div class="numbtn" >


                          <button className='btn-ip-1' onClick={() => setValueTron(100 + ValueTron)} >+ 100$</button>

                          <button className='btn-ip-1' onClick={() => setValueTron(500 + ValueTron)}>+ 500$</button>
                          <button className='btn-ip-1' onClick={() => setValueTron(1000 + ValueTron)}>+ 1000$</button>
                          <button className='btn-ip-1 button' onClick={() => setValueTron(0)}>Reset</button>
                        </div>

                        <input type="hidden" id="packageamount" name="name" autocomplete="off" />

                      </div>


                      <h5 class="tomenname" style={{ marginTop: "1rem" }}></h5>
                      <div class="row">

                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                          {apiDate && (
                            <>
                              {isLoadingTrans ? (
                                <button
                                  className="btn btn-success"
                                  style={{ marginTop: "10px" }}
                                  id="btnother"
                                >
                                  <div
                                    className="loaders"
                                    style={{
                                      height: "30px",
                                      width: "30px",
                                    }}
                                  ></div>
                                  Transaction is in progress
                                </button>
                              ) : (

                                <a  >
                                  <div class="text-center net_box " onClick={() => handleActivation()}>
                                    <img src={logo} class="img-fluid" width="20%" />
                                    <h4>Activation</h4>
                                  </div>
                                </a>


                              )

                              }
                            </>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>




      </div>



    </>
  );
};
