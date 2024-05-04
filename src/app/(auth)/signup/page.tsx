"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HomeNav from "@/components/navbar/HomeNav";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ReloadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirm_password: z.string().min(6),
  name: z.string().min(2),
});

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
    },
  });

  const onSignup = async () => {
    const res = await axios
      .post("/api/auth/signup", form.getValues())
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success("Signup successful");
          router.push("/login");
        }
      });
  };
  return (
    <main className="flex flex-col items-center w-screen min-h-screen gap-8 overflow-x-hidden bg-gray-100">
      <Toaster />
      <HomeNav />
      <div className="flex items-center w-full h-full place-content-center">
        <section className="flex flex-col w-3/4 gap-8 p-8 bg-white shadow-2xl md:w-1/2 lg:w-1/4 rounded-3xl shadow-gray-200 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-xl font-bold ">Signup</h2>
            <p className="text-zinc-600 ">
              Enter your details to continue with Gyanaguru{" "}
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSignup)}
              className="flex flex-col gap-4"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="John Dani" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Password" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="confirm_password"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <Button
                disabled={loading}
                type="submit"
                className="flex gap-2 text-white bg-black"
              >
                {loading && (
                  <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
                )}
                Submit
              </Button>

              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Alerady have an account? Login here
              </Link>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
};

export default Signup;
