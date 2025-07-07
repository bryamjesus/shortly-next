import dynamicSettings from '@/data/feature.json';
import { Container } from '../ui/container/Container';
import { SubTitle } from '../ui/title/SubTitle';

export const Features = () => {
  console.log(dynamicSettings);
  return (
    <section id="features" className="py-20 border-t border-general">
      <Container>
        <SubTitle subtitle="¿Por qué elegir Shortly?" />
        <p className=" text-gray-600 dark:text-gray-400">
          La solucion mas simple y efectiva para acortar tus enlaces
        </p>
        <div className="mt-16">
          {dynamicSettings.feature.map((setting) => (
            <li key={setting.id}>
              <strong>{setting.name}:</strong> {setting.description}
            </li>
          ))}
        </div>
      </Container>
    </section>
  );
};
