import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PagePath, Table } from "../../Components";
import { API } from "../../Redux/actions/API";
import './Widthdrawal.css';
import TronWeb from "tronweb";
import { toast } from "react-toastify";


const Withdrawal = () => {
    const [getdata, setgetdata] = useState("")
    const [getInputData, setgetInputData] = useState("")
    const [Connect, setConnect] = useState("wallet is not connected..!..Wait...")
    let [TronAddress, setTronAddress] = useState("")
    let [Rate, setRate] = useState("")
    let [Live_rate, setLive_rate] = useState("")
    const user = localStorage.getItem("user");
    let ress = JSON.parse(user);
    let uId = ress?.uid;
    const dashboard_data = async () => {
        try {
            let res = await API.get(`/get_betawallet?id=${uId}`);
            res = res.data.data[0];


            setgetdata(res)


        } catch (e) {
            console.log("Error while get API DAta", e);
        }
    }

    let mainAccount = "";
    async function Ethereum() {
        try {
            console.log("initial");
            mainAccount = await window?.tronWeb?.defaultAddress?.base58;
            console.log("main Account", mainAccount);
            setTronAddress(mainAccount)

            // setAccountAddress(mainAccount);
            if (mainAccount) {

                setConnect("Wallet Connected")
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
                setConnect("Please login or install tron wallet!")

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
                //   setTrxBalance(blnc.toFixed(3));
            });
        }
        catch (e) {
            console.log("blnc", e);
        }
    }
    const getLiveRate = async () => {
        try {
          let res = await API.get(`/live_rate`);
          res=res?.data.data[0].usdperunit
          setRate(res)
          setLive_rate(1/res*getInputData);
          console.log("setLive_rate",1/res*getInputData);
        } catch (e) {
          console.log("error", e);
        }
      };

      useEffect(() => {
        getLiveRate()
      }, [getInputData])
      

    useEffect(() => {
        setTimeout(() => {
            Ethereum();
        }, 2000);
        // getLiveRate()
    }, []);

   


    const CONTRACT_ADDRESS = "TLcKN2SBTAhiuUmkCvb86hRGdnV42cGyrt";
    const Widthdraw_Address = "TEvn31CVdfgZNc8wUErhRXupgSeSPWkY7X"
    const WithDrawal = async () => {
        try {
            console.log("Rate",Rate);

            Rate = Rate* 1000000000000000000
            Rate = Rate.toLocaleString('fullwide', { useGrouping: false });

            let contractToken = await window.tronWeb.contract().at(CONTRACT_ADDRESS);
            await contractToken.approve(Widthdraw_Address, Rate).send({}).then((output) => {
                console.log("- approve Output:", output, "\n");
                toast.success("approve Successful");
                // setLoadingTrans(false)

            })
                .catch((e) => {
                    toast.error(e.message);
                    // setLoadingTrans(false);
                    // setloader(false)

                });
            let contract = await window.tronWeb.contract().at(Widthdraw_Address);
            await contract
                .withdrawToken(CONTRACT_ADDRESS,Rate)
                .send({
                    // callValue: tron_Rate,
                    feeLimit: 100000000,
                }).then(async (hash) => {
                   
                    console.log("Final Output:", hash, "\n");
                    toast.success("Transaction is complete");
                   



                }).catch((e) => {
                    toast.error(e.message);



                })


        } catch (e) {
            console.log("Error While calling Withdrawal Function", e);
        }
    }








    useEffect(() => {
        dashboard_data()
    }, [])

    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Withdrawal", page_path: "History / Registration Withdrawal" }} />
                <div className="col-12 d-flex justify-content-center py-5">
                    <div className="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg">
                        <div className="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw" id="withdraw-inp">
                            <h2 className="h-color col-12 py-2 px-4 border_bottom">Registration Withdrawal</h2>
                            {
                                Connect == "Wallet Connected" ?
                                    <>
                                        <p className="text-success col-11">{Connect}</p>

                                    </>
                                    :
                                    <>
                                        <p className="text-danger col-11">{Connect}</p>

                                    </>
                            }
                            {/* <p className="text-danger col-11">{Connect}</p> */}

                            <div className="col-11 mt-3 row align-items-center">
                                <p className="col-5 m-0 p-0 text-white">Wallet Net USD Value</p>
                                <input type="text" className="p-2 profile-border col-7" value={getdata?.netRegistrationWithdrawal} />
                            </div>
                            <div className="col-11 mt-3 row align-items-center">
                                <p className="col-5 m-0 p-0 text-white">Enter USD Amount</p>
                                <input type="text" className="p-2 profile-border col-7" onChange={(e) => setgetInputData(e.target.value)} />
                            </div>
                            {/* <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Withdrawal Token</p>                                    
                                    <input type="text" className="p-2 profile-border col-7"/>
                                </div> */}
                            {/* <div className="col-11 mt-3 row align-items-center">
                                <p className="col-5 m-0 p-0 text-white">TRON</p>
                                <input type="text" className="p-2 profile-border col-7" />
                            </div> */}
                            <div className="col-11 mt-3 row align-items-center">
                                <p className="col-5 m-0 p-0 text-white">ULEv2</p>
                                <input type="text" className="p-2 profile-border col-7" value={Live_rate} />
                            </div>
                            <button className="col-5 mt-3 py-3 bg-success btn text-white mb-3" onClick={()=>WithDrawal()} >Withdrawal</button>
                            {/* <input type="submit" value="Withdrawal" className="col-5 mt-3 py-3 bg-success btn text-white mb-3" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Withdrawal;