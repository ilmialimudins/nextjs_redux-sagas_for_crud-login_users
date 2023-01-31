import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ApiUsers from '@/src/Redux/Service/ApiUsers';
import { doUserUpdate } from '@/src/Redux/Action/reducerAction';
import { useRouter } from 'next/router';

export default function edituser() {
  let root = useRouter();
  // const {state}= useLocation;
  const { id } = root.query;

  // const dispatch =useDispatch()
  // const [dataUser, setdataUser]= useState({
  //     userId:'',
  //     userName:'',
  //     password:''
  // })

  const dispatch = useDispatch();
  const [dataUser, setdataUser] = useState({
    userId: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    ApiUsers.getId(id)
      .then((res: any) => {
        setdataUser({
          ...dataUser,
          userId: res.data.userId,
          username: res.data.userName,
          password: res.data.password,
        });
      })
      .catch((err) => alert(err));
  }, []);

  // const evenHandler1 = nama => event=>{
  //     setdataUser({...dataUser, [nama]: event.target.value})
  // }
  const evenHandler =
    (namae: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setdataUser({ ...dataUser, [namae]: event.target.value });
    };

  const updateContent = (e: any) => {
    e.preventDefault();
    dispatch(doUserUpdate(dataUser));
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
              userName
            </label>
            <input
              value={dataUser.username}
              onChange={evenHandler('username')}
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
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <button
            onClick={updateContent}
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
