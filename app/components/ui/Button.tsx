import { cn } from '@/app/libs/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

export const buttonVariants = cva(
  ' eq disabled:text-dark inline-block whitespace-normal rounded-xl border  px-5 py-2.5 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray',
  {
    variants: {
      variant: {
        primary:
          'bg-black text-white border-black hover:bg-black/90 hover:border-black/90 ',
        secondary:
          'bg-blue text-white border-blue hover:bg-blue/90 hover:border-blue/90 ',
        danger:
          'bg-red text-white border-red hover:bg-red/90 hover:border-red/90',
        outline:
          'bg-transparent text-black border-black hover:bg-black hover:text-white',
      },
      size: {
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'auto',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  variant,
  size,
  children,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        isLoading && 'flex items-center gap-2.5 ',
        buttonVariants({ variant, size })
      )}
    >
      {isLoading && <Loader2 size={20} className='animate-spin' />}
      {children}
    </button>
  );
};

export default Button;
