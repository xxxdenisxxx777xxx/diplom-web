
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import BasePage from './components/DropGroups';
import HomePage from './pages/HomePage';
import AppRouter from './routes/AppRouter';


function Login({ children }) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'))
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState("/home");
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        if (activeTab === tab) {
            setActiveTab(null);
        } else {
            setActiveTab(tab);
        }
    };



    const handleLogin = async () => {
        try {
            const response = await axios.post('https://tame-jade-whale-fez.cyclic.app/api/login', { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } });
            if (response.status === 200) {
                localStorage.setItem('auth', JSON.stringify(response.data.user));
                setIsAuth(true)
                navigate('/home');
            } else {
                alert(response.data.message)
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const handleSignOut = () => {
        const isAuthData = localStorage.getItem('auth');
        if (isAuthData) {
            localStorage.removeItem('auth');
            setIsAuth(false)
        }
    }







    return (
        <>
            {isAuth ? <>

                <header>
                    <div className="flex flex-row min-h-screen w-full bg-gray-100 text-gray-800">
                        <aside
                            className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white "
                        >
                            <div className="sidebar-header flex items-center justify-center py-4">
                                <div className="inline-flex">
                                    <a href="#" className="inline-flex flex-row items-center">
                                        <img className='w-36' src='https://schoolnavigator.com.ua/uploads/provider/logo/510/medium_Instagram-%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_1080x1080__%D0%BF%D0%B8%D0%BA%D1%81.png' alt='alt2' />
                                        <span className="leading-10 bg-sky-700  text-2xl font-bold ml-1 uppercase"></span>
                                    </a>
                                </div>
                            </div>

                            <div className="sidebar-content px-4 py-6">
                                <ul className="flex flex-col w-full">
                                    <li className="my-px">
                                        <Link to="/home">
                                            <button
                                                className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700 "
                                                onClick={() => handleTabClick("/home")}                                            >
                                                <span className="flex items-center justify-center text-lg text-inherit">
                                                    <svg
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="ml-3">Головна</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="my-px">
                                        <Link to="/chat">
                                            <button
                                                href="#"
                                                className="flex flex-row items-center h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                <span className="flex items-center justify-center text-lg text-inherit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                                    </svg>

                                                </span>
                                                <span className="ml-3">Повідомлення</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="my-px">
                                        <span className="flex font-medium text-sm text-inherit px-4 my-4 uppercase">Управління</span>
                                    </li>


                                    <li className="my-px">
                                        <Link to="/groups">
                                            <button

                                                className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700 "
                                            >
                                                <span className="flex items-center justify-center text-lg text-inherit">
                                                    <svg
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="ml-3">Групи</span>
                                            </button>
                                        </Link>
                                    </li>


                                    <li className="my-px">
                                        <button
                                            href="#"
                                            className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-inherit">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Студенти</span>
                                            <span
                                                className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                                            >1k</span>
                                        </button>
                                    </li>
                                    <li className="my-px">
                                        <button
                                            href="#"
                                            className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-inherit">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                    />

                                                </svg>
                                            </span>
                                            <span className="ml-3">Розклад</span>
                                        </button>
                                    </li>

                                    {/* <li className="my-px">
                                        <a
                                            href="#"
                                            className="flex flex-row items-center h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-green-400">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Add new</span>
                                        </a>
                                    </li> */}

                                    <li className="my-px">
                                        <button
                                            href="#"
                                            className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-inherit">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Викладачі</span>
                                        </button>
                                    </li>
                                    <li className="my-px">
                                        <a
                                            href="#"
                                            className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-inherit">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Відомості</span>
                                            <span
                                                className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                                            >10</span>
                                        </a>
                                    </li>
                                    <li className="my-px">
                                        <span className="flex font-medium text-sm text-inherit px-4 my-4 uppercase">Профіль</span>
                                    </li>

                                    <li className="my-px">
                                        <button
                                            href="#"
                                            className="flex flex-row items-center w-full h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-inherit">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    />
                                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Налаштування</span>
                                        </button>
                                    </li>

                                    <li className="my-px">
                                        <button
                                            onClick={handleSignOut}
                                            className="flex flex-row w-full items-center h-10 px-3 rounded-lg text-inherit hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="flex items-center justify-center text-lg text-red-400">
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ml-3">Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <main className="main w-full flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                            <header className="header  bg-white shadow py-4 px-4">
                                <div className="header-content flex items-center flex-row">
                                    <form action="#">
                                        <div className="hidden md:flex relative">
                                            <div
                                                className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-inherit"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>

                                            <input
                                                id="search"
                                                type="text"
                                                name="search"
                                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                                                placeholder="Search..."
                                            />
                                        </div>
                                        <div className="flex md:hidden">
                                            <button href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
                                                <svg
                                                    className="h-6 w-6 text-gray-500"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>

                                    <div className="flex ml-auto gap-4">
                                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        </button>
                                        <a href className="flex flex-row items-center">
                                            <img
                                                src="https://github.com/xxxdenisxxx777xxx/eDniproPrct/blob/main/IMG_0796.jpeg?raw=true"
                                                alt
                                                className="h-10 w-10 bg-gray-200 border rounded-full"
                                            />
                                            <span className="flex flex-col ml-2">
                                                <span className="truncate w-20 font-semibold tracking-wide leading-none">Іванна</span>
                                                <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Завуч</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </header>
                            <div className="main-content flex flex-col flex-grow p-4">


                                <div
                                    className="flex flex-col flex-grow border-4 bg-white rounded-lg "
                                >
                                    <AppRouter />
                                </div>
                            </div>

                        </main>
                    </div>
                </header>



            </> : <div className="relative z-50">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
                </div>
                <form className='mt-[100px]'>
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                            <div className="flex flex-shrink-0 items-center z-50">
                                <Link to="/admin">
                                    <img className="mx-auto h-[150px] w-auto" src="https://schoolnavigator.com.ua/uploads/provider/logo/510/medium_Instagram-%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_1080x1080__%D0%BF%D0%B8%D0%BA%D1%81.png" alt="Your Company" />
                                </Link>
                            </div>

                        </div>
                        <br />
                        <br />
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form class="space-y-6" action="#" method="POST">
                                <div>
                                    <label for="email" class="block text-base font-medium leading-6 text-gray-900">Електронна пошта</label>
                                    <div class="mt-2">
                                        <input required class="block w-full h-11 rounded-md border-0 py-1.5 pl-3 placeholder:pl-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" type="text"
                                            placeholder="Введіть email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <div class="flex items-center justify-between">
                                        <label for="password" class="block text-base font-medium leading-6 text-gray-900">Пароль</label>
                                        <div class="text-sm">
                                            <a class="font-semibold text-sky-700 hover:text-sky-950">Забули пароль?</a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input autocomplete="current-password" required class="block w-full h-11 pl-3 placeholder:pl-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" type="password"
                                            placeholder="Введіть пароль"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="flex w-full justify-center h-9 rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950" onClick={(e) => { e.preventDefault(), handleLogin() }}>Sign in</button>
                                </div>
                            </form>
                            <p class="mt-7 text-center text-sm text-gray-500">
                                Немає профілю ?
                                <p class="font-semibold leading-6 text-sky-700 hover:text-sky-950">ednipro.program@gmail.com</p>
                            </p>
                        </div>
                    </div>

                </form>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-33rem)] ml-14" aria-hidden="true">
                    <div className="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[90.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+35rem)] sm:w-[72.1875rem]" ></div>
                </div>
            </div>}






            {children}
        </>

    );
}

export default Login;
