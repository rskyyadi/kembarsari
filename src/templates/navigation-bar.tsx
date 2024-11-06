import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { SiShopee } from 'react-icons/si';
import { Link } from 'react-scroll';

import LogoKS from '../../public/assets/images/logo-warna.png';

export const NavigationBar = () => {
  const sicialMediaStyle =
    'bg-[#C70039] hover:bg-black duration-300 flex items-center justify-center rounded-[50%] h-[35px] w-[35px] cursor-pointer';

  return (
    <nav className="fixed top-0 w-full font-anton">
      <header className="bg-black text-center">
        <h2 className="py-1 text-[10px] text-white lg:py-2 lg:text-[14px]">
          Welcome to Kembar Sari Official Website
        </h2>
      </header>
      <header className="z-[1000000] flex items-center justify-between bg-white px-4 py-1 lg:px-12 lg:py-4">
        <section className="flex items-center gap-2 py-2 text-[17px] uppercase text-black lg:text-[30px]">
          <Image
            src={LogoKS}
            alt="logo"
            className="size-[30px] lg:size-[40px]"
          />
          <span className="text-nowrap">Kembarsari Songket</span>
        </section>
        <section className="hidden items-center gap-5 py-2 font-antonio uppercase text-black lg:flex">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            Home
          </Link>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            About
          </Link>
          <Link
            to="merk"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            Shop
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            On Sale
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            New Arrivals
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="border-b-2 border-blue-500"
          >
            Brands
          </Link>
        </section>
        <section className="hidden gap-2 lg:flex">
          <section className={sicialMediaStyle}>
            <FaFacebookF className="text-white" />
          </section>
          <section className={sicialMediaStyle}>
            <AiFillInstagram className="text-white" />
          </section>
          <section className={sicialMediaStyle}>
            <FaFacebookF className="text-white" />
          </section>
          <section className={sicialMediaStyle}>
            <SiShopee className="text-white" />
          </section>
          <section className={sicialMediaStyle}>
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#FFFFFF"
                fill-rule="evenodd"
                d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                clip-rule="evenodd"
              />
            </svg>
          </section>
        </section>
        <section className="lg:hidden">
          <IoMenu className="size-[25px]" />
        </section>
      </header>
    </nav>
  );
};
