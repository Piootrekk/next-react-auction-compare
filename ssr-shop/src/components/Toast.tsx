"use client";

import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type ToastProps = {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: type.toUpperCase(),
      description: message,
      variant: type === "success" ? "default" : "destructive",
    });
  }, []);

  return null;
};

export default Toast;
