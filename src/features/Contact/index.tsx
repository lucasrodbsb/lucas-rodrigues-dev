"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SOCIAL_LINKS } from "@/lib/constants/site";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { cn } from "@/lib/utils/cn";
import { useContactForm } from "./hooks";
import { contactStyles } from "./styles";

const socialIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
} as const;

function formatContactHref(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/^mailto:/, "");
}

export function Contact() {
  const t = useTranslations("contact");
  const { ref, inView } = useInViewAnimation();
  const { form, status, update, submit } = useContactForm();

  return (
    <section
      id="contact"
      className={contactStyles.section}
      aria-label={t("ariaLabel")}
    >
      <div className={contactStyles.inner}>
        <motion.div
          ref={ref}
          className={contactStyles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={slideInLeft}>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
              {t("label")}
            </span>
            <h2 className={contactStyles.heading}>
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
                {" "}
                {t("titleHighlight")}
              </span>
            </h2>
            <p className={contactStyles.description}>{t("description")}</p>

            <div className="mt-10 space-y-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactStyles.socialCard}
                  >
                    <div className={contactStyles.socialIcon}>
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className={contactStyles.socialLabel}>{social.label}</p>
                      <p className={contactStyles.socialUrl}>
                        {formatContactHref(social.href)}
                      </p>
                    </div>
                    <ArrowUpRight size={16} className="text-dim" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={slideInRight}>
            <Card className="p-8 md:p-10" hover={false}>
              <form onSubmit={submit} className={contactStyles.form}>
                <div>
                  <label htmlFor="name" className="sr-only">
                    {t("namePlaceholder")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t("namePlaceholder")}
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={contactStyles.input}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    {t("emailPlaceholder")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={contactStyles.input}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    {t("messagePlaceholder")}
                  </label>
                  <textarea
                    id="message"
                    placeholder={t("messagePlaceholder")}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={cn(contactStyles.input, contactStyles.textarea)}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  magnetic
                  disabled={status === "opening"}
                  className="w-full"
                >
                  {status === "opening" ? (
                    t("sending")
                  ) : status === "opened" ? (
                    t("sent")
                  ) : (
                    <>
                      {t("send")} <WhatsAppIcon size={16} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
