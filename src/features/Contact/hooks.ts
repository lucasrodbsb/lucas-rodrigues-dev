"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/constants/site";
import type { ContactFormData } from "@/lib/types/content";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "opening" | "opened">("idle");

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("opening");

    const text = t("whatsappMessage", {
      name: form.name,
      email: form.email,
      message: form.message,
    });

    const url = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("opened");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 3000);
  };

  return { form, status, update, submit };
}
