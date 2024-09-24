"use client";
import { useEffect, useState } from "react";
import { Normal, Test, Test1, Wrapper } from "./styles";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Wrapper>
      <Normal>Normal</Normal>
      <Test $isHidden={!isClient}>Test with styled-components props</Test>
      {isClient ? <Test1>test with conditional rendering</Test1> : null}
    </Wrapper>
  );
}
