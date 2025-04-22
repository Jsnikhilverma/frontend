"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { KycLayout } from "@/components/kyc-layout";
import { PaymentForm } from "@/components/payment-form";
import { PaymentSuccess } from "@/components/payment-success";

export default function KycPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const status = localStorage.getItem("kycStatus");
      if (status === "pending" || status === "approved") {
        setSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kycStatus", "pending");
      setSubmitted(true);

      setTimeout(() => {
        localStorage.setItem("kycStatus", "approved");
        router.refresh();
      }, 5000);
    }
  };

  return (
    <KycLayout>
      {!submitted ? (
        <PaymentForm onComplete={handleSubmit} />
      ) : (
        <PaymentSuccess />
      )}
    </KycLayout>
  );
}
