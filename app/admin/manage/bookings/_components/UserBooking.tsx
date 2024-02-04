import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserBooking = ({
  allBookings,
  token,
}: {
  allBookings: string[];
  token: string | undefined;
}) => {
  const [bookings, setBookings] = useState<any>();

  // get My Bokking
  //   const getData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/read/${allBookings}`,

  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (res.data) {
  //         setBookings(res.data);
  //       }
  //     } catch (error) {}
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  console.log(bookings);

  return <div>all</div>;
};

export default UserBooking;
