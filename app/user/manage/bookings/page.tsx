'use client';
import { RootState } from '@/redux/store';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { bookingType } from '@/types/booking';

const BookingManagePage = () => {
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

  console.log(session?.user.bookings);

  console.log(bookings);

  return <main>BookingManagePage</main>;
};

export default BookingManagePage;
