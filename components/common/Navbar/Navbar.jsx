import Button from "@components/ui/Button";
import Container from "@components/ui/Container";
import { useUI } from "@components/ui/context";
import MenuButton from "@components/ui/MenuButton";
import Sidebar from "@components/ui/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import MenuSidebarView from "./MenuSidebarView";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { closeSidebarIfPresent, setSidebarView, openSidebar } = useUI();
  const categories = [
    { name: "Services", slug: "our-services" },
    { name: "About", slug: "about" },
  ];
  const navBarlinks = categories.map((c) => ({
    label: c.name,
    href: `/${c.slug}`,
  }));

  const SidebarView = ({ sidebarView, closeSidebar, links }) => {
    return (
      <Sidebar onClose={closeSidebar}>
        {sidebarView === "MOBILE_MENU_VIEW" && (
          <MenuSidebarView links={links} />
        )}
      </Sidebar>
    );
  };
  const SidebarUI = ({ links }) => {
    const { displaySidebar, closeSidebar, sidebarView } = useUI();
    return displaySidebar ? (
      <SidebarView
        links={links}
        sidebarView={sidebarView}
        closeSidebar={closeSidebar}
      />
    ) : null;
  };
  return (
    <nav className="bg-primary sticky top-0 z-30 border-b-2 shadow-lg">
      <Container className="">
        <div className="flex flex-wrap items-center justify-between mx-auto  h-[80px] ">
          {/* Logo Here */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image width={32} height={32} className="" src="/logo.png" alt="" />
            <span className="self-center text-2xl whitespace-nowrap font-ClashDisplay-Semibold text-accent-6">
              A1ITFirm
            </span>
          </div>

          {/* Navigation */}

          <div className="flex flex-row-reverse gap-8">
            <div className="flex">
              <div className="md:block hidden">
                <Button
                  onClick={() => {
                    router.push("/demo");
                  }}
                  className="rounded-full bg-secondary-2"
                  variant={"slim"}
                >
                  Request a Demo
                </Button>
              </div>
              <MenuButton
                onClick={() => {
                  setSidebarView("MOBILE_MENU_VIEW");
                  openSidebar();
                }}
              />
            </div>
            <div
              className={`items-center justify-between  w-full hidden md:flex md:w-auto`}
            >
              <ul className="flex flex-row space-x-8">
                {navBarlinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg text-accent-8"
                      activeClassName="text-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <SidebarUI links={navBarlinks} />
    </nav>
  );
};

export default Navbar;
