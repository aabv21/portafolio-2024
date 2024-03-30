import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="./logo.png"
        unoptimized
        width={32}
        height={32}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
