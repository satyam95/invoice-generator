"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import { createContext, useContext, useEffect, useState } from "react";

interface DeviceContextType {
  isDesktop: boolean;
  isAndroid: boolean;
}

const DeviceContext = createContext<DeviceContextType | null>(null);

export function useDeviceContext() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDeviceContext must be used within a DeviceProvider");
  }
  return context;
}

export function DeviceContextProvider({
  children,
  isDesktop,
  isAndroid,
}: DeviceContextType & { children: React.ReactNode }) {
  const [isDesktopClient, setIsDesktopClient] = useState(isDesktop);
  const isMediaQueryDesktop = useIsDesktop();

  useEffect(() => {
    if (isMediaQueryDesktop !== undefined) {
      setIsDesktopClient(isMediaQueryDesktop);
    }
  }, [isMediaQueryDesktop]);

  return (
    <DeviceContext.Provider value={{ isDesktop: isDesktopClient, isAndroid }}>
      {children}
    </DeviceContext.Provider>
  );
}