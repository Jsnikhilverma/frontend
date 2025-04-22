"use client";
import {
  Plane,
  GraduationCap,
  Briefcase,
  Users,
  Globe,
  FileText,
  UserCircle,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    console.log(isAuthenticated, "iiss");
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div>
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

          <div className="flex items-center gap-2 relative">
            {!isAuthenticated ? (
              <Link href="/pages/login">
                <Button className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-700">
                  Login
                </Button>
              </Link>
            ) : (
              <div className="relative">
                <UserCircle
                  className="h-8 w-8 text-white cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link
                      href="/pages/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/pages/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                      <button
                        onClick={() => {
                          handleLogout();
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

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
                href="/pages/services"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pages/aboutus"
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
                href="/pages/contactus"
                className="text-base font-medium text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {!isAuthenticated ? (
                <Link
                  href="/pages/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-700 w-full">
                    Login
                  </Button>
                </Link>
              ) : (
                <>
                  <Link
                    href="/pages/dashboard"
                    className="text-base font-medium text-white hover:text-yellow-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/pages/profile"
                    className="text-base font-medium text-white hover:text-yellow-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 w-full text-white"
                  >
                    Logout
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </header>
      <div className="bg-gray-950 text-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-yellow-900 via-black to-gray-900 py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            AXE VISA offers premium visa consultation and assistance services
            tailored to your travel, study, or work goals.
          </p>
        </section>

        {/* Services List */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <ServiceCard
              Icon={Plane}
              title="Tourist Visa"
              description="Plan your vacation or family trip with confidence. We simplify the tourist visa process for all major countries including USA, UK, Canada, and Schengen nations."
            />
            <ServiceCard
              Icon={GraduationCap}
              title="Student Visa"
              description="Get expert help with student visa applications for top countries like Canada, UK, USA, Australia, and Germany. Includes SOP, university documents, and financials support."
            />
            <ServiceCard
              Icon={Briefcase}
              title="Work Visa"
              description="Secure work opportunities abroad with ease. We help with job offer validation, embassy appointments, and documentation for skilled professionals."
            />
            <ServiceCard
              Icon={Users}
              title="Family/Dependent Visa"
              description="Bringing family along? We assist in dependent visa and spouse visa applications so your loved ones stay close."
            />
            <ServiceCard
              Icon={Globe}
              title="Business Visa"
              description="Attending conferences, meetings or expanding your global footprint? AXE VISA prepares all documents for short-term business travel."
            />
            <ServiceCard
              Icon={FileText}
              title="Visa Refusal Handling"
              description="Was your visa rejected? We analyze your case and prepare a fresh, strong re-application with expert advice."
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-bold text-yellow-400">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div className="bg-gray-800 p-6 rounded-xl border border-yellow-800">
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                  Step 1
                </h4>
                <p>
                  Book a consultation with our visa expert and share your goals.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-yellow-800">
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                  Step 2
                </h4>
                <p>
                  We prepare all documents including travel plans, financials,
                  cover letters, etc.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-yellow-800">
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                  Step 3
                </h4>
                <p>
                  You attend your interview or biometric appointment — we’ll
                  guide you till the stamp!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-yellow-700 py-12 text-center text-black">
          <h3 className="text-2xl font-bold mb-2">Need Visa Assistance?</h3>
          <p className="mb-4">
            Let AXE VISA handle the process while you focus on your journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Contact Us Now
          </a>
        </section>
      </div>
      {/* Footer */}
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

function ServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-yellow-800 shadow-xl space-y-4">
      <Icon className="text-yellow-400 w-8 h-8" />
      <h4 className="text-xl font-bold text-yellow-300">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
