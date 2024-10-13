import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmail = ({
  isComplete,
  currentStep,
  handleNext,
  handlePrev,
  stepsConfig,
}) => {
  const handleClickNext = () => {
    handleNext();
  };

  return (
    <div className="bg-neutral-800 rounded-3xl p-4 shadow-md space-y-6">
      <div className="space-y-1">
        <h5>We just sent you an E-mail</h5>
        <small className="text-neutral-500">
          Code sent to nh******6@gmail.com
        </small>
      </div>

      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div>
        <small className="text-neutral-400">
          Didn’t received code? <span className="text-blue-500">30s</span>
        </small>
      </div>

      <Button onClick={handleClickNext} className="w-full">
        Verify Email
      </Button>
    </div>
  );
};

export default VerifyEmail;
