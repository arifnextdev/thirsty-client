import { beautyPackageType } from '@/types/beautyPackageItem';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SectionTitle from '@/app/components/ui/SectionTitle';

interface BeautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<BeautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp container'>
      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-5'>
          <LeftSide images={item.images} />
        </div>
        <div className='col-span-7 '>
          <RightSide beautyPackage={item} />
        </div>
      </div>
    </section>
  );
};

export default BeautyPackageItem;
