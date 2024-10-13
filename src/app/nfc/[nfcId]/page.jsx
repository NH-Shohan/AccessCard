"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NFCPage({ params }) {
  const router = useRouter();
  const { nfcId } = params;

  useEffect(() => {
    if (nfcId) {
      // Simulated NFC ID to user mapping (you can replace this with a real backend call)
      const userMappings = {
        12345: "shohan-hossain",
        67890: "nahim-uddin",
      };

      // Check if the NFC ID exists in the user mappings
      const userName = userMappings[nfcId];

      if (userName) {
        // Redirect to the user-specific page
        router.push(`/${userName}`);
      } else {
        // Handle the case where the NFC ID is not recognized
        alert("NFC ID not recognized. Please register your NFC card.");
      }
    }
  }, [nfcId, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>NFC Card Detected</h1>
      <p>Checking card number: {nfcId}</p>
    </div>
  );
}
