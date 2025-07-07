import { LinkButton } from '../ui/button/LinkButton';
import { Container } from '../ui/container/Container';
import { Title } from '../ui/title/Title';

export const Header = () => {
  return (
    <header className={`border-b border-general`}>
      <Container className="py-20">
        <Title
          title="Acorta y comparte tus enlaces en segundos."
          className="font-medium"
        />
        <p className="max-w-(--breakpoint-sm) pt-6 text-gray-600 text-lg/7 font-medium dark:text-gray-400">
          Acorta URLs largas en un clic y compártelas al instante. Haz que tus
          enlaces luzcan limpios y fáciles de recordar.
        </p>
        <LinkButton href="#formUrl" text="Acortar" className="max-w-[375px]" />
      </Container>
    </header>
  );
};
