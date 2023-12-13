import Button from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { bookingType } from '@/types/booking';
import { speciallisType } from '@/types/specialists';
import React from 'react';

interface ProductModalProps {
  beautyPacakage: beautyPackageType;
  isModalOpen: boolean | null;
  token: string | undefined;
}

const ProductModal: React.FC<ProductModalProps> = ({
  beautyPacakage,
  isModalOpen,
  token,
}) => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      category: { value: string };
      images: { value: string[] };
      price: { value: number };
      speciallist: { value: speciallisType[] };
      bookings: { value: bookingType[] };
    };

    const payload = {
      title: target.title.value,
      description: target.description.value,
      category: target.category.value,
      images: target.images.value,
      speciallist: target.speciallist.value,
      bookings: target.bookings.value,
    };
    axiosPackagePost('/api/beauty_packages', payload, token);
  };
  return (
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
                placeholder='Name.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            {/* <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Role
              </label>
              <select
                name='role'
                id='role'
                
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
            </div> */}
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Phone....
              </label>
              <input
                type='phone'
                id='phone'
                name='phoneNumber'
                placeholder='Phone.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>
          <div className=''>
            <Button variant={'primary'} type='submit' size={'full'}>
              Add Package
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
