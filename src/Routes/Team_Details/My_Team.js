import moment from "moment";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import Copy_To_Clipboard from "./Copy_To_Clipboard";
import './MyTeam.css'


const My_Team = () => {


    // const [referralApi, setreferralApi] = useState([])
    const [leftreferralApi, setleftreferralApi] = useState([])
    const [RightreferralApi, setRightreferralApi] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [getuerid, setgetuerid] = useState("")
    const [filterValue, setFilterValue] = useState("");
    const [FilterRight, setFilterRight] = useState(2)
    const [position_select, setposition_select] = useState(0)
    const [fdate, setFdate] = useState('')
    const [tdate, setTdate] = useState('')
    const [copyTest, setcopyTest] = useState(false)

    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;

            let responseLeft = await API?.post('/downlineDetails', {
                "id": uId,
                "position": position_select,
                "status": FilterRight,
                "fdate": fdate,
                "tdate": tdate
            })
            responseLeft = responseLeft?.data?.data;
            console.log("responseLeft", responseLeft);

            let arrayLeft = []
            responseLeft.forEach((item, index) => {
                arrayLeft?.push({
                    sr: index + 1,
                    id: `${item?.uid} `,
                    Wallet: <><input id="myInput" value={item?.user_id} onClick={() => myFunction()} /></>,

                    date_time: `${item?.edate} `,
                    remark: item.status,
                    activation_date: item.top_update == null ? 'Null' : item.top_update,
                    staking: item.packagename == "" ? 'null' : `$ ${item.packagename}`,
                    Position: item?.position
                });
            })
            setleftreferralApi(arrayLeft)
        }
        catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }



    useEffect(() => {
        referral_API()
    }, [FilterRight, position_select])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPostLeft = leftreferralApi.slice(indexOfFirstPage, indexOfLastPost)

    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPostRight = RightreferralApi.slice(indexOfFirstPage2, indexOfLastPost2)


    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("myInput");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        setcopyTest(true)
        // Alert the copied text
        //   alert("Copied the text: " + copyText.value);
    }

    var [my_team, set_my_team] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Wallet', accessor: 'Wallet' },
            { Header: 'Position', accessor: 'Position' },
            { Header: 'Reg. Date & Time', accessor: 'date_time' },

            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date & Time ', accessor: 'activation_date' },
            { Header: 'Package', accessor: 'staking' },
        ]
    });


    useEffect(() => {
        copyTest ? toast.success("Copied") : <></>
        setTimeout(() => {
            setcopyTest(false)
        }, 10);
    }, [copyTest])
    return (
        // <div className="container">
        <div className="row justify-content-center team-dis col-md-11">
            <PagePath data={{ page_name: "My Team", page_path: "Team Details / My Team" }} />
            <div className="col-md-12 py-3 mt-5">

                <div class="row" style={{ marginLeft: "10px" }}>
                    <div class="col-md-2">
                        <label>Choose Status</label>
                        <select class="form-control" id="level" defaultValue={FilterRight}
                            value={FilterRight} onChange={(e) => setFilterRight(e.target.value)} >
                            <option value="">Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>

                        </select>
                    </div>
                    <div class="col-md-2">
                        <label>Position</label>
                        <select class="form-control" id="level" defaultValue={position_select}
                            value={position_select} onChange={(e) => setposition_select(e.target.value)} >
                            <option value="">Select Position</option>
                            <option value="0">All</option>
                            <option value="1">Left</option>
                            <option value="2">Right</option>

                        </select>
                    </div>
                    <div class="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" class="form-control" onChange={(e) => setFdate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" class="form-control" onChange={(e) => setTdate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-1">
                        <input type="button" name="btnsubmit" value="Search" class="btn btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div>
                <Table
                    data={currentPostLeft}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={leftreferralApi.length} listPerpage={listPerpage} />

            </div>
            {/* <div className="col-md-6 py-3 mt-5">

            <div className="col-md-12">
                <h1 className="mb-0 fs-3 pe-4 border_right p-color">Right</h1>

                </div>
                <br/>

                <div className="row">

                <div className="col-md-3">
                        <p className="p-color mt-1" >Choose Status :</p>

                        </div>
                    <div className="col-md-5">
                        <select className=" input bg-color ps-4" id="input-select"
                            defaultValue={filterValue}
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="">Select Status</option>

                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>

                        </select>

                    </div>
                </div>



                <Table
                    data={currentPostRight}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={RightreferralApi.length} listPerpage={listPerpage2} />

            </div> */}
        </div>

        // </div>
    );
}

export default My_Team;