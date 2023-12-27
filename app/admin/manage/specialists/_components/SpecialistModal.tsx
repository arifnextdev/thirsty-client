import Button, { buttonVariants } from '@/app/components/ui/Button';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { cn } from '@/app/libs/utils';
import useFetch from '@/hooks/useFetch';
import { beautyPackageType } from '@/types/beautyPackageItem';
import toast from 'react-hot-toast';

interface SpecialistModalPrps {
  isModalOpen: boolean | null;
  token: string | undefined;
  modalToggle: (data: boolean) => void;
  getData: () => void;
}

const SpecialistModal: React.FC<SpecialistModalPrps> = ({
  isModalOpen,
  token,
  modalToggle,
  getData,
}) => {
  const specialistAdd = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      designation: { value: string };
      dateOfBirth: { value: string };
      photoURL: { value: string };
      bio: { value: string };
      specialistId: { value: string };
    };
    const specialistId = target.specialistId.value;
    const payload = {
      name: target.name.value,
      designation: target.designation.value,
      dateOfBirth: target.dateOfBirth.value,
      photoURL: target.photoURL.value,
      bio: target.bio.value,
    };

    try {
      const data = await axiosPackagePost(
        `/api/specialists/${specialistId}`,
        payload,
        token,
        getData,
        modalToggle
      );
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  const {
    data: beautyPackage,
    isLoading,
    error,
  } = useFetch(`/api/beauty_packages`);

  console.log(beautyPackage);

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
        <form onSubmit={specialistAdd} className='flex flex-col gap-2.5'>
          <div className='flex justify-between gap-5'>
            <div className='flex flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Name
              </label>
              <input
                type='text'
                id='name'
                required
                name='name'
                placeholder='Name.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
            <div className='flex flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Designation
              </label>
              <input
                type='text'
                required
                id='designation'
                name='designation'
                placeholder='Designation.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Date Of Birth
              </label>
              <input
                type='date'
                id='dateOfBirth'
                name='dateOfBirth'
                placeholder='Date Of Birth.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Bio
              </label>
              <input
                type='text'
                id='bio'
                name='bio'
                placeholder='Bio.....'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              />
            </div>
          </div>

          <div className='flex justify-between gap-5'>
            <div className='flex w-full flex-col items-start gap-1.5 '>
              <label htmlFor='name' className='cursor-pointer'>
                Photo Url
              </label>
              <input
                type='text'
                id='photoURL'
                name='photoURL'
                placeholder='photoURL.....'
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
                name='specialistId'
                id='specialistId'
                className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
              >
                {beautyPackage?.map((packages: beautyPackageType) => (
                  <option key={packages._id} value={packages._id} className=''>
                    {packages.title}
                  </option>
                ))}
                =
              </select>
            </div>
          </div>

          <div className='flex gap-5'>
            <Button variant={'primary'} type='submit' size={'full'}>
              Add Specialist
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

export default SpecialistModal;
