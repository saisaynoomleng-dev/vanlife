// bounded Type
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

// title
export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'lg' | 'md' | 'sm';
};

// call to action
export type CallToActionProps = {
  href: string;
  children: React.ReactNode;
  variant: 'orange' | 'black';
  className?: string;
};
