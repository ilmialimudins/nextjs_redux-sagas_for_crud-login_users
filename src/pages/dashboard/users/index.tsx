import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  douserRequest,
  doDeleteUser,
} from '../../../Redux/Action/reducerAction';
import { useRouter } from 'next/router';
import { Table } from 'antd';
export default function index() {
  const rout = useRouter();
  // let navigate = useNavigate()

  let users = useSelector((state: any) => state.usersReducers.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(douserRequest());
  });

  const editdata = (id: any) => {
    // navigate('/edituser', {state:{id}})
    rout.push(
      {
        pathname: 'users/edituser',
        query: { id },
      },
      'users/edituser'
    );
  };

  const deletedata = (id: any) => {
    dispatch(doDeleteUser(id));
  };

  const columns = [
    {
      title: 'userId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'userName',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_: any, record: { userId: any }) => (
        <span>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            onClick={() => editdata(record.userId)}
          >
            edit
          </button>
        </span>
      ),
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_: any, record: { userId: any }) => (
        <span>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            onClick={() => deletedata(record.userId)}
          >
            delete
          </button>
        </span>
      ),
    },
  ];

  return (
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-16 rounded-bl-lg rounded-br-lg">
      <a
        href="/dashboard/users/adduser"
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      >
        tambah
      </a>
      {/* <table className="min-w-full">
            <thead>
                <tr>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider'>#</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>userId</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>userName</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>password</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider width="110px"'>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
            {
                users && users.map((users:any, i:any)=>{
                return(
                    <tr>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{i+1}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{users.userId}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{users.userName}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{users.password}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'><button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>editdata(users.userId)}>edit</button> <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>deletedata(users.userId)}>delete</button></td>
                    </tr>
                ) 
                })
            }
            </tbody>
        </table> */}
      <Table dataSource={users} columns={columns} />
    </div>
  );
}
