import { speciallisType } from '@/types/specialists';

interface SpecialistItemProps {
  item: speciallisType;
}

const SpecialistItem: React.FC<SpecialistItemProps> = ({ item }) => {
  return <section className='sp container'>{item.name}</section>;
};

export default SpecialistItem;
