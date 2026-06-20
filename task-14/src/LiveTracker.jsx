import React, { useEffect } from "react";

export default function LiveTracker() {
  useEffect(() => {
    // კომპონენტის ჩატვირთვისას
    console.log("Live მონიტორინგი დაიწყო");

    const timer = setInterval(() => {
      console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან...");
    }, 2000);

    // კომპონენტის გაქრობისას (Cleanup)
    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div className="live-tracker">
      <p>Live სინქრონიზაცია ჩართულია...</p>
    </div>
  );
}