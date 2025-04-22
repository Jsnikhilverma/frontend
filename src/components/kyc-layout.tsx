"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  CreditCard,
  User,
  StampIcon as Passport,
  Plane,
  CheckCircle2,
  Clock,
  X,
  Menu,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function KycLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [kycStatus, setKycStatus] = useState<
    "not-started" | "pending" | "approved"
  >("not-started");
  const [passportStatus, setPassportStatus] = useState<
    "not-started" | "pending" | "approved"
  >("not-started");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Load status from localStorage on client side
  useEffect(() => {
    const savedKycStatus = localStorage.getItem("kycStatus");
    const savedPassportStatus = localStorage.getItem("passportStatus");

    if (savedKycStatus) {
      setKycStatus(savedKycStatus as "not-started" | "pending" | "approved");
    }

    if (savedPassportStatus) {
      setPassportStatus(
        savedPassportStatus as "not-started" | "pending" | "approved"
      );
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar (hidden on mobile) */}
        <Sidebar className="hidden md:flex w-72 bg-gray-900 text-white">
          <SidebarHeader className="border-b px-6 py-4">
            <Image
              src="/logo2.png"
              alt="Global Visa Solutions"
              width={120}
              height={30}
              className="h-10 w-16 md:h-16 md:w-24"
              priority
            />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/pages/kyc"}>
                  <Link href="/pages/kyc">
                    <FileText />
                    <span>KYC Form</span>
                    {kycStatus === "pending" && (
                      <Clock className="ml-auto h-4 w-4 text-yellow-500" />
                    )}
                    {kycStatus === "approved" && (
                      <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/pages/passpostapply"}
                  aria-disabled={kycStatus !== "approved"}
                >
                  <Link
                    href={
                      kycStatus === "approved" ? "/pages/passpostapply" : "#"
                    }
                    className={
                      kycStatus !== "approved"
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }
                  >
                    <Passport />
                    <span>Passport</span>
                    {passportStatus === "pending" && (
                      <Clock className="ml-auto h-4 w-4 text-yellow-500" />
                    )}
                    {passportStatus === "approved" && (
                      <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/pages/visa"}
                  aria-disabled={passportStatus !== "approved"}
                >
                  <Link
                    href={passportStatus === "approved" ? "/pages/visa" : "#"}
                    className={
                      passportStatus !== "approved"
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }
                  >
                    <Plane />
                    <span>Visa Application</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/pages/payment"}
                  aria-disabled={
                    !(
                      pathname === "/pages/visa" &&
                      passportStatus === "approved"
                    )
                  }
                >
                  <Link
                    href={
                      pathname === "/pages/visa" &&
                      passportStatus === "approved"
                        ? "/pages/payment"
                        : "#"
                    }
                    className={
                      !(
                        pathname === "/pages/visa" &&
                        passportStatus === "approved"
                      )
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }
                  >
                    <CreditCard />
                    <span>Payment</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>User Account</span>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-gray-900 text-white transition-transform duration-300 ease-in-out md:hidden ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar className="h-full">
            <SidebarHeader className="border-b px-6 py-4 flex justify-between items-center">
              <Image
                src="/logo2.png"
                alt="Global Visa Solutions"
                width={120}
                height={30}
                className="h-10 w-16 md:h-16 md:w-24"
                priority
              />
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="md:hidden p-1 rounded-md hover:bg-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/pages/kyc"}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Link href="/pages/kyc">
                      <FileText />
                      <span>KYC Form</span>
                      {kycStatus === "pending" && (
                        <Clock className="ml-auto h-4 w-4 text-yellow-500" />
                      )}
                      {kycStatus === "approved" && (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/pages/passpostapply"}
                    aria-disabled={kycStatus !== "approved"}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Link
                      href={
                        kycStatus === "approved" ? "/pages/passpostapply" : "#"
                      }
                      className={
                        kycStatus !== "approved"
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }
                    >
                      <Passport />
                      <span>Passport</span>
                      {passportStatus === "pending" && (
                        <Clock className="ml-auto h-4 w-4 text-yellow-500" />
                      )}
                      {passportStatus === "approved" && (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/pages/visa"}
                    aria-disabled={passportStatus !== "approved"}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Link
                      href={passportStatus === "approved" ? "/pages/visa" : "#"}
                      className={
                        passportStatus !== "approved"
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }
                    >
                      <Plane />
                      <span>Visa Application</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/pages/payment"}
                    aria-disabled={
                      !(
                        pathname === "/pages/visa" &&
                        passportStatus === "approved"
                      )
                    }
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Link
                      href={
                        pathname === "/pages/visa" &&
                        passportStatus === "approved"
                          ? "/pages/payment"
                          : "#"
                      }
                      className={
                        !(
                          pathname === "/pages/visa" &&
                          passportStatus === "approved"
                        )
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }
                    >
                      <CreditCard />
                      <span>Payment</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                <span>User Account</span>
              </div>
            </SidebarFooter>
          </Sidebar>
        </div>

        <div className="flex-1 p-6">
          <div className="container mx-auto">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="mb-4 md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
