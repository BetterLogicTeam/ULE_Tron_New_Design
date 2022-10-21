import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyReferralReport } from "../../Redux/actions/dailyYield";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import './MyTeam.css';
import './My_Referral.css'
import moment from "moment";

const My_Referral = () => {

    // const [referralApi, setreferralApi] = useState([])
    const [leftreferralApi, setleftreferralApi] = useState([])
    const [RightreferralApi, setRightreferralApi] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [getuerid, setgetuerid] = useState("")
    const [filterValue, setFilterValue] = useState("")

    const [FilterRight, setFilterRight] = useState(2)
    const [position_select, setposition_select] = useState(0)
    const [fdate, setFdate] = useState('')
    const [tdate, setTdate] = useState('')



    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;


            let responseLeft = await API?.post('/directDetails', {
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
                    sr: `${item.RowNumber}`,
                    id: `${item?.uid} `,
                    date_time: `${item?.edate} `,
                    remark: `${item.remark}`,
                    activation_date: item.top_update == null ? "Null" : item.top_update,
                    staking: `$ ${item?.packagename} `,
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

    //console.log("FilterRight", FilterRight);
    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPostLeft = leftreferralApi.slice(indexOfFirstPage, indexOfLastPost)

    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPostRight = RightreferralApi.slice(indexOfFirstPage2, indexOfLastPost2)


    var [my_team, set_my_team] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Reg. Date & Time', accessor: 'date_time' },
            { Header: 'Position', accessor: 'Position' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date & Time ', accessor: 'activation_date' },
            { Header: 'Package', accessor: 'staking' },
        ]
    });
    return (

        <div className="row justify-content-center col-md-11">
            <PagePath data={{ page_name: "My Referral", page_path: "Team Details / My Referral" }} />

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

        </div>




    );
}


export default My_Referral;