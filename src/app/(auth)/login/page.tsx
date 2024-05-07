"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import axios from "axios";
import { Toaster, toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { signIn, useSession } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  const onLogin = async () => {
    const response = await signIn("credentials", {
      email: form.getValues().email,
      password: form.getValues().password,
    });
  };

  return (
    <main className="flex flex-col items-center w-screen h-screen gap-8 overflow-x-hidden bg-gray-100">
      <HomeNav />
      <Toaster />
      <div className="flex items-center w-full h-full place-content-center">
        <section className="flex flex-col w-3/4 gap-8 p-8 bg-white shadow-2xl md:w-1/2 lg:w-1/4 rounded-3xl shadow-gray-200 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-xl font-bold ">Login</h2>
            <p className="text-zinc-600 ">
              Enter your details to continue with Gyanaguru{" "}
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onLogin)}
              className="flex flex-col gap-4"
            >
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
                href="/signup"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Don't have an account? Signup here
              </Link>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
};

export default Login;
