import React from 'react';

interface BottomLink {
  url: string;
  text: string;
}

interface FooterProps {
  copyright: string;
  bottomLinks: BottomLink[];
}

const Footer: React.FC<FooterProps> = ({ copyright, bottomLinks }) => {
  return (
    <footer className="z-20 mt-24 flex flex-col justify-between gap-4 border-t pt-4 pb-8 px-12 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
      <p>{copyright}</p>
      <ul className="flex gap-4">
        {bottomLinks.map((link, linkIdx) => (
          <li key={linkIdx} className="underline hover:text-primary">
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;