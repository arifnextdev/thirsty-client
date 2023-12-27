import Button, { buttonVariants } from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { ReactNode, useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { cn } from '@/app/libs/utils';
import { beautyPackageType } from '@/types/beautyPackageItem';

interface ProductModalProps {
  isModalOpen: boolean | null;
  token: string | undefined;
  modalToggle: (data: boolean) => void;
  getData: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isModalOpen,
  token,
  modalToggle,
  getData,
}) => {
  const [images, setImages] = useState<
    {
      url: string;
      key: string;
    }[]
  >([]);

  const [base64Images, setBase64Images] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filePromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      });
      Promise.all(filePromises)
        .then((base64Results) => {
          setBase64Images(base64Results);
        })
        .catch((error) => console.error('Error reading files:', error));
    }
  };

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
      const data = axiosPackagePost(
        '/api/beauty_packages',
        payload,
        token,
        getData,
        modalToggle
      );
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div
      className={` fixed left-1/2 top-1/2 z-[2] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-blue bg-white px-10 py-5 shadow-xl ${
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
            <div className='flex w-full flex-col items-start gap-1.5 '>
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
          </div>
          {/* <div className='flex w-full justify-between gap-5'>
            <div className='grid w-full grid-cols-4 justify-between gap-2.5 overflow-hidden'>
              {base64Images.map((base64, index) => (
                <div key={index} className='h-[100px] w-[100px]'>
                  <Image
                    src={base64}
                    alt={`Image ${index}`}
                    width={50}
                    height={50}
                    className='h-full w-full object-cover'
                    priority
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className='flex justify-between gap-5'>
            {/* <div className='flex w-full items-center justify-center'>
              <label
                htmlFor='dropzone-file'
                className='border-gray-300 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed'
              >
                <div className='flex flex-col items-center justify-center pb-6 pt-5'>
                  <svg
                    className='text-gray-500 dark:text-gray-400 mb-4 h-8 w-8'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='text-gray-500 dark:text-gray-400 mb-2 text-sm'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                  <p className='text-gray-500 dark:text-gray-400 text-xs'>
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id='dropzone-file'
                  type='file'
                  className='hidden'
                  multiple
                  onChange={handleFileChange}
                />
              </label>
            </div> */}
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Images
              </label>
              <input
                type='text'
                id='images'
                name='images'
                placeholder='Images Link.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>

          <div className='flex gap-5'>
            <Button variant={'primary'} type='submit' size={'full'}>
              Add Package
            </Button>
            <button
              onClick={() => modalToggle(false)}
              className={cn(
                buttonVariants({ variant: 'danger', size: 'full' })
              )}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
