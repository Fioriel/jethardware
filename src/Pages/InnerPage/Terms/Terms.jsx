import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import "./Terms.scss";

export default function Terms() {
  const [searchParams] = useSearchParams();
  const policyFromUrl = searchParams.get("policy");

  const [currentPolicy, setCurrentPolicy] = useState(
    policyFromUrl || "generalPrivacy"
  );

  // Sync when URL changes
  useEffect(() => {
    if (policyFromUrl) {
      setCurrentPolicy(policyFromUrl);
    }
  }, [policyFromUrl]);

  // Scroll to hash AFTER policy renders
  useEffect(() => {
    if (!currentPolicy) return;

    setTimeout(() => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, [currentPolicy]);

  return (
    <div className="policy-layout flex">
      <Left currentPolicy={currentPolicy} setCurrentPolicy={setCurrentPolicy} />
      <Center currentPolicy={currentPolicy} />
      <Right currentPolicy={currentPolicy} />
    </div>
  );
}
