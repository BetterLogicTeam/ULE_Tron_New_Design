import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
import axios from "axios";

const Level_Details = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [filterValue, setFilterValue] = useState(0);
    const [FilterRight, setFilterRight] = useState(2)

    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;

            let responce = await API?.post('/levelDetails', {
                "id": uId,
                "level": filterValue,
                "status": FilterRight
            })

            responce = responce?.data?.data;

            let arr = []
            responce?.forEach((item, index) => {
                arr?.push({
                    sr: index + 1,
                    user_id: `${item?.uid} `,
                    level: item.leveltype,
                    package: `$ ${item?.packageamount} `,
                    id_type: (<>{item.top_update == "" ? (<>InActive</>) : (<>Active</>)}</>),
                    activation_date: item.top_update ? item.top_update : "Null",
                    reg_date: item.edate || "",
                })
            })

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [level_details, set_level_details] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Level', accessor: 'level' },
            { Header: 'Reg.Date & Time', accessor: 'reg_date' },
            { Header: 'Activation Date & Time', accessor: 'activation_date' },
            { Header: 'ID Type', accessor: 'id_type' },
            { Header: 'Package', accessor: 'package' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Level Details", page_path: "Team Details / Level Details" }} />
                <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-4  col-8 select-choi select-val" id="select-level-details">
                        <p className="p-color p-0 m-0">Select Level</p>
                        <select className=" input bg-color ps-4" defaultValue={filterValue}
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="0">All Levels</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                            <option value="6">Level 6</option>
                            <option value="7">Level 7</option>
                            <option value="8">Level 8</option>
                            <option value="9">Level 9</option>
                            <option value="10">Level 10</option>
                            <option value="11">Level 11</option>
                            <option value="12">Level 12</option>
                            <option value="13">Level 13</option>
                            <option value="14">Level 14</option>
                            <option value="15">Level 15</option>
                            <option value="16">Level 16</option>
                            <option value="17">Level 17</option>
                            <option value="18">Level 18</option>
                            <option value="19">Level 19</option>
                            <option value="20">Level 20</option>
                        </select>
                    </div>
                    <div className="col-md-4  col-8 mt-n5 select-choi select-val">
                        <p className="p-color p-0 m-0" >Choose Status :</p>
                        <select className=" input bg-color ps-4"
                            defaultValue={FilterRight}
                            value={FilterRight}
                            onChange={(e) => setFilterRight(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    {/* <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4"
                         value={filterDate}
                         onChange={(e) => setfilterDate(e.target.value)}
                        />
                    </div> */}

                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white" onClick={() => referral_API()}>Search</button>
                </div>
                <Table
                    data={currentPost}
                    columns={level_details.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
            </div>
        </div>
    );
}

export default Level_Details;