import { userType } from '@/types/user';

interface ModalPros {
  item: userType;
}

const Modal: React.FC<ModalPros> = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
};

export default Modal;
