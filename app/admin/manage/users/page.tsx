import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import AllUser from './_components/AllUser';

const ManageUsers = () => {
  return (
    <div className='sp'>
      <AllUser />
    </div>
  );
};

export default ManageUsers;
