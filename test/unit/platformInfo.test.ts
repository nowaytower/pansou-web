import { PLATFORM_INFO } from "../../config/plugins";

describe("PLATFORM_INFO", () => {
  it("应包含新增的前端平台类型映射", () => {
    expect(PLATFORM_INFO.guangya).toEqual({
      name: "光鸭云盘",
      color: "#14b8a6",
      icon: "/icons/guangya.svg",
    });

    expect(PLATFORM_INFO.pikpak).toEqual({
      name: "PikPak",
      color: "#8b5cf6",
      icon: "/icons/pikpak.svg",
    });

    expect(PLATFORM_INFO.magnet).toEqual({
      name: "磁力链接",
      color: "#ef4444",
      icon: "/icons/magnet.svg",
    });

    expect(PLATFORM_INFO.ed2k).toEqual({
      name: "电驴链接",
      color: "#111827",
      icon: "/icons/ed2k.svg",
    });
  });

  it("应继续保留已有平台映射", () => {
    expect(PLATFORM_INFO.aliyun?.name).toBe("阿里云盘");
    expect(PLATFORM_INFO.quark?.name).toBe("夸克网盘");
    expect(PLATFORM_INFO.baidu?.name).toBe("百度网盘");
  });
});
