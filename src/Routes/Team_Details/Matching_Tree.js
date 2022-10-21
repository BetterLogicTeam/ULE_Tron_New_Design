import React, { useEffect, useState } from "react";
import { PagePath } from "../../Components";
import user3red from '../../assets/red-icon.png'
import treeimg1 from '../../assets/treeimg1new.png'
import Default from '../../assets/defaultnew.png'
import treeimg2 from '../../assets/treeimg2new.png'
import Active from '../../assets/user3green.png'
import './MyTeam.css'
import treeimg from '../../assets/treeimgnew.png'
import { API } from '../../Redux/actions/API'
import { ListItemSecondaryAction } from "@material-ui/core";
import Spinner from '../../Components/Spinner/Spinner'
import { toast } from "react-toastify";
let gobackClicked = false;
let bol = true;
const Matching_Tree = () => {
    const user = localStorage?.getItem("user");
    let ress = JSON?.parse(user);
    let uId = ress?.uid;//778899;

    const [Idnumber, setIdnumber] = useState(uId)
    const [loader, setloader] = useState(false)
    const [arrValue, setArrValue] = useState([])
    const [getValue, setgetValue] = useState("")

    function addValue(value) {

        if (arrValue.indexOf(value) === -1) {
            console.log('ArrValue:', arrValue)

            setArrValue([...arrValue, value])
        }


        // setArrValue([...arrValue,value])
        // arrValue.push(value)
        // arrValue.push(value)
    }
    function popoutvalue() {
        if (arrValue.length == 1 || arrValue.length == 0) {
            arrValue.pop()
            arrValue.unshift(userdata[0].id)
            gobackClicked = true;
            console.log('ArrValue:', arrValue)
        }
        else {
            let a = arrValue.splice(arrValue.length - 2, 1);
            setIdnumber(a[0]);
            console.log('ArrValue:', arrValue)

            console.log('what is popout value', a[0])
            gobackClicked = true;

        }

    }

    const [userdata, setuserdata] = useState(
        [
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '0',
                right_business: '',
                sponser: ''

            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
        ]

    )

    const referral_API = async () => {

        setloader(true)
        try {

            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;
            // let status = ress?.status
            if (Idnumber == uId || gobackClicked == true) {
                let responce = await API?.post('/binary_tree', {
                    "uid": Idnumber,
                    "usersession_uid": uId
                })
                responce = responce?.data?.data?.recordset;
                console.log("responce",responce);
                if (responce == undefined) {
                    toast.error("User ID Not Found")
                    setloader(false)


                } else {

                    setuserdata([
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '0',
                            right_business: '',
                            sponser: ''

                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                        {
                            name: '',
                            id: '',
                            registration_date: '',
                            status: '',
                            total_left: '',
                            total_left_active: '',
                            left_business: '',
                            package_amount: '',
                            topup_date: '',
                            package: '',
                            total_right: '',
                            total_right_active: '',
                            right_business: '',
                            sponser: ''
                        },
                    ])
                    console.log("Res_API", responce);
                    let arr = []
                    responce?.forEach((item, index) => {

                        arr?.push({
                            name: item.fname,
                            id: item.uid,
                            registration_date: item.regidate,
                            status: item.activationdate ? 'Active' : 'InActive',
                            total_left: item.totalleftActive,
                            total_left_active: item.totalleft,
                            left_business: `$ ${item.lbv}` ,
                            package_amount: item.packageamount,
                            topup_date: item.activationdate,
                            package: item.package,
                            total_right: item.totalrightActive,
                            total_right_active: item.totalright,
                            right_business: `$ ${item.rbv}`,
                            sponser: item.sid
                            // date: item?.dd
                        });



                    }
                    )
                    console.log("responce", arr);


                    setuserdata(arr)
                    if (bol) {
                        setArrValue([...arrValue, arr[0].id])
                        bol = false;
                    }
                    gobackClicked = false;
                }
            }
            else {
                console.log('ARrValue', arrValue)
                userdata.map(async user => {
                    if (user.id == Idnumber) {
                        addValue(Idnumber)
                        let responce = await API?.post('/binary_tree', {
                            "uid": Idnumber,
                            "usersession_uid": uId
                        })
                        responce = responce?.data?.data?.recordset;

                        setuserdata([
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '0',
                                right_business: '',
                                sponser: ''

                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                            {
                                name: '',
                                id: '',
                                registration_date: '',
                                status: '',
                                total_left: '',
                                total_left_active: '',
                                left_business: '',
                                package_amount: '',
                                topup_date: '',
                                package: '',
                                total_right: '',
                                total_right_active: '',
                                right_business: '',
                                sponser: ''
                            },
                        ])
                        console.log("Res_API", responce);
                        let arr = []
                        responce?.forEach((item, index) => {

                            arr?.push({
                                name: item.fname,
                                id: item.uid,
                                registration_date: item.regidate,
                                status: item.activationdate ? 'Active' : 'InActive',
                                total_left: item.totalleftActive,
                                total_left_active: item.totalleft,
                                left_business: item.lbv,
                                package_amount: item.packageamount,
                                topup_date: item.activationdate,
                                package: item.package,
                                total_right: item.totalrightActive,
                                total_right_active: item.totalright,
                                right_business: item.rbv,
                                sponser: item.sid
                                // date: item?.dd
                            });



                        }
                        )
                        console.log("responce", arr);


                        setuserdata(arr)
                        if (bol) {
                            setArrValue([...arrValue, arr[0].id])
                            bol = false;
                        }
                    }
                })
            }





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
        setloader(false)

    }

    const onhover = (x) => {

        let team_info_div_data = document.querySelectorAll('.team-info p')

        let team_info_div = document.querySelector('.team-info');

        let user_img = document.querySelectorAll('.user-img');
        let sponser = document.querySelector('.sponser');
        console.log("Data", userdata[x].sponser);
        team_info_div_data[0].innerHTML += userdata[x].registration_date;
        team_info_div_data[1].innerHTML += userdata[x].status;
        team_info_div_data[2].innerHTML += userdata[x].total_left;
        team_info_div_data[3].innerHTML += userdata[x].total_left_active;
        team_info_div_data[4].innerHTML += userdata[x].left_business;
        team_info_div_data[5].innerHTML += userdata[x].package_amount;
        team_info_div_data[6].innerHTML += userdata[x].topup_date;
        team_info_div_data[7].innerHTML += userdata[x].package;
        team_info_div_data[8].innerHTML += userdata[x].total_right;
        team_info_div_data[9].innerHTML += userdata[x].total_right_active;
        team_info_div_data[10].innerHTML += userdata[x].right_business;
        sponser.innerHTML += userdata[x].sponser;

        team_info_div.classList.remove('d-none');
        // team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top - 300}px; left:${(user_img[x].getBoundingClientRect().x + (user_img[x].getBoundingClientRect().width / 2)) - (team_info_div.getBoundingClientRect().width / 2)}px !important ;`);
        team_info_div.setAttribute('style', `top:-50px !important ;`);

    }
    const onhoverout = () => {
        let team_info_div_data = document.querySelectorAll('.team-info p')
        let sponser = document.querySelector('.sponser');
        let team_info_div = document.querySelector('.team-info');


        team_info_div_data[0].innerHTML = 'Reg. Date & Time :';
        team_info_div_data[1].innerHTML = 'Status :';
        team_info_div_data[2].innerHTML = 'Total Left :';
        team_info_div_data[3].innerHTML = 'Total Left Active :';
        team_info_div_data[4].innerHTML = 'Left Business :';
        team_info_div_data[5].innerHTML = 'Package Amount :';
        team_info_div_data[6].innerHTML = 'Activation Date & Time: ';
        team_info_div_data[7].innerHTML = 'Package : ';
        team_info_div_data[8].innerHTML = 'Total Right : ';
        team_info_div_data[9].innerHTML = 'Total Right Active : ';
        team_info_div_data[10].innerHTML = 'Right Business : ';
        team_info_div.classList.add('d-none');
        sponser.innerHTML = "Sponser : ";

    }
    useEffect(() => {
        referral_API()
    }, [Idnumber])



    console.log("Idnumber", Idnumber);

    return (
        <div className="row justify-content-center">
            {loader == true ? <Spinner /> : <></>}
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matching Tree", page_path: "Team Details / Matching Tree" }} />
                <div className="col-12 row justify-content-center py-5">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-wrapper">
                                <input type="text" className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-4 col-xl-6" Value={Idnumber} onChange={(e) => setgetValue(e.target.value)} />
                                <button className="btn btn-success col-7 col-md-4 col-lg-3 col-xl-2" onClick={() => setIdnumber(getValue)}>Submit</button>
                                <button className="ms-md-3 btn btn-danger col-7 col-md-6 col-lg-3 col-xl-2" onClick={() => popoutvalue()}>Go Back</button>


                                {/* <!-- <button id="#home"  type="button" class="btn btn-sm btn-danger topmargin float_rt">Home</button> --> */}
                                {/* <button onclick="goBack()" type="button" class="btn btn-sm btn-danger topmargin float_rt">Go BACK</button> */}
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="tree_icon">
                                <div class="tree_name">
                                    <img src={Active} width="40px" height="40px" />
                                    Active
                                </div>
                                <div class="tree_name">
                                    <img src={user3red} width="40px" height="40px" />
                                    In-Active
                                </div>
                                <div class="tree_name">
                                    <img src={Default} width="40px" height="40px" />
                                    Not Registered
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <div className="col-md-4 col-10 gy-2 py-2 col-lg-5 row profile-border justify-content-center align-items-center profile-login">
                        <input type="text" className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-4 col-xl-6"  value={Idnumber}  onChange={(e) => setIddnumber(e.target.value)} />
                        <button className="btn btn-success col-7 col-md-4 col-lg-3 col-xl-2" onClick={() => setIdnumber(Iddnumber)}>Submit</button>
                        <button className="ms-md-3 btn btn-danger col-7 col-md-6 col-lg-3 col-xl-2" onClick={popoutvalue}>Go Back</button>
                    </div> */}
                    <div className="tree container align-items-center d-flex mt-5 flex-column text-white text-center">

                        {userdata[0].package >= 1 ? (<img src={Active} className="user-img"
                            onMouseOver={() => { onhover(0) }}
                            onMouseOut={() => { onhoverout() }} onClick={() => setIdnumber(userdata[0].id)} />) :
                            userdata[0].package == 0 ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(0) }} onMouseOut={() => { onhoverout() }} onClick={() => {
                                setIdnumber(userdata[0].id);
                                addValue(userdata[0].id)
                            }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(0) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[0].id); addValue(userdata[0].id) }} />)}


                        <p className="m-0 p-0">{userdata[0].name}</p>
                        <p className="m-0 p-0">{userdata[0].id}</p>
                        <img src={treeimg} className="treeimg" />
                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[1].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(1) }}
                                    onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[1].id); addValue(userdata[1].id) }} />)
                                    : (userdata[1].package == 0) && (userdata[1].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(1) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[1].id); addValue(userdata[1].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(1) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[1].id); addValue(userdata[1].id) }} />)}



                                <p className="m-0 p-0">{userdata[1].name}</p>
                                <p className="m-0 p-0">{userdata[1].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                            <div style={{ width: '170px' }} className="gap-img-1">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[2].package >= 1 ?
                                    (<img src={Active} className="user-img"
                                        onMouseOver={() => { onhover(2) }} onMouseOut={() => { onhoverout() }}
                                        onClick={() => { setIdnumber(userdata[2].id); addValue(userdata[2].id) }} />) :
                                    (userdata[2].package == 0) && (userdata[2].id != "") ?
                                        (<img src={user3red} className="user-img" onMouseOver={() => { onhover(2) }}
                                            onMouseOut={() => { onhoverout() }}
                                            onClick={() => { setIdnumber(userdata[2].id); addValue(userdata[2].id) }} />) :
                                        (<img src={Default} className="user-img" onMouseOver={() => { onhover(2) }}
                                            onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[2].id); addValue(userdata[2].id) }} />)}


                                <p className="m-0 p-0">{userdata[2].name}</p>
                                <p className="m-0 p-0">{userdata[2].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={Default} className="user-img" /> */}
                                {userdata[3].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(3) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[3].id); addValue(userdata[3].id) }} />) :
                                    (userdata[3].package == 0) && (userdata[3].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(3) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[3].id); addValue(userdata[3].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(3) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[3].id); addValue(userdata[3].id) }} />)}


                                <p className="m-0 p-0">{userdata[3].name}</p>
                                <p className="m-0 p-0">{userdata[3].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[4].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(4) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[4].id); addValue(userdata[1].id) }} />) :
                                    (userdata[3].package == 0) && (userdata[4].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(3) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[3].id); addValue(userdata[1].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(4) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[4].id); addValue(userdata[4].id) }} />)}


                                <p className="m-0 p-0">{userdata[4].name}</p>
                                <p className="m-0 p-0">{userdata[4].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[5].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(5) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[5].id); addValue(userdata[5].id) }} />) :
                                    (userdata[5].package == 0) && (userdata[5].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(5) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[5].id); addValue(userdata[5].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(5) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[5].id); addValue(userdata[5].id) }} />)}
                                <p className="m-0 p-0">{userdata[5].name}</p>
                                <p className="m-0 p-0">{userdata[5].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2" >
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[6].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(6) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[6].id); addValue(userdata[6].id) }} />) :
                                    (userdata[6].package == 0) && (userdata[6].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(6) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[6].id); addValue(userdata[6].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(6) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[6].id); addValue(userdata[6].id) }} />)}

                                <p className="m-0 p-0">{userdata[6].name}</p>
                                <p className="m-0 p-0">{userdata[6].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}

                                {userdata[7].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(7) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[7].id); addValue(userdata[7].id) }} />) :
                                    (userdata[7].package == 0) && (userdata[7].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(7) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[7].id); addValue(userdata[7].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(7) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[7].id); addValue(userdata[7].id) }} />)}


                                <p className="m-0 p-0">{userdata[7].name}</p>
                                <p className="m-0 p-0">{userdata[7].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[8].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(8) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[8].id); addValue(userdata[8].id) }} />) :
                                    (userdata[8].package == 0) && (userdata[8].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(8) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[8].id); addValue(userdata[8].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(8) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[8].id); addValue(userdata[8].id) }} />)}


                                <p className="m-0 p-0">{userdata[8].name}</p>
                                <p className="m-0 p-0">{userdata[8].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {/* {userdata[9].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[9].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(9) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[9].id); addValue(userdata[9].id) }} />) :
                                    (userdata[9].package == 0) && (userdata[9].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(9) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[9].id); addValue(userdata[9].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(9) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[9].id); addValue(userdata[9].id) }} />)}


                                <p className="m-0 p-0">{userdata[9].name}</p>
                                <p className="m-0 p-0">{userdata[9].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[10].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(10) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[10].id); addValue(userdata[10].id) }} />) :
                                    (userdata[10].package == 0) && (userdata[10].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(10) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[10].id); addValue(userdata[10].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(10) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[10].id); addValue(userdata[10].id) }} />)}


                                <p className="m-0 p-0">{userdata[10].name}</p>
                                <p className="m-0 p-0">{userdata[10].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[11].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(11) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[11].id); addValue(userdata[11].id) }} />) :
                                    (userdata[11].package == 0) && (userdata[11].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(11) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[11].id); addValue(userdata[11].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(11) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[11].id); addValue(userdata[11].id) }} />)}


                                <p className="m-0 p-0">{userdata[11].name}</p>
                                <p className="m-0 p-0">{userdata[11].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[12].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(12) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[12].id); addValue(userdata[12].id) }} />) :
                                    (userdata[12].package == 0) && (userdata[12].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(12) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[12].id); addValue(userdata[12].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(12) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[12].id); addValue(userdata[12].id) }} />)}


                                <p className="m-0 p-0">{userdata[12].name}</p>
                                <p className="m-0 p-0">{userdata[12].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* {userdata[13].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[13].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(13) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[13].id); addValue(userdata[13].id) }} />) :
                                    (userdata[13].package == 0) && (userdata[13].id != "") ? (<img src={user3red} className="user-img" onMouseOver={() => { onhover(13) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[13].id); addValue(userdata[13].id) }} />) : (<img src={Default} className="user-img" onMouseOver={() => { onhover(13) }} onMouseOut={() => { onhoverout() }} onClick={() => { setIdnumber(userdata[13].id); addValue(userdata[13].id) }} />)}


                                {console.log("userdata[13]", userdata[14].name)}
                                <p className="m-0 p-0">{userdata[13].name}</p>
                                <p className="m-0 p-0">{userdata[13].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[14].package >= 1 ? (<img src={Active} className="user-img"
                                    onMouseOver={() => { onhover(14) }} onMouseOut={() => { onhoverout() }}
                                    onClick={() => { setIdnumber(userdata[14].id); addValue(userdata[14].id) }} />) :
                                    (userdata[14].package == 0) && (userdata[14].id != "") ? (<img src={user3red} className="user-img"
                                        onMouseOver={() => { onhover(14) }} onMouseOut={() => { onhoverout() }}
                                        onClick={() => { setIdnumber(userdata[14].id); addValue(userdata[14].id) }} />) :
                                        (<img src={Default} className="user-img" onMouseOver={() => { onhover(14) }}
                                            onMouseOut={() => { onhoverout() }}
                                            onClick={() => { setIdnumber(userdata[14].id); addValue(userdata[14].id) }} />)}


                                <p className="m-0 p-0">{userdata[14].name}</p>
                                <p className="m-0 p-0">{userdata[14].id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-info d-none  text-white col-10 col-lg-6 col-md-7 col-xl-4 col-xxl-3 px-2 py-3 br-1"
                    // onMouseEnter={()=>{mouseStatus = 'in'}} onMouseLeave={()=>{
                    //     mouseStatus = 'out'
                    //     onhoverout()
                    // }}
                    >
                        <h6 className="border_bottom m-0 sponser">Sposer:</h6>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div className="d-flex flex-column pt-2 align-items-start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Reg. Date & Time :</p>
                                <p className=" m-0 p-1">Status :</p>
                                <p className="bg-b m-0 p-1">Total Left :</p>
                                <p className=" m-0 p-1">Total Left Active :</p>
                                <p className="bg-b m-0 p-1">Left Business :</p>
                                <p className=" m-0 p-1">Package Amount :</p>
                            </div>
                            <div className="d-flex flex-column pt-2 align-items-start border_start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Activation Date & Time: </p>
                                <p className=" m-0 p-1">Package : </p>
                                <p className="bg-b m-0 p-1">Total Right : </p>
                                <p className=" m-0 p-1">Total Right Active : </p>
                                <p className="bg-b m-0 p-1">Right Business : </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matching_Tree;













