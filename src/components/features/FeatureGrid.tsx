import { secondFont } from '@/config/fonts';
import { JSX } from 'react';

interface FeatureGridProps {
  title: string;
  text: string;
}

export const FeatureGrid = ({ title, text }: FeatureGridProps): JSX.Element => {
  return (
    <div className="w-full max-w-sm py-5 px-3 bg-(--gray-200) dark:bg-(--gray-800) rounded-xl">
      <h4 className={`${secondFont.className} font-medium`}>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
