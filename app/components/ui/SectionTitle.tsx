interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className='mb-20'>{title}</h2>;
};

export default SectionTitle;
