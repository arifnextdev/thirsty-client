import { beautyPackageType } from '@/types/beautyPackageItem';
import { speciallisType } from '@/types/specialists';
import { userType } from '@/types/user';
import axios from 'axios';
import toast from 'react-hot-toast';

export const axiosPackagePost = async (
  endPoint: string,
  data:
    | Pick<
        beautyPackageType,
        'title' | 'description' | 'price' | 'images' | 'category'
      >
    | Pick<
        speciallisType,
        'name' | 'designation' | 'dateOfBirth' | 'photoURL' | 'bio'
      >,
  token: string = '',
  getData: () => void,
  modalToggle: (data: boolean) => void
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${endPoint}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data) {
      getData();
      modalToggle(false);
      toast.success('Package Added');
      return res.data;
    }
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  }
};
