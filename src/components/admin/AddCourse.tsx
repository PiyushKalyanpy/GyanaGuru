"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import { courseFormSchema } from "@/lib/formSchemas";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import TagItem from "../landing/sub_components/TagItem";
import { useRef } from "react";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const skillInputFieldRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      courseId: "",
      title: "",
      description: "",
      headline: "",
      logo_url: "",
      thumbnail: "",
      is_paid: false,
      price: "0",
      price_detail: {
        amount: 0,
        currency: "",
        price_string: "Free",
        currency_symbol: "",
      },
      language: [],
      instructor: {
        name: "",
        designation: "",
        image: "",
      },
      total_modules: 0,
      total_time: 0,
      ratings: {
        rating_count: 0,
        average_rating: 0,
      },
      categories: [],
      requirements: [],
      skills: [],
      course_content_id: "",
      createdAt: "",
      updatedAt: "",
    },
  });

  const onAddCourse = async () => {
    const res = await axios
      .post("/api/course", form.getValues())
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          toast.error(res.data.error);
          return;
        }
      });
  };

  const addItem = (value: string) => {
    form.setValue("categories", [...form.getValues("categories"), value]);
  };

  return (
    <main className="flex flex-col items-center w-full h-screen gap-8 p-4 overflow-x-hidden bg-gray-100">
      <Toaster />
      <div className="flex w-full h-fit place-content-center">
        <section className="flex flex-col w-3/4 gap-8 p-8 bg-white shadow-2xl md:w-3/4 rounded-3xl shadow-gray-200 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-xl font-bold ">Add a new course</h2>
            <p className="text-zinc-600 ">
              Enter your details to add a new course
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onAddCourse)}
              className="flex flex-col gap-4"
            >
              <FormField
                name="courseId"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>CourseId</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="XXX-XXX to be auto generated"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="title" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="headline"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Headline - should be max 30 words"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        Description &#40; max 250 words &#41;
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Description - should be max 250 words"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  );
                }}
              />
              <div className="flex gap-4">
                <FormField
                  name="price"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm text-red-500" />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="price_detail.currency_symbol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={"rupee"}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="rupee">₹</SelectItem>
                          <SelectItem value="dollar">$</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_paid"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel>Is paid</FormLabel>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="logo_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo url</FormLabel>
                    <Input type="text" placeholder="" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image url</FormLabel>
                    <Input type="text" placeholder="" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skillInput"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills</FormLabel>
                    <div className="flex gap-4">
                      <Input
                        type="text"
                        placeholder=""
                        {...field}
                        id="skillInputField"
                      />
                      <Button
                        onClick={(e: any) => {
                          if (form.getValues("skillInput")) {
                            const skills = form.getValues("skills") || [];
                            form.setValue("skills", [...skills, field.value]);
                            form.setValue("skillInput", "");
                            e.preventDefault();
                            document.getElementById("skillInputField")?.focus();
                          }
                        }}
                        className="text-white bg-black"
                      >
                        Add
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap gap-4">
                {form.getValues("skills")?.map((skill, index) => (
                  <div key={index} className="flex gap-4">
                    <TagItem item={skill} />
                  </div>
                ))}
                {form.watch("skills")?.length > 0 && (
                  <div className="flex gap-4 ">
                    <Button
                      onClick={(e: any) => {
                        const skills = form.getValues("skills") || [];
                        form.setValue("skills", skills.slice(0, -1));
                        e.preventDefault();
                      }}
                      className="flex gap-2 text-white bg-black"
                    >
                      <span>Remove </span>
                      <span className="text-red-400">
                        {
                          form.getValues("skills")[
                            form.getValues("skills").length - 1
                          ]
                        }
                      </span>
                    </Button>
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="categoryInput"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories</FormLabel>
                    <div className="flex gap-4">
                      <Input
                        type="text"
                        placeholder=""
                        {...field}
                        id="categoryInput"
                      />
                      <Button
                        onClick={(e: any) => {
                          e.preventDefault();
                          if (form.getValues("categoryInput")) {
                            const categories =
                              form.getValues("categories") || [];
                            form.setValue("categories", [
                              ...categories,
                              field.value,
                            ]);
                            form.setValue("categoryInput", "");
                            document.getElementById("categoryInput")?.focus();
                          }
                        }}
                        className="text-white bg-black"
                      >
                        Add
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap gap-4">
                {form.getValues("categories")?.map((skill, index) => (
                  <div key={index} className="flex gap-4">
                    <TagItem item={skill} />
                  </div>
                ))}
                {form.watch("categories")?.length > 0 && (
                  <div className="flex gap-4 ">
                    <Button
                      onClick={(e: any) => {
                        const categories = form.getValues("categories") || [];
                        form.setValue("categories", categories.slice(0, -1));
                        e.preventDefault();
                      }}
                      className="flex gap-2 text-white bg-black"
                    >
                      <span>Remove </span>
                      <span className="text-red-400">
                        {
                          form.getValues("categories")[
                            form.getValues("categories").length - 1
                          ]
                        }
                      </span>
                    </Button>
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="instructor.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instructor name</FormLabel>
                    <Input type="text" placeholder="" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                onClick={onAddCourse}
                type="submit"
                className="flex gap-2 text-white bg-black"
              >
                Submit
              </Button>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
};

export default AddCourse;
