import { API } from '../../Redux/actions/API'
import { useEffect, useState } from 'react'
import { PagePath, Table, Table_Buttons } from "../../Components";

const RegistrationHistory = () => {
    const user = localStorage.getItem("user");
    let ress = JSON?.parse(user);
    let uid = ress?.uid;
    const [registrationHistory_API, setRegistrationHistory_API] = useState([]);

    const registrationHistoryAPI = async () => {
        try {
            let response = await API.get(`registrationHistory?id=${uid}`)
            response = response?.data?.data;

            let arr = [];
            response.forEach((item, index) => {
                arr.push({
                    row: item.row,
                    uid: item.uid,
                    password: item.password,
                    confirm_date: item.confirm_date,
                    txn: <a href={`https://tronscan.org/#/transaction/${item.txn}`} target="_blank"> View TXN</a >,
                    amount: `${item.amount} USD`
                })
            })

            setRegistrationHistory_API(arr);
        } catch (error) {
            console.log("Error While calling reward income API", error)
        }

    }

    useEffect(() => {
        registrationHistoryAPI();
    }, [])

    console.warn("wwww=> ", registrationHistory_API)

    var [reward_income, set_reward_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'User Id', accessor: 'uid' },
            { Header: 'Wallet Address', accessor: 'password' },
            { Header: 'Reg. Date & Time', accessor: 'confirm_date' },
            //{ Header: 'Confirm Date & Time', accessor: 'reg_date' },
            { Header: 'Txn', accessor: 'txn' },
            { Header: 'Amount', accessor: 'amount' },
        ]
    });

    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Registration History", page_path: "Activation / Registration History" }} />
                <Table
                    data={[...registrationHistory_API]}
                    columns={reward_income.cols}
                />
            </div>
        </div>
    );
}

export default RegistrationHistory