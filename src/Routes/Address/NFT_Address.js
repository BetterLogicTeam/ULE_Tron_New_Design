import {PagePath} from "../../Components";

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:" Address",page_path:"Address /  Address"}} />   
                <h5 className="text-white mt-5"> Address : { (<a href={`https://tronscan.org/#/contract/TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse`} className="Txn_here" target="_blank">{"TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
     );
}
 
export default Coin_Address;