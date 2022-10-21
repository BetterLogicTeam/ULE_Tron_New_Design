import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { Routes, Route, Link, useNavigate, Outlet, NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png'

import { FaLock } from 'react-icons/fa'
import { Activate_History, Buy_NFT, Coin_Address, Direct_Leg_Business, Home, Level_Details, Matching_Income, Matching_Level_Income, Matching_Tree, My_Referral, My_Team, NFT_Address, Profile, Referral_Income, Reward_Income, Roi_Income, Self_Address, Staking_Details, Withdrawal, Withdrawal_History } from '../../Routes';
import Change_Password from '../../Components/Change_password/Change_Password';

import Forgat_Password from '../../Components/Forgat_Password/Forgat_Password';
import ChangePasswor_eamil from '../../Components/Change_password/ChangePasswor_eamil';
import Varify_email_change_password from '../../Components/Change_password/Varify_email_change_password';
import Update_profile_email from '../../Routes/Activation/Update_profile_email';
import { Activate } from '../../Routes/Activation/Activation';
import logo from '../../assets/logo.png'
import id_red from '../../assets/id_red.png'
import id_green from '../../assets/id_green.png'
import profile from '../../assets/profile.png'
import { API } from '../../Redux/actions/API';
import { $ } from 'jquery'
import REG_History from '../../Routes/History/REG_History';





const Navbar = () => {
    const [packegeid, setpackegeid] = useState(0)


    const user = localStorage.getItem("user");
    let ress = JSON?.parse(user);
    let uId = ress?.uid;//778899;
    const history = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("user", null);
        history("/");
        window.location.reload();
    };

    const dashbord = async () => {
        let res = await API.get(`/get_betawallet?id=${uId}`)
        res = res.data.data[0]
        setpackegeid(res.package)

    }

    // const onClick_DNone = () => {
    //     let expand_list_MD = document.querySelectorAll('.expand-nav');
    //     for (let y = 0; y < 6; y++) {
    //         expand_list_MD[y].classList.forEach((class_item) => {
    //             if (class_item == 'd-flex') {
    //                 expand_list_MD[y].classList.remove('d-flex');
    //                 expand_list_MD[y].classList.add('d-none');
    //             }
    //         })
    //     }
    // }
    // const sm_nav_dnone = () => {
    //     let nav_panel = document.querySelector('.nav-panel')
    //     if (nav_panel.classList.contains('d-none')) {
    //         nav_panel.classList.remove('d-none');
    //         nav_panel.classList.add('d-flex');
    //     }
    //     else {
    //         nav_panel.classList.remove('d-flex');
    //         nav_panel.classList.add('d-none');
    //     }
    // }
    // React.useEffect(() => {

    //     let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
    //     let nav_btn = document.querySelector('.nav-btn');
    //     let nav_panel = document.querySelector('.nav-panel')
    //     let expand_list = document.querySelectorAll('.expand-nav');
    //     let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
    //     nav_btn.addEventListener('click', () => {
    //         console.log('NAv Clicked');
    //         if (nav_panel.classList.contains('d-none')) {
    //             nav_panel.classList.remove('d-none');
    //             nav_panel.classList.add('d-flex');
    //         }
    //         else {
    //             nav_panel.classList.remove('d-flex');
    //             nav_panel.classList.add('d-none');
    //         }
    //     })
    //     for (let x = 0; x < 6; x++) {
    //         nav_btn_expand[x].addEventListener('click', () => {
    //             console.log('clicked');
    //             for (let y = 0; y < 6; y++) {
    //                 if (x != y) {
    //                     expand_list[y].classList.forEach((class_item) => {
    //                         if (class_item == 'd-flex') {
    //                             expand_list[y].classList.remove('d-flex');
    //                             expand_list[y].classList.add('d-none');
    //                         }
    //                     })
    //                 }
    //             }
    //             let d_flex = false;
    //             expand_list[x].classList.forEach((class_item) => {
    //                 if (class_item == 'd-flex') {
    //                     d_flex = true;
    //                 }
    //             })
    //             if (d_flex == true) {
    //                 expand_list[x].classList.remove('d-flex');
    //                 expand_list[x].classList.add('d-none');
    //             }
    //             else {
    //                 expand_list[x].classList.remove('d-none');
    //                 expand_list[x].classList.add('d-flex');
    //             }
    //         })
    //     }
    //     for (let x = 6; x < 12; x++) {
    //         nav_btn_expand[x].addEventListener('click', () => {
    //             console.log('clicked');
    //             for (let y = 0; y < 6; y++) {
    //                 if ((x - 6) != y) {
    //                     expand_list_sm[y].classList.forEach((class_item) => {
    //                         if (class_item == 'd-flex') {
    //                             expand_list_sm[y].classList.remove('d-flex');
    //                             expand_list_sm[y].classList.add('d-none');
    //                         }
    //                     })
    //                 }
    //             }
    //             let d_flex = false;
    //             expand_list_sm[(x - 6)].classList.forEach((class_item) => {
    //                 if (class_item == 'd-flex') {
    //                     d_flex = true;
    //                 }
    //             })
    //             if (d_flex == true) {
    //                 expand_list_sm[(x - 6)].classList.remove('d-flex');
    //                 expand_list_sm[(x - 6)].classList.add('d-none');
    //             }
    //             else {
    //                 expand_list_sm[(x - 6)].classList.remove('d-none');
    //                 expand_list_sm[(x - 6)].classList.add('d-flex');
    //             }
    //         })
    //     }
    // }, [])

    useEffect(() => {
        dashbord()
    }, [])







    return (
        <div className='row justify-content-center'>
            <div className='col-md-12'>
                <header class="">
                    <div class="topbar d-flex align-items-center">
                        <nav class="navbar navbar-expand">
                            <div class="topbar-logo-header " style={{ marginLeft: '-3rem' }}>
                                <div class="">
                                    <img src={logo} class="logo" alt="logo icon" style={{ width: '13rem' }} />
                                </div>
                            </div>
                            <div class="Id_Profile">
                                <h6 class="six">
                                    ID:-
                                    {
                                        packegeid > 0 ?
                                            <>
                                                <img src={id_green} width="13%" />
                                            </> :
                                            <>
                                                <img src={id_red} width="13%" />

                                            </>
                                    }
                                    {uId}
                                </h6>
                                    <img src={profile} width="40px" />
                               

                           

                            </div>


                        </nav>
                    </div>
                </header>

                <div class="nav_top">
                    <div class="nav2 container-fluid px_0">
                        <div class="nav-header">
                            <div class="nav-title">
                                <NavLink to="/" >
                                    <img src={logo} />
                                </NavLink>

                            </div>
                            <div class="nav-btn">
                                <label for="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>

                            <input type="checkbox" name="" id="nav-check" />
                            <div class="nav-links">
                                <ul>
                                    <li>
                                        <a href="/dashboard">
                                            <i class="bx bx-home-circle"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <NavLink class="nav-link  dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><TbAtom className="me-1 mb-1 fs-4" />
                                            Activation
                                        </NavLink>
                                        <ul class="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">

                                            <li>
                                                <a href="/dashboard/Activate"><BsArrowRightShort /> Activate / Upgrade </a>
                                            </li>

                                            <li>
                                                <a href="/dashboard/Activate_History"><BsArrowRightShort /> Activate History</a>
                                            </li>
                                            <li>
                                                <a href="/dashboard/Registration_history"><BsArrowRightShort /> Registration History</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <NavLink class="nav-link dropdown-toggle " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <BiLineChart className="me-1 mb-1 fs-4" /> All Reward
                                        </NavLink>
                                        <ul class="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                                            <li>

                                                <a href="/dashboard/Registration_direct_income"><BsArrowRightShort /> Registration Reward</a>
                                            </li>

                                            <li>

                                                <a href="/dashboard/Activation_reward"><BsArrowRightShort /> Activation Reward</a>
                                            </li>
                                            <li>

                                                <a href="/dashboard/Roi_Income"><BsArrowRightShort /> Daily Yield</a>
                                            </li>
                                            <li>

                                                <a href="/dashboard/Reward_Income"><BsArrowRightShort /> Referral Daily Yield Booster </a>
                                            </li>
                                            <li>

                                                <a href="/dashboard/Registration_level_income"><BsArrowRightShort /> Referral Level Income</a>
                                            </li>
                                            <li>
                                                <a href="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Reward</a>

                                            </li>

                                            <li>
                                                <a href="/dashboard/Dividend_income"><BsArrowRightShort /> Dividend Reward</a>

                                            </li>
                                            <li>

                                                <a href="/dashboard/Rank_Yield_income"><BsArrowRightShort /> Rank Achievers Yield</a>
                                            </li>
                                            {/* <li>

                                                <a href="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Referral Daily Yield</a>
                                            </li> */}





                                            {/* <li>
                                                <NavLink to="/Registration_Direct_Reward"><i class="bx bx-right-arrow-alt"></i>Registration Reward </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Registration_Quarterly_Reward"><i class="bx bx-right-arrow-alt"></i>Registration Quarterly Reward</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Daily_Yield_Reward"><i class="bx bx-right-arrow-alt"></i>Daily Yield Reward</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Direct_Referral_Reward"><i class="bx bx-right-arrow-alt"></i>Direct Referral Reward</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Augmented_Reward"><i class="bx bx-right-arrow-alt"></i>Augmented Reward</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Forum_Reward"><i class="bx bx-right-arrow-alt"></i>Forum Reward</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Auto_Club_Reward"><i class="bx bx-right-arrow-alt"></i>Auto Club Reward</NavLink>
                                            </li> */}

                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <BiBook className="me-1 mb-1 fs-4" />
                                            Withdrawal
                                        </NavLink>
                                        <ul class="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a href="/dashboard/Withdrawal"><BsArrowRightShort />Registration Withdrawal</a>

                                            </li>
                                            <li>
                                                <a href="/dashboard/Withdrawal_History"><BsArrowRightShort /> Registration Withdrawal History</a>

                                            </li>
                                            <li>
                                                <a href="/dashboard/ActivationWithdrawal"><BsArrowRightShort />Activation Withdrawal</a>

                                            </li>
                                            <li>
                                                <a href="/dashboard/REG_History"><BsArrowRightShort /> Activation Withdrawal History</a>

                                            </li>

                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {/* <i class='bx bx-group'></i> */}
                                            <MdOutlineGroup className="me-1 mb-1 fs-4" />
                                            Team Details
                                        </NavLink>
                                        <ul class="dropdown-menu  ul-ip" aria-labelledby="navbarDropdown">
                                            <a href="/dashboard/My_Referral"><BsArrowRightShort /> My Referral</a>
                                            <li>
                                                <a href="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</a>

                                                {/* <NavLink to="/My_Referral"><i class="bx bx-right-arrow-alt"></i>My Referral</NavLink> */}
                                            </li>
                                            <li>
                                                <a href="/dashboard/Level_Details"><BsArrowRightShort /> Level Details</a>

                                                {/* <NavLink to="/My_Team"><i class="bx bx-right-arrow-alt"></i>My Team</NavLink> */}
                                            </li>
                                            <li>
                                                <a href="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</a>

                                                {/* <NavLink to="/My_Forum"><i class="bx bx-right-arrow-alt"></i>My Forum</NavLink> */}
                                            </li>
                                            <li>
                                                <a href="/dashboard/My_Team"><BsArrowRightShort /> My Team</a>

                                                {/* <NavLink to="/Forum_View"><i class="bx bx-right-arrow-alt"></i>Forum View</NavLink> */}
                                            </li>
                                            {/* <li>
                                                <NavLink to="Club_View.html"><i class="bx bx-right-arrow-alt"></i>Club View</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Club_Downline"><i class="bx bx-right-arrow-alt"></i>Club Downline</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Forum_Direct"><i class="bx bx-right-arrow-alt"></i>Forum Direct</NavLink>
                                            </li> */}

                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <BiMessageSquareEdit className="me-1 mb-1" />Address
                                        </NavLink>
                                        <ul class="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">

                                            <li>
                                                <a href="/dashboard/Self_Address"><i class="bx bx-right-arrow-alt"></i>Self Address</a>
                                            </li>
                                            <li>
                                                <a href="/dashboard/NFT_Address"><i class="bx bx-right-arrow-alt"></i>Contract Address</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <NavLink onClick={() => handleLogout()} to="#" ><FaLock className="me-1 mb-1" /> Logout</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/dashboard/Activate_History' element={<Activate_History />} />
                <Route path='/dashboard/Activate' element={<Activate />} />
                <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
                <Route path='/dashboard/Profile' element={<Profile />} />
                <Route path='/dashboard/Referral_Income' element={<Referral_Income />} />
                <Route path='/dashboard/Matching_Income' element={<Matching_Income />} />
                <Route path='/dashboard/Reward_Income' element={<Reward_Income />} />
                <Route path='/dashboard/Roi_Income' element={<Roi_Income />} />
                <Route path='/dashboard/Matching_Level_Income' element={<Matching_Level_Income />} />
                <Route path='/dashboard/Buy_NFT' element={<Buy_NFT />} />
                <Route path='/dashboard/Withdrawal_History' element={<Withdrawal_History />} />
                <Route path='/dashboard/REG_History' element={<REG_History />} />

                <Route path='/dashboard/Withdrawal' element={<Withdrawal />} />
                <Route path='/dashboard/Direct_Leg_Business' element={<Direct_Leg_Business />} />
                <Route path='/dashboard/Level_Details' element={<Level_Details />} />
                <Route path='/dashboard/Matching_Tree' element={<Matching_Tree />} />
                <Route path='/dashboard/My_Referral' element={<My_Referral />} />
                <Route path='/dashboard/My_Team' element={<My_Team />} />
                <Route path='/dashboard/Coin_Address' element={<Coin_Address />} />
                <Route path='/dashboard/NFT_Address' element={<NFT_Address />} />
                <Route path='/dashboard/Self_Address' element={<Self_Address />} />
                <Route path='/dashboard/Change_Password' element={<Change_Password />} />
                {/* <Route path='/dashboard/Mint' element={<Mint  />} /> */}
                <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} />
                <Route path='/dashboard/ChangePasswor_eamil' element={<ChangePasswor_eamil />} />
                <Route path='/dashboard/Varify_email_change_password' element={<Varify_email_change_password />} />
                <Route path='/dashboard/Update_profile_email' element={<Update_profile_email />} />






            </Routes>
            <Outlet />
        </div>
    );
}

export default Navbar;