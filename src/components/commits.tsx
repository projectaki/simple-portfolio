"use client";

import { useCallback, useEffect, useState } from "react";

export function Commits() {
  const [loading, setLoading] = useState(false);
  const [commit, setCommit] = useState(null);

  const runFunction = useCallback(async () => {
    setLoading(true);
    try {
      const commit = await fetch(
        "https://gh_proxy.akosegypro.workers.dev"
      ).then(async (res) => {
        const data = await res.json();
        return data;
      });
      setCommit(commit);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(runFunction, 60000);
    runFunction();
    return () => clearInterval(interval);
  }, [runFunction]);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-x-2">
        <h3 className="text-lg font-semibold text-black mb-0">Last commit</h3>
        {loading ? <img src="/spinner.svg" alt="" /> : "just refreshed"}
      </div>

      <ul className="bg-white   max-w-lg">
        <li className=" border-gray-300 py-2">
          <span className="text-gray-600 text-sm">
            {(commit as any)?.commit}
          </span>
        </li>
      </ul>
    </div>
  );
}
