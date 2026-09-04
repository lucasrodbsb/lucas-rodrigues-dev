import type { ButtonProps } from "./types";
import { buttonStyles } from "./styles";

export function getButtonClassName({
  variant = "primary",
  size = "md",
  className = "",
}: Pick<ButtonProps, "variant" | "size" | "className">): string {
  return [buttonStyles.base, buttonStyles.variants[variant], buttonStyles.sizes[size], className]
    .filter(Boolean)
    .join(" ");
}
