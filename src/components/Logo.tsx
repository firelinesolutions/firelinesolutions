import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export function Logo({
  className = "h-8 w-auto sm:h-10 md:h-14",
  height = 32,
}: LogoProps) {
  return (
    <Image
      src="/fireline-logo.png"
      alt="Fireline Solutions"
      width={height}
      height={height}
      sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 56px"
      className={`object-contain ${className}`}
      priority
    />
  );
}
