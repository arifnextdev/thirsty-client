import { bookingType } from '@/types/booking';
import UserBooking from './UserBooking';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { userType } from '@/types/user';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

interface BookingsProps {
  booking: beautyPackageType;
  user: userType;
  token: string | undefined;
  bookingToggle: (data: any) => void;
}

const Bookings: React.FC<BookingsProps> = ({
  booking,
  token,
  user,
  bookingToggle,
}) => {
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        bookingToggle(res.data);
      }
    } catch (error) {}
  };

  return (
    <div className='overflow-hidden rounded-xl  bg-gray shadow-sm'>
      <div className='w-62 h-36 '>
        <Image
          src={booking?.images[0]}
          alt={booking?.title}
          width={500}
          height={200}
          className='h-full w-full overflow-hidden object-cover'
        />
      </div>
      <div className='details p-5'>
        <h3>{booking?.title}</h3>
        <p>{booking?.description.substring(0, 60)}</p>
        <div className='flex justify-between'>
          <p>{booking?.price}</p>
          <Button variant={'danger'} onClick={() => handleDelete(booking?._id)}>
            <FaTrash />
          </Button>
        </div>
      </div>

      {/* <UserBooking allBookings={booking} token={token} /> */}
    </div>
  );
};

export default Bookings;
