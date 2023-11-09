import { beautyPackageType } from '@/types/beautyPackageItem';

interface BeautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<BeautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp container'>
      <h3>{item.title}</h3>
    </section>
  );
};

export default BeautyPackageItem;
