import Image from 'next/image';
import LogoKS from '../../public/assets/images/logo-warna.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image src={LogoKS} alt="logo" width={size} height={size} />
    </span>
  );
};

export { Logo };
