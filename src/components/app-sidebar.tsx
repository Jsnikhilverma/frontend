"use client";

import {
  CreditCard,
  FileCheck,
  Home,
  StampIcon as Passport,
  Shield,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
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
          <SidebarHeader className="h-20 border-b bg-gray-900 text-white border-sidebar-border flex justify-between items-center px-4">
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
            <div className="flex bg-gray-900 text-white flex-col gap-2 p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h2 className="text-sm font-medium leading-none">John Doe</h2>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </div>
            <SidebarSeparator />
            <SidebarMenu className="text-white">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="#" onClick={() => setMobileSidebarOpen(false)}>
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/pages/profile"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/pages/kyc"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Shield className="h-4 w-4" />
                    <span>KYC Verification</span>
                    <Badge variant="outline" className="ml-auto">
                      In Progress
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/pages/passpostapply"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Passport className="h-4 w-4" />
                    <span>Passport</span>
                    <Badge
                      variant="outline"
                      className="ml-auto bg-green-50 text-green-700 border-green-200"
                    >
                      Approved
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/pages/visa"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <FileCheck className="h-4 w-4" />
                    <span>Visa Application</span>
                    <Badge variant="outline" className="ml-auto">
                      Pending
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" onClick={() => setMobileSidebarOpen(false)}>
                    <CreditCard className="h-4 w-4" />
                    <span>Payments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-sidebar-border p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                <p>© 2024 TravelEase</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
      </div>

      {/* Desktop Sidebar (hidden on mobile) */}
      <Sidebar className="hidden md:flex bg-gray-900">
        <SidebarHeader className="h-20 border-b bg-gray-900 border-sidebar-border">
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
          <div className="flex bg-gray-900 text-white flex-col gap-2 p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-sm font-medium leading-none">John Doe</h2>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
            </div>
          </div>
          <SidebarSeparator />
          <SidebarMenu className="text-white">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="#">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/pages/profile">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/pages/kyc">
                  <Shield className="h-4 w-4" />
                  <span>KYC Verification</span>
                  <Badge variant="outline" className="ml-auto">
                    In Progress
                  </Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/pages/passpostapply">
                  <Passport className="h-4 w-4" />
                  <span>Passport</span>
                  <Badge
                    variant="outline"
                    className="ml-auto bg-green-50 text-green-700 border-green-200"
                  >
                    Approved
                  </Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/pages/visa">
                  <FileCheck className="h-4 w-4" />
                  <span>Visa Application</span>
                  <Badge variant="outline" className="ml-auto">
                    Pending
                  </Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              <p>© 2024 TravelEase</p>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 md:hidden p-2 rounded-md bg-gray-900 text-white"
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
}
