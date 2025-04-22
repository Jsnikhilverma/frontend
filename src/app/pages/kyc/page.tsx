"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KycLayout } from "@/components/kyc-layout";
import { KycForm } from "@/components/kyc-form";
import { KycPending } from "@/components/kyc-pending";

export default function KycPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("kycStatus") === "pending"
  );

  const handleSubmit = () => {
    // Save KYC status to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("kycStatus", "pending");
      setSubmitted(true);
    }

    // Simulate admin approval after 5 seconds
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("kycStatus", "approved");
        router.refresh();
      }
    }, 5000);
  };

  return (
    <KycLayout>
      {!submitted ? <KycForm onSubmit={handleSubmit} /> : <KycPending />}
    </KycLayout>
  );
}
