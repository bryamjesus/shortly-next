import { secondFont } from '@/config/fonts';

interface Props {
  subtitle: string;
  classname?: string;
}

export const SubTitle = ({ subtitle, classname }: Props) => {
  return (
    <h2
      className={`text-[2rem]/10 font-medium tracking-tighter text-balance pb-4 ${secondFont.className} ${classname}`}>
      {subtitle}
    </h2>
  );
};
