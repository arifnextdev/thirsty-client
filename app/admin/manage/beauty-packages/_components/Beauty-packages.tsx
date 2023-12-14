import { beautyPackageType } from '@/types/beautyPackageItem';

interface beautyPackagesProps {
  beautyPackage: beautyPackageType;
  token: string | undefined;
}

const BeautyPackage: React.FC<beautyPackagesProps> = ({
  beautyPackage,
  token,
}) => {
  console.log(beautyPackage);

  return (
    <section>
      <h1>{beautyPackage.title}</h1>
    </section>
  );
};

export default BeautyPackage;
