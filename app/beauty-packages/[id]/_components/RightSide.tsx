import Button from '@/app/components/ui/Button';
import { axiosPackagePost } from '@/app/libs/beautyPackagePost';
import { RootState } from '@/redux/store';
import { beautyPackageType } from '@/types/beautyPackageItem';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface RightSideProps {
  beautyPackage: beautyPackageType;
}

const RightSide: React.FC<RightSideProps> = ({ beautyPackage }) => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  console.log(beautyPackage);

  const handleBooking = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/create/${beautyPackage._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        toast.success('Package Added');
        return res.data;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className='flex flex-col gap-2.5'>
      <h3 className='text-6xl text-blue'>{beautyPackage.title}</h3>
      <p className='w-[75%] text-2xl'>{beautyPackage.description}</p>
      <div className=''>
        {beautyPackage?.speciallist.map((item) => (
          <div className='' key={item._id}>
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
      <p className='flex gap-5 text-2xl font-medium'>
        <span>Category:</span>
        <span className='font-bold text-blue '>{beautyPackage.category}</span>
      </p>
      <div className='flex gap-10'>
        <p className='flex gap-5 text-2xl font-medium'>
          <span>CreateAt:</span>
          <span className='font-bold text-blue '>
            {/* {beautyPackage.createdAt.toLocaleString().toSubString(0, 16)} */}
            10/12/2023
          </span>
        </p>
        <p className='flex gap-5 text-2xl font-medium'>
          <span>UpdateAt:</span>
          <span className='font-bold text-blue '>10/12/2023</span>
        </p>
      </div>
      <p className='text-5xl font-semibold text-blue '>
        ${beautyPackage.price}
      </p>
      <Button size={'auto'} className='cursor-pointer' onClick={handleBooking}>
        Booking Now
      </Button>
    </div>
  );
};

export default RightSide;
