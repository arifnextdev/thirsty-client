import { userType } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface UserProps {
  users: userType[];
}

const User: React.FC<UserProps> = ({ users }) => {
  return (
    <div className='sp container'>
      <table className='w-full'>
        <thead className='w-full'>
          <tr className=''>
            <td>photo</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
          </tr>
        </thead>

        <tbody className='userTableBody '>
          {users?.map((user: userType) => (
            <tr className='space-y-10 bg-red'>
              <td>
                <div>
                  <Image
                    src={user?.photoURl}
                    alt={user.name}
                    width={40}
                    height={40}
                    priority
                    className=''
                  />
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
