import { userType } from '@/types/user';
import Button, { buttonVariants } from './Button';
import { cn } from '@/app/libs/utils';
import { useState } from 'react';
import axios from 'axios';
import { axiosPost } from '@/app/libs/axiosPost';
import toast from 'react-hot-toast';
import Overlay from './Overlay';

interface ModalProps {
  user: userType;
  isModalOpen: boolean | null;
  token: string | undefined;
  currentId: string | undefined;
}

interface UpdateFromDate {
  role: string;
  phoneNumber: string;
  photoURl: string;
  address: string;
}

const Modal: React.FC<ModalProps> = ({
  user,
  isModalOpen,
  token,
  currentId,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<UpdateFromDate>({
    photoURl: '',
    address: '',
    phoneNumber: '',
    role: '',
  });
  const currentUser = currentId === user._id;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      phoneNumber: { value: string };
      role: { value: string };
      photoURl: { value: string };
      address: { value: string };
    };

    const payload = {
      phoneNumber: target.phoneNumber.value,
      role: target.role.value,
      photoURl: target.photoURl.value,
      address: target.address.value,
    };

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}${`/api/users/${user._id}`}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        return res.data;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <>
      <div
        className={` fixed left-1/2 top-1/3 z-[2] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-blue bg-white px-10 py-5 shadow-xl ${
          isModalOpen ? '' : 'hidden'
        }
       `}
      >
        <div className=''>
          <div className=''>
            <h3 className='text-2xl font-medium'>User</h3>
            <p></p>
          </div>
          <hr className='my-2 text-blue' />
          <form onSubmit={handleSubmit} className='flex flex-col gap-2.5'>
            <div className='flex justify-between gap-5'>
              <div className='flex flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  readOnly={true}
                  name='name'
                  defaultValue={user.name}
                  placeholder='Name.....'
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                />
              </div>
              <div className='flex flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Email Address
                </label>
                <input
                  type='email'
                  readOnly={true}
                  id='email'
                  name='email'
                  defaultValue={user.email}
                  placeholder='Name.....'
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                />
              </div>
            </div>
            <div className='flex justify-between gap-5'>
              <div className='flex flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Photo Url
                </label>
                <input
                  type='url'
                  id='photoURl'
                  name='photoURl'
                  defaultValue={user.photoURl}
                  placeholder='PhotoUrl.....'
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                />
              </div>
              <div className='flex flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Address
                </label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  defaultValue={user.address}
                  placeholder='Name.....'
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                />
              </div>
            </div>
            <div className='flex justify-between gap-5'>
              <div className='flex w-full flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Role
                </label>
                <select
                  disabled={currentUser ? true : false}
                  name='role'
                  id='role'
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                >
                  <option
                    value={user.role === 'user' ? 'user' : 'admin'}
                    className=''
                  >
                    {user.role === 'user' ? 'user' : 'admin'}
                  </option>
                  <option value={user.role === 'admin' ? 'user' : 'admin'}>
                    {user.role === 'admin' ? 'user' : 'admin'}
                  </option>
                </select>
              </div>
              <div className='flex w-full flex-col items-start gap-1.5 '>
                <label htmlFor='name' className='cursor-pointer'>
                  Phone....
                </label>
                <input
                  type='phone'
                  id='phone'
                  name='phoneNumber'
                  defaultValue={user.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder='Phone.....'
                  className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                />
              </div>
            </div>
            <div className=''>
              <Button variant={'primary'} size={'full'}>
                Update User
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
