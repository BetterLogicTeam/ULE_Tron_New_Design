import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Activation_reward = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;

            let responce = await API?.get(`activationReward?id=${uId}`);
            responce = responce?.data?.data;
            console.log("Activation_reward", responce);

            setreferralApi(responce)
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


    var [matching_income, set_matching_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'RowNumber' },
            { Header: 'From Id', accessor: 'fromid' },
            { Header: 'Net Income', accessor: 'incomes' },
            { Header: 'Level', accessor: 'lvl' },
            { Header: 'Date & Time', accessor: 'dd' }
        ]
    });

    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Activation Reward", page_path: "All Income / Activation Reward" }} />
                <Table
                    data={[...currentPost]}
                    columns={matching_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Activation_reward;