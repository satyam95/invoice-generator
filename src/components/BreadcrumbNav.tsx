"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const Breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
];

export function BreadcrumbNav() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment.length > 0);

  const breadcrumbMap = Object.fromEntries(
    Breadcrumbs.map((item) => [item.href, item.label])
  );

  const homeLabel = breadcrumbMap["/"] || "Home";
  const homeItem = {
    label: homeLabel,
    href: "/",
    isCurrent: segments.length === 0,
  };

  const segmentItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = breadcrumbMap[href] || toTitleCase(segment);
    const isCurrent = index === segments.length - 1;
    return { label, href, isCurrent };
  });

  const breadcrumbItems = [homeItem, ...segmentItems];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem className={item.isCurrent ? "" : "hidden md:block"}>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function toTitleCase(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
