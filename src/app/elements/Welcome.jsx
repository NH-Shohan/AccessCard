import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Rajdhani } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const Welcome = () => {
  const points = [
    "Tap AccessCard",
    "Fill in your Details",
    "Start Connecting!",
  ];
  return (
    <div className="flex flex-col justify-evenly sm:justify-between h-full">
      <Image src={logo} alt="logo" />

      <div className="space-y-2">
        <h2>Welcome!</h2>
        <p className="text-neutral-500">
          Tap your card, enter your details, and you’re ready to unlock your
          digital world.
        </p>
      </div>

      <div className="grid gap-10">
        {points.map((point, index) => (
          <div key={index} className="flex items-end">
            <div className="w-[108px] sm:w-[10vw]">
              <p
                className={`${rajdhani.className} text-8xl sm:text-[8vw] leading-[72%] font-bold bg-gradient-to-br from-neutral-800 to-neutral-700 text-transparent bg-clip-text`}
              >
                0{index + 1}
              </p>
            </div>
            <h5 className="block sm:hidden text-nowrap">{point}</h5>
            <h4 className="hidden sm:block text-nowrap">{point}</h4>
          </div>
        ))}
      </div>

      <Link href="/register">
        <Button className="w-56">Continue</Button>
      </Link>
    </div>
  );
};

export default Welcome;
