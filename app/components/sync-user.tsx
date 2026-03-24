"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SyncUser() {
  const { isSignedIn, getToken } = useAuth();
  const { isLoaded } = useUser();

  const [synced, setSynced] = useState(false);

  useEffect(() => {
    // Only sync if user is signed in, loaded, and not yet synced
    if (!isLoaded || !isSignedIn || synced) return;

    const syncUser = async () => {
      try {
        const token = await getToken();

        const res = await fetch("http://localhost:5000/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("User sync failed:", text, "Status:", res.status);
          return;
        }

        const data = await res.json();
        console.log("User synced:", data);

        setSynced(true); // Mark as synced
      } catch (err) {
        console.error("Sync error:", err);
      }
    };

    syncUser();
  }, [isSignedIn, isLoaded, getToken, synced]);

  return null;
}