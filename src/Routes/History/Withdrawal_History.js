import axios from "axios";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from "../../Redux/actions/API";

const Withdrawal_History = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)





    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;//778899;

            let responce = await API?.get(`/withdrawalHistory?id=${uId}`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    user_id: item.uid,
                    withdrawal_token: `${item?.request_amount} `,
                    txn: `${item?.txn}  `,
                    paid_date: `${item?.tdate} `,


                });



            }
            )
            // console.log("responce", arr);


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


    var [withdrawal_history, set_withdrawal_history] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User Id', accessor: 'user_id' },
            { Header: 'Withdrawal', accessor: 'withdrawal_token' },
            // { Header: 'Tron', accessor: 'TRON' },
            { Header: 'ULEv2', accessor: 'ULEv2' },
            { Header: 'TXN', accessor: 'txn' },
            { Header: 'Paid Date & Time', accessor: 'paid_date' }],
        rows: [
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Registration Withdrawal History", page_path: "History / Registration Withdrawal History" }} />
                <Table
                    data={currentPost}
                    columns={withdrawal_history.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Withdrawal_History;