import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();
  const session = useSelector(
    (state: RootState) => state.auth?.userAndToken?.user
  );

  if (session) {
    const destination = '/';

    router.replace(destination);
  }
  if (!session) {
    return <>{children}</>;
  }
};

export default AuthLayout;
