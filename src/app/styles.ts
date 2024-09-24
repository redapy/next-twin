import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = tw.div`
  w-full min-h-screen grid grid-cols-3 bg-black text-white text-4xl
`;

export const Test1 = tw.div`
bg-blue-700 
`;

export const Test = styled.div<{ $isHidden: boolean }>(({ $isHidden }) => [
  tw` bg-green-400`,
  $isHidden && tw`hidden`,
]);

export const Normal = tw.div`
 bg-red-400 
`;
