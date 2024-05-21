"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { courseStore } from "@/lib/store/course.store";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddImage = () => {
  const form = useForm();
  const setDetails = courseStore((state: any) => state.setDetails);
  const courseDetails = courseStore((state: any) => state.courseDetails);

  const onSubmit = () => {
    setDetails(form.getValues());
  };

  useEffect(() => {
    form.setValue("logo", courseDetails.logo);
    form.setValue("thumbnail", courseDetails.thumbnail);
  }, [courseDetails]);

  return (
    <div className="w-full ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full "
        >
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <Input type="url" placeholder="logo url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input type="url" placeholder="thumbnail url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddImage;
