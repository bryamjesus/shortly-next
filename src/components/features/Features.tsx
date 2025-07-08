import dynamicSettings from '@/data/feature.json';
import { Container } from '../ui/container/Container';
import { SubTitle } from '../ui/title/SubTitle';
import { FeatureGrid } from './FeatureGrid';

export const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-general">
      <Container>
        <SubTitle subtitle="¿Por qué elegir Shortly?" />
        <p className=" text-gray-600 dark:text-gray-400">
          La solucion mas simple y efectiva para acortar tus enlaces
        </p>
        <div className="mt-16 flex flex-wrap gap-4 justify-center lg:justify-between">
          {dynamicSettings.feature.map(({ id, name, description }) => (
            <FeatureGrid key={id} title={name} text={description} />
          ))}
        </div>
      </Container>
    </section>
  );
};
