import { useEffect, useState } from "react";

/** True after the component has mounted (avoids SSR/client mismatch for client-only state). */
export function useMounted() {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
