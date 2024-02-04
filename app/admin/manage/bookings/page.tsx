'use client';
import SectionTitle from '@/app/components/ui/SectionTitle';
import { RootState } from '@/redux/store';
import { bookingType } from '@/types/booking';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Bookings from './_components/Bookings';

const ManageBooking = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;

  const [bookings, setBookings] = useState<bookingType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  // get My Bokking
  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page,
            pageSize: 5,
            search: searchTerm,
          },
        }
      );

      if (res.data) {
        setBookings(res.data);
      }
    } catch (error) {}
  };

  const bookingToggle = (data: any) => [setBookings(data)];

  useEffect(() => {
    getData();
  }, [page]);

  console.log(bookings);

  return (
    <main>
      <div className='sp container'>
        <SectionTitle title='Manage Bookings' />
        <div className=' grid grid-cols-4 gap-3 '>
          {bookings?.map((booking) => (
            <Bookings
              key={booking._id}
              booking={booking.beautyPackage}
              user={booking.user}
              token={token}
              bookingToggle={bookingToggle}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ManageBooking;
