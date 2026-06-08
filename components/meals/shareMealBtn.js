"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const ShareMealBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sharing..." : "Share Meal"}
    </button>
  );
};

export default ShareMealBtn;
