"use server";

import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export const checkDeviceUserAgent = async () => {
  if (typeof process === "undefined") {
    throw new Error("[Server method] you are importing a server-only module outside of server");
  }

  const headersInstance = await headers(); // Await the headers promise
  const ua = headersInstance.get("user-agent"); // Now access get method

  const parser = new UAParser(ua || "");

  const device = parser.getDevice();
  const os = parser.getOS();

  const isTablet = device.type === "tablet" || (os.name === "iOS" && !ua?.includes("iPhone") && !ua?.includes("iPod"));
  const isMobile = device.type === "mobile";
  const isAndroid = os.name === "Android";
  const isDesktop = !isTablet && !isMobile;

  return { isDesktop, isAndroid };
};