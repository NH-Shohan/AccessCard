"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope, Key } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CreateAccount = ({
  isComplete,
  currentStep,
  handleNext,
  handlePrev,
  stepsConfig,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const handleClickNext = () => {
    handleNext();
  };

  return (
    <div className="bg-neutral-800 rounded-3xl p-4 shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <h5>Create Account</h5>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-neutral-400">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      Icon={Envelope}
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-neutral-400">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      Icon={Key}
                      placeholder="Choose a strong password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm-password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-neutral-400">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      Icon={Key}
                      placeholder="Re-enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            onClick={handleClickNext}
            className="w-full mt-8"
            type="submit"
          >
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateAccount;
