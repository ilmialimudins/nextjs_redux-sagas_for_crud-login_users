import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '@/src/Redux/Service/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/src/Redux/Action/authAction';

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const dispatch = useDispatch();
  const root = useRouter();
  const [dataUser, setDataUser] = useState({
    userName: '',
    password: '',
  });

  const evenHandler = (nama: string) => (event: { target: { value: any } }) => {
    setDataUser({ ...dataUser, [nama]: event.target.value });
  };

  const submit = (e: any) => {
    e.preventDefault();
    dispatch(login(dataUser));
    console.log(login);
    root.push('/dashboard');
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <div className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 flex">
          <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
            <h1 className="font-bold text-2xl my-10 text-white"> Login </h1>
            <h6>status :</h6>
            <form className="mt-2 flex flex-col lg:w-1/2 w-8/12">
              <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                <div className="flex -mr-px justify-center w-15 p-4">
                  <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                    <i className="fas fa-user-circle"></i>
                  </span>
                </div>
                <input
                  // onChange={event=>setUsername(event.target.value)}
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                  placeholder="Username"
                  onChange={evenHandler('username')}
                />
              </div>
              <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                <div className="flex -mr-px justify-center w-15 p-4">
                  <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  // onChange={event=>setPassword(event.target.value)}
                  type="password"
                  className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                  placeholder="Password"
                  onChange={evenHandler('password')}
                />
                <div className="flex -mr-px">
                  <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <i className="fas fa-eye-slash"></i>
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6"
              >
                Forget Password ?
              </a>
              {/* <Link href="/dashboard"
              className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
            >
              Login
            </Link> */}
              <div className="flex  items-center justify-center">
                <button
                  onClick={submit}
                  type="submit"
                  className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Login
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;