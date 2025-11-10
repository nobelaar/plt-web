import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
}

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#00d4ff] text-[#0a1b2e] hover:bg-[#29dcff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d4ff]',
  outline:
    'border border-[#00d4ff]/60 text-[#00d4ff] hover:border-[#00d4ff] hover:text-[#7de6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d4ff]'
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}
