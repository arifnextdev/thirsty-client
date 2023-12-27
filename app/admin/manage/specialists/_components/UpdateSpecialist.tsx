import { speciallisType } from '@/types/specialists';

interface UpdateSpecialistProps {
  specialist: speciallisType;
  isModalOpen: boolean | null;
  token: string | undefined;
  modalToggle: (data: boolean) => void;
  getData: () => void;
}

const UpdateSpecialist: React.FC<UpdateSpecialistProps> = ({
  specialist,
  isModalOpen,
  token,
  modalToggle,
  getData,
}) => {
  return <div>UpdateSpecialist</div>;
};

export default UpdateSpecialist;
