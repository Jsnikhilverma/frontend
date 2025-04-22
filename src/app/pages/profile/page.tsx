"use client";
import { Pencil, User, Mail, Phone, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      {" "}
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray md:px-4">
        <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-0">
          <div className="flex items-center gap-2 mb-2 mt-2 flex-shrink-0">
            <Image
              src="/logo2.png"
              alt="Global Visa Solutions"
              width={120}
              height={30}
              className="h-12 w-20 md:h-16 md:w-24"
            />
            <span className="text-lg md:text-xl text-white font-bold hidden md:block">
              AXE VISA <br /> TECHNOLOGY
            </span>
          </div>
          <nav className="hidden md:flex gap-6 flex-1 justify-center">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              href="/pages/services"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Services
            </Link>
            <Link
              href="/pages/aboutus"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Testimonials
            </Link>
            <Link
              href="/pages/contactus"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/pages/login">
              <Button className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-700">
                Login
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden text-white"
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 py-4 px-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#testimonials"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-yellow-400 hover:bg-yellow-700 w-full">
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>
      <div className="bg-gray-950 text-white min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-br from-yellow-900 via-black to-gray-900 py-16 px-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-400">
            Welcome, Aryan Sharma
          </h1>
          <p className="mt-2 text-gray-300">
            Manage your account and personal details below.
          </p>
        </section>

        {/* Profile Info */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-yellow-800 p-8 space-y-8">
            {/* Profile Pic + Edit */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <User className="w-14 h-14 text-yellow-400" />
                <div>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    Aryan Sharma
                  </h2>
                  <p className="text-sm text-gray-400">Premium Member</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl font-medium transition">
                <Pencil className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <ProfileField
                label="Email"
                value="aryan.sharma@email.com"
                icon={<Mail className="w-4 h-4" />}
              />
              <ProfileField
                label="Phone"
                value="+91 98765 43210"
                icon={<Phone className="w-4 h-4" />}
              />
              <ProfileField
                label="Passport No."
                value="M1234567"
                icon={<FileText className="w-4 h-4" />}
              />
              <ProfileField
                label="Country"
                value="India"
                icon={<GlobeIcon />}
              />
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                <Image
                  src="/logo2.png"
                  alt="Global Visa Solutions"
                  width={120}
                  height={30}
                  className="h-12 sm:h-16 w-20 sm:w-24"
                />
                <span className="text-lg sm:text-xl font-bold">
                  AXE VISA TECHNOLOGY
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Premium visa and passport services for discerning clients across
                India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
                Services
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tourist Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Student Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Passport Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
                Legal
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-10 pt-4 md:pt-6 text-center text-gray-400 text-sm md:text-base">
            <p>
              &copy; {new Date().getFullYear()} AXE VISA TECHNOLOGY. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProfileField({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 bg-gray-800 p-4 rounded-xl border border-gray-700">
      <div className="text-yellow-400">{icon}</div>
      <div>
        <p className="text-gray-400 font-medium">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v1m0 16v1m8-9h1M3 12H2m15.36 6.36l.707.707M6.343 6.343l.707.707m10.607-1.414l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
      />
    </svg>
  );
}
