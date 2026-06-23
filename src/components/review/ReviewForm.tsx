"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { reviewSchema, ReviewInput } from "@/lib/validators/review";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ReviewForm() {
  const form = useForm<ReviewInput>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      repoUrl: "",
    },
  });

  const onSubmit = async (
  data: ReviewInput
) => {
  try {
    const response = await fetch(
      "/api/reports",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    const result =
      await response.json();

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl"
    >
      <div>
        <Input
          placeholder="https://github.com/vercel/next.js"
          {...form.register("repoUrl")}
        />

        {form.formState.errors.repoUrl && (
          <p className="text-sm text-red-500 mt-2">
            {form.formState.errors.repoUrl.message}
          </p>
        )}
      </div>

      <Button type="submit">
        Analyze Repository
      </Button>
    </form>
  );
}   