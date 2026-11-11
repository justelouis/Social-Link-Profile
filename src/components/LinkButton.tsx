import type { ReactNode } from 'react';

export const LinkButton = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <div>
      <a href={link} target="blank">
        {children}
      </a>
    </div>
  );
};
