/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Card from "../components/card";

const Dashboard = () => {

    return (
        <>
            <div className="flex justify-center items-stretch bg-base-200 h-screen">
                <div className="w-[250px] px-2 flex flex-col justify-start items-center">
                    <Link href={"/"}>
                        <img
                            src="/images/i13logo.png"
                            alt="logo"
                            className="w-[200px] my-3"
                        />
                    </Link>
                    <ul className="w-56 rounded-box w-full">
                        <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                            <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                                    />
                                </svg>
                            </div>
                            My Projects
                        </li>
                        <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                            <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                    />
                                </svg>
                            </div>
                            Team Projects
                        </li>
                        <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                            <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            Recent Projects
                        </li>
                    </ul>
                </div>
                <div className="grow w-full flex flex-col justify-start items-start px-4">
                    <div className="flex justify-between items-center w-full py-2 px-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Search Projects, Canvas"
                                className="bg-base-200 input input-bordered w-[350px] input-sm rounded-md"
                            />
                        </div>
                        <div className="flex justify-end items-center">
                            <div className="dropdown dropdown-end mr-5">
                                <div tabIndex={0} role="button">
                                    <div className="rounded-full m-2 indicator">
                                        <span className="indicator-item badge badge-primary rounded-full text-white">
                                            1
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="bg-base-100 w-[350px] rounded-box w-52 dropdown-content z-[1] p-2 shadow-md"
                                >
                                    <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                                        <img
                                            className="w-10 h-10 rounded-full mr-4"
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                        <p className="text-sm">
                                            Jhon Dave Shared a Canvas with you. Click to view the
                                            canvas
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn !min-h-fit !h-fit !w-fit !min-w-fit btn-ghost btn-circle avatar"
                                >
                                    <div className="w-8 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="bg-base-100 w-56 rounded-box w-52 dropdown-content z-[1] p-2 shadow-md"
                                >
                                    <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                                        <img
                                            className="w-8 h-8 rounded-full mr-2"
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                        <p>Narayana Lvsaln</p>
                                    </li>
                                    <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                                        <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                        </div>
                                        Settings
                                    </li>
                                    <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                                        <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                                                />
                                            </svg>
                                        </div>
                                        Payments
                                    </li>
                                    <li className="my-1 hover:bg-primary rounded-md !bg-opacity-20 cursor-pointer p-1 px-2 flex justify-start items-center">
                                        <div className="w-8 h-8 mr-2 flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 rotate-90"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                                />
                                            </svg>
                                        </div>
                                        Signout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grow bg-white rounded-md p-4 w-full">
                        <p className="text-xl font-medium">My Projects</p>
                        <div className="divider !mt-1"></div>
                        <div className="flex justify-start items-start w-full flex-wrap">
                            <div className="mb-3 mr-3 cursor-pointer w-1/6 shadow-md h-[250px] rounded-md overflow-hidden flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </div>
                                <p className="py-2">New Project</p>
                            </div>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
