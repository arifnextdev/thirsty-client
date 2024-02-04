'use client';
import Button from '@/app/components/ui/Button';
import SectionTitle from '@/app/components/ui/SectionTitle';
import { RootState } from '@/redux/store';
import { speciallisType } from '@/types/specialists';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllSpecialist from './_components/AllSpecialist';
import SpecialistModal from './_components/SpecialistModal';

export default function Specilist() {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [specialists, setSpecialists] = useState<speciallisType[]>([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/specialists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        setSpecialists(res.data);
      }
    } catch (error) {}
  };

  console.log(specialists);

  //Modal
  const modalToggle = (data: boolean) => {
    setIsModalOpen(data);
    setIsOverlayOpen(data);
  };

  return (
    <main>
      <div className='sp container relative'>
        <SectionTitle title='Specialist Manage' />
        <div className='flex justify-between'>
          <div className=''>
            <input type='text' placeholder='Search Package' />
          </div>
          <div className=''>
            <Button variant={'secondary'} onClick={() => modalToggle(true)}>
              Add Package
            </Button>
          </div>
        </div>
        <hr className='my-3 text-blue' />
        <div className='flex flex-col gap-3'>
          {specialists?.map((specialist) => (
            <AllSpecialist
              key={specialist._id}
              token={token}
              specialist={specialist}
              getData={getData}
              modalToggle={modalToggle}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className='absolute'>
          <SpecialistModal
            isModalOpen={isModalOpen}
            token={token}
            modalToggle={modalToggle}
            getData={getData}
          />
        </div>
      )}

      {/* OVERLay  */}
      <div
        onClick={() => modalToggle(false)}
        className={`overlay fixed bottom-0 left-0 right-0 top-0 z-[1] h-screen w-screen bg-blue/20 blur-2xl ${
          isOverlayOpen ? '' : 'hidden'
        }`}
      ></div>
    </main>
  );
}
