import React from "react";
import "../Registration/Registration.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/actions/Login";
import Web3 from "web3";
import Confirm from "./confirm";
// import moment from "moment";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import TronWeb from "tronweb";
import "./Login.css"
import Login_modal from "../../Components/Login_modal/Login_modal";

var interv = null;

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleLogin = async () => {
    console.log("Inputdata_login", inputValue);
    let res = await dispatch(loginAction(inputValue));
    console.log("LOgin_Api_Res", res);
    if (res) {
      // setTimeout(() => {


      history("/dashboard");
      // }, 1);
      // window.location.reload()
    } else {
      toast.error("Something went wrong ! ");
    }
  };

  const [account, setAccount] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  // setRegistered ,handleLogin
  const [chainId, setChainId] = useState(null);
  let mainAccount = "";
  async function tronConnect() {

    try {
      console.log("initial");
      mainAccount = await window?.tronWeb?.defaultAddress?.base58;
      console.log("main Account", mainAccount);

      if (mainAccount) {
        setAccount(mainAccount);
        let respon = await dispatch(loginAction(mainAccount));

        // setTimeout(() => {
        if (respon) {
          history("/dashboard");
          // setloader(false)
  
          // window.location.reload()
        }
        localStorage.setItem("mainAccount", mainAccount);
        console.log("mainAccount", mainAccount);
        setTimeout(() => {
          // getBalanceOfAccount();
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
      }
    } catch (error) {
      toast.error(error.message);

      console.log("error", error.message);
    }
  }

  const Auto_login=async()=>{
    try{

      console.log("LOgin_Api_Res");
      let respon = await dispatch(loginAction(account));

      // setTimeout(() => {
      if (respon) {
        history("/dashboard");
        // setloader(false)

        // window.location.reload()
      }

    }catch(e){
      console.log("Error While calling Login Api",e);
    }
  }



  useEffect(() => {
    setTimeout(() => {

      tronConnect()
    }, 100);
    return () => {

      if (interv) {
        clearInterval(interv);
      }
    };
  }, []);

  return (
    <div>
    
      <div className="container-fluid login_main">
        {openLogin && <Confirm handleLogin={handleLogin} setRegistered={setOpenLogin} />}

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="login_card">
              <img src="logo2.png " alt="" className="w-50" />
              <h2><a className="login_head text-white">Login</a></h2>
              <div className="login_link text-white">Automatic login if you have Tron wallet:</div>
              {/* <span className="tron_heading">Tron is not connected..!..Wait...</span> */}
              {account === null ? (
                        <span id="metamaskConnections" style={{ color: "red" }}>
                          Tron is not connected..!..Wait...
                        </span>
                      ):
                      (
                        <span id="metamaskConnections" style={{ color: "green" }}>
                        Tron is  connected..!
                      </span>
                      )
                    
                    }
              <button className="login_btn btn_hover" onClick={()=>Auto_login()}>Automatic Sign up</button>
              <form action="#">
                <input type="text" className="login_btn" placeholder="Please enter ID or Tron address " onChange={handleChangeInput}
                  value={inputValue} />
                <button className="login_btn btn_hover" onClick={() => setOpenLogin(true)}>Login</button>

                {/* <button className="login_btn"  onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>

      <Login_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      <Link to="/">                <button type="text" className="login_btn btn_hover"  >Go To Home</button></Link>

              </form>

            </div>


          </div>
        </div>
      </div>




    </div>
  );
}

export default Login;
