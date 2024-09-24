"use client";
import { useEffect, useState } from "react";
import { Wrapper } from "./styles";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? <Wrapper>testing</Wrapper> : null;
}
