"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import CompleteProfile from "../elements/CompleteProfile";
import CreateAccount from "../elements/CreateAccount";
import Stepper from "../elements/Stepper";
import VerifyEmail from "../elements/VerifyEmail";

const REGISTER_STEPS = [
  {
    name: "Create Account",
    Component: CreateAccount,
  },
  {
    name: "Verify Email",
    Component: VerifyEmail,
  },
  {
    name: "Complete Profile",
    Component: CompleteProfile,
  },
];

const Register = () => {
  return (
    <main className="h-screen w-screen p-2 md:p-4">
      <section className="bg-patterns-black w-full h-full rounded-2xl p-2 pt-8 md:p-16 overflow-y-scroll">
        <Image src={logo} alt="logo" priority />

        <Stepper stepsConfig={REGISTER_STEPS} />
      </section>
    </main>
  );
};

export default Register;
