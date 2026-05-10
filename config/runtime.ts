const DEFAULT_API_BASE = "/api";
const DEFAULT_SITE_URL = "https://panhub.shenzjd.com";

function readEnvValue(value?: string) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

export function getPublicRuntimeConfig(env: Record<string, string | undefined> = process.env) {
  return {
    apiBase: readEnvValue(env.NUXT_PUBLIC_API_BASE) || DEFAULT_API_BASE,
    siteUrl: readEnvValue(env.NUXT_PUBLIC_SITE_URL) || DEFAULT_SITE_URL,
  };
}

export { DEFAULT_API_BASE, DEFAULT_SITE_URL };
