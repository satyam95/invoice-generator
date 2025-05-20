import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="max-w-5xl mx-auto">
        <div className="py-4 px-16">
          <div className="py-20">
            <div className="flex items-start gap-40">
              <Image src="/logo.png" alt="logo" width={152} height={28} />
              <div className="flex flex-col gap-4">
                <h3 className="text-[#0A0A0B] text-sm font-semibold">
                  Support
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-[#3A4248] text-sm">Pricing</li>
                  <li className="text-[#3A4248] text-sm">Documentation</li>
                  <li className="text-[#3A4248] text-sm">Subscribe waitlist</li>
                  <li className="text-[#3A4248] text-sm">Download</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#0A0A0B] text-sm font-semibold">
                  Guides
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-[#3A4248] text-sm">Privacy</li>
                  <li className="text-[#3A4248] text-sm">Terms</li>
                  <li className="text-[#3A4248] text-sm">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E1E4E7]">
        <div className="max-w-5xl mx-auto">
          <div className="py-4 px-16">
            <div className="flex items-center justify-between">
              <div className="text-[#697783] text-sm">
                © {new Date().getFullYear()} InvoiceGen. All rights reserved.
              </div>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
