import { HERO_VARIANT } from "./config";
import { HeroLegacy } from "./HeroLegacy";
import { HeroPortrait } from "./HeroPortrait";

export { HeroLegacy } from "./HeroLegacy";
export { HeroPortrait } from "./HeroPortrait";
export { HERO_VARIANT, type HeroVariant } from "./config";

export function Hero() {
  return HERO_VARIANT === "legacy" ? <HeroLegacy /> : <HeroPortrait />;
}
