import { doUserCreate } from '@/src/Redux/Action/reducerAction';
import Link from 'next/link';
import React, { HtmlHTMLAttributes, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function adduser() {
  const root = useRouter();

  const dispatch = useDispatch();
  const [dataUser, setdataUser] = useState({
    userId: '',
    username: '',
    password: '',
  });

  const evenHandler =
    (nama: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setdataUser({ ...dataUser, [nama]: event.target.value });
    };

  //  Fungsi ini digunakan untuk menambah data pengguna baru.
  const addData = (e: any) => {
    e.preventDefault();
    dispatch(doUserCreate(dataUser));
    console.log(dataUser);
    root.push('/dashboard/users');
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              userId
            </label>
            <input
              value={dataUser.userId}
              onChange={evenHandler('auto')}
              placeholder="Automation"
              type="text"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              userName
            </label>
            <input
              value={dataUser.username}
              onChange={evenHandler('username')}
              placeholder="masukan nama ..."
              type="text"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              password
            </label>
            <input
              value={dataUser.password}
              onChange={evenHandler('password')}
              type="text"
              placeholder="masukan password ..."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <button
            onClick={addData}
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
