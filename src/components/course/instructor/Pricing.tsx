"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { courseStore } from "@/lib/store/createCourse.store";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useEffect } from "react";

const Pricing = () => {
  const form = useForm();
  const setDetails = courseStore((state: any) => state.setDetails);
  const courseDetails = courseStore((state: any) => state.courseDetails);

  useEffect(()=> {
    form.setValue("price", courseDetails.price)
  }, [courseDetails])

  const onSubmit = () => {
    setDetails(form.getValues());
  };

  return (
    <div className="w-full ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full "
        >
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="price" {...field} />
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

export default Pricing;
