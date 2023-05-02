
import Zod from "zod";
import * as LdKeys from "../../feature-flag-config";

export const Flags = Zod.object({
  [LdKeys.launchBannerFlagKey]: Zod.boolean(),
  [LdKeys.profileSectionFlagKey]: Zod.enum(["not-enrolled", "control", "variation"]),
  [LdKeys.detailsCtaFlagKey]: Zod.string(), // Maybe there's a way to tighten this up also
});

export type FlagsType = Zod.infer<typeof Flags>
