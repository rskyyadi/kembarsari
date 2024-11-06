import Image from 'next/image';

import LargeModel from '../../public/assets/images/large-model.png';
import SmallModel from '../../public/assets/images/small-model.png';

export const JumbotronSection = () => (
  <section className="mx-4 mt-[80px] rounded-[25px] bg-[#F2F0F1] text-center font-anton text-black lg:mx-12 lg:mt-[130px] lg:px-12 lg:pt-12 lg:text-left">
    <h2 className="px-6 pt-12 text-[30px] uppercase leading-8 lg:pt-[80px] lg:text-[45px] lg:leading-[45px]">
      Find Clothes That
      <br />
      Matches Your Style
    </h2>
    <p className="leading-1 px-6 font-antonio text-[14px] text-[#758694] lg:w-[400px]">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </p>

    <button className="mt-8 w-[88%] rounded-full bg-black py-3 text-white lg:ml-6 lg:w-[20%]">
      Send Message
    </button>

    <Image src={SmallModel} alt="model" className="lg:hidden" />
    <Image
      src={LargeModel}
      alt="model"
      className="ml-auto mt-[-330px] hidden w-[80rem] lg:flex"
    />
  </section>
);
