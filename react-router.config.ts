import type { Config } from "@react-router/dev/config";
import { init } from "react-router-mdx/server";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
