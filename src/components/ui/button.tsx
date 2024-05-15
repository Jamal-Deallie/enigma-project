import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

const loadingVariants = cva('absolute inline-flex items-center', {
  variants: {
    intent: {
      default: ['border-black'],
      primary: ['border-white'],
      outline_primary: ['border-primary'],
      outline_secondary: ['border-secondary'],
      secondary: ['border-gray-950'],
      destructive: ['border-white'],
      ghost: ['border-gray-950'],
      link: ['border-indigo'],
    },
  },
});

const Loading = ({ intent }: VariantProps<typeof loadingVariants>) => (
  <div className={loadingVariants({ intent})}>
    <div className='h-4 w-4 animate-spin rounded-full border-2 border-[inherit] border-b-transparent' />
  </div>
);

const buttonVariants = cva(
  'inline-flex items-center justify-center capitalize disabled:pointer-events-none min-w-fit font-rubik',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
      size: {
        sm: 'px-2.5 py-1.5 text-base',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-base lg:text-lg',
        xl: 'px-6 py-3 text-base lg:text-xl',
      },

      borderRadius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent,
      size,
      borderRadius,
      asChild = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ intent, size, className, borderRadius })
        )}
        ref={ref}
        {...props}>
        {loading && <Loading intent={intent} />}
        {props.children && (
          <span className={cn('truncate', loading && 'opacity-0')}>
            {props.children}
          </span>
        )}
      </Comp>
    );
  }
);
export { Button, buttonVariants, Loading, loadingVariants };
