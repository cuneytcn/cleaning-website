import { ComponentType } from 'react';

export const icons = {};

export type IconName = keyof typeof icons;

interface Props {
   name: IconName;
   className?: string;
}

export default function Icon({ name, className }: Props) {
   const Component = icons[name] as
      | ComponentType<{ className?: string }>
      | undefined;
   if (!Component) return null;

   return <Component className={className} />;
}
