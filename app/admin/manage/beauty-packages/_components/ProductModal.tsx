import Button, { buttonVariants } from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { ChangeEvent, ReactNode, useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { cn } from '@/app/libs/utils';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { MdDelete } from 'react-icons/md';

interface ProductModalProps {
  isModalOpen: boolean | null;
  token: string | undefined;
  modalToggle: (data: boolean) => void;
  getData: () => void;
}
interface InputField {
  id: number;
  value: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isModalOpen,
  token,
  modalToggle,
  getData,
}) => {
  const [inputFields, setInputFields] = useState<InputField[]>([
    { id: 1, value: '' },
  ]);
  const [allInputValues, setAllInputValues] = useState<string[]>(['']);

  // const [base64Images, setBase64Images] = useState<string[]>([]);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     const filePromises = Array.from(files).map((file) => {
  //       return new Promise<string>((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file);
  //         reader.onload = () => resolve(reader.result as string);
  //         reader.onerror = (error) => reject(error);
  //       });
  //     });
  //     Promise.all(filePromises)
  //       .then((base64Results) => {
  //         setBase64Images(base64Results);
  //       })
  //       .catch((error) => console.error('Error reading files:', error));
  //   }
  // };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      category: { value: string };
      price: { value: number };
    };
    const payload = {
      title: target.title.value,
      description: target.description.value,
      category: target.category.value,
      images: allInputValues,
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

  const handleAddField = () => {
    const newInputFields = [...inputFields, { id: Date.now(), value: '' }];
    setInputFields(newInputFields);
  };

  const handleInputChange = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(newInputFields);

    const allValues = newInputFields.map((field) => field.value);
    setAllInputValues(allValues);
  };

  const handleDeleteField = (id: number) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);

    const allValues = newInputFields.map((field) => field.value);
    setAllInputValues(allValues);
  };

  console.log(allInputValues);

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

          <div className='flex justify-between gap-5'>
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <div className=' flex w-full items-center justify-between'>
                <label htmlFor='name' className='cursor-pointer'>
                  Images
                </label>
                <Button
                  variant={'primary'}
                  size={'auto'}
                  type='button'
                  onClick={handleAddField}
                >
                  Add
                </Button>
              </div>
              {inputFields.map((field) => (
                <div
                  key={field.id}
                  className='flex w-full justify-between gap-5'
                >
                  <input
                    type='text'
                    id='images'
                    name='images'
                    value={field.value}
                    onChange={(event) => handleInputChange(field.id, event)}
                    placeholder='Images Link.....'
                    className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
                  />
                  <Button
                    variant={'danger'}
                    type='button'
                    onClick={() => handleDeleteField(field.id)}
                  >
                    <MdDelete />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className='flex gap-5'>
            <Button variant={'primary'} type='submit' size={'full'}>
              Add Package
            </Button>
            <button
              onClick={() => modalToggle(false)}
              type='button'
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
