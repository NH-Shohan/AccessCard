import { Review } from "@/components/Review";
import {
  Handshake,
  HandTap,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import Welcome from "./elements/Welcome";

const Home = () => {
  const cardInfo = [
    {
      icon: HandTap,
      title: "Easy to Use",
      desc: "Tap and go, no hassle",
    },
    {
      icon: ShieldCheck,
      title: "Secure",
      desc: "Your personal data is protected",
    },
    {
      icon: Handshake,
      title: "Versatile",
      desc: "Use for connections",
    },
  ];

  return (
    <div>
      <div className="p-4 xl:grid grid-cols-2 gap-4 h-screen">
        <section className="xl:flex flex-col gap-5 hidden">
          <div className="space-y-6 bg-patterns-blue h-[calc(100vh-260px)] rounded-2xl p-16">
            <h1>
              Access <br /> Your World, <br /> One Tap Away
            </h1>
            <p className="text-blue-400">
              Unlock instant access to your personal or business information
              with a tap!
            </p>

            <Review />
          </div>

          <div className="flex gap-5">
            {cardInfo.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl w-full h-[200px] space-y-4 grid place-content-center"
              >
                <card.icon
                  className="mx-auto"
                  size={48}
                  color="#3C82F6"
                  weight="thin"
                />
                <div className="space-y-2 text-center">
                  <h4 className="text-neutral-50">{card.title}</h4>
                  <small className="text-neutral-500">{card.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-patterns-black w-full h-full rounded-2xl p-4 md:p-16">
          <Welcome />
        </section>
      </div>
    </div>
  );
};

export default Home;
