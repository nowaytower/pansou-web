import { describe, it, expect } from "vitest";
import { getPublicRuntimeConfig } from "../../config/runtime";

describe("getPublicRuntimeConfig", () => {
  it("在未提供环境变量时返回默认前后端同域配置", () => {
    const config = getPublicRuntimeConfig({});

    expect(config).toEqual({
      apiBase: "/api",
      siteUrl: "https://panhub.shenzjd.com",
    });
  });

  it("优先读取前后端分离所需的公开环境变量", () => {
    const config = getPublicRuntimeConfig({
      NUXT_PUBLIC_API_BASE: "https://api.example.com/v1",
      NUXT_PUBLIC_SITE_URL: "https://web.example.com",
    });

    expect(config).toEqual({
      apiBase: "https://api.example.com/v1",
      siteUrl: "https://web.example.com",
    });
  });

  it("忽略只包含空白字符的环境变量，回退到默认值", () => {
    const config = getPublicRuntimeConfig({
      NUXT_PUBLIC_API_BASE: "   ",
      NUXT_PUBLIC_SITE_URL: "",
    });

    expect(config).toEqual({
      apiBase: "/api",
      siteUrl: "https://panhub.shenzjd.com",
    });
  });
});
