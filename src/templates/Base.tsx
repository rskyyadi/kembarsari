import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { JumbotronSection } from './jombotron-section';
import { NavigationBar } from './navigation-bar';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavigationBar />
    <JumbotronSection />
    <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
