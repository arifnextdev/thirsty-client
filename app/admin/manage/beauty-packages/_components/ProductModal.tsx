import Button from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { bookingType } from '@/types/booking';
import { speciallisType } from '@/types/specialists';
import React from 'react';
import toast from 'react-hot-toast';

interface ProductModalProps {
  isModalOpen: boolean | null;
  token: string | undefined;
}

const ProductModal: React.FC<ProductModalProps> = ({ isModalOpen, token }) => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      category: { value: string };
      images: { value: string[] };
      price: { value: number };
    };

    const payload = {
      title: target.title.value,
      description: target.description.value,
      category: target.category.value,
      images: target.images.value,
      price: target.price.value,
    };

    try {
      const data: any = axiosPackagePost(
        '/api/beauty_packages',
        payload,
        token
      );

      if (data) {
        toast.success('SuccessFully Added');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
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
                Title
              </label>
              <input
                type='text'
                id='title'
                required
                name='title'
                placeholder='Title.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
            <div className='flex flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Drescription
              </label>
              <input
                type='text'
                required
                id='description'
                name='description'
                placeholder='Name.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <div className='flex flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Price
              </label>
              <input
                type='number'
                id='price'
                name='price'
                placeholder='Price.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
            <div className='flex flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Images
              </label>
              <input
                type='text'
                id='images'
                name='images'
                placeholder='Images.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              >
                <option value={'Haircare Kit'} className=''>
                  {'Haircare Kit'}
                </option>
                <option value={'Skincare Essentials'}>
                  Skincare Essentials
                </option>
                <option value={'Makeup Must-Haves'}>Makeup Must-Haves</option>
              </select>
            </div>
            {/* <div className='flex w-full flex-col items-start gap-1.5 '>
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
            </div> */}
          </div>
          <div className='flex gap-5'>
            <Button variant={'primary'} type='submit' size={'full'}>
              Add Package
            </Button>
            <Button variant={'danger'} type='submit' size={'full'}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
