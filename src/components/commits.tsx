"use client";

import { useCallback, useEffect, useState } from "react";
import { getTop5RecentlyUsedRepos } from "../../lib/gh";

export function Commits() {
  // const [loading, setLoading] = useState(false);
  // const [commit, setCommit] = useState(null);

  // const runFunction = useCallback(async () => {
  //   setLoading(true);
  //   const commit = await getTop5RecentlyUsedRepos().catch((err) => {
  //     setLoading(false);
  //   });

  //   setCommit(commit);

  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(runFunction, 60000);
  //   runFunction();
  //   return () => clearInterval(interval);
  // }, [runFunction]);

  return (
    <div className="mt-8">
      {/* <h3 className="text-lg font-semibold mb-4 text-black">Last commit</h3>
      <ul className="bg-white   max-w-lg">
        <li className=" border-gray-300 py-2">
          <span className="text-gray-600 text-sm">{commit}</span>
        </li>
      </ul> */}
    </div>
  );
}
