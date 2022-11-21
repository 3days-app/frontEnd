import styled from "@emotion/styled";
import treeback from "../../images/treeBack.png";
import hongsi from "../../images/hongsi.png";
import { randomNumber } from "../../Hooks/controller";

export const TreeBackground = styled.section`
  width: 54vh;
  height: 400px;
  background-image: url(${treeback});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
`;
const HongsiElem = styled.div`
  background-image: url(${hongsi});
  width: ${(prop) => prop.size}%;
  height: ${(prop) => prop.size}%;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const HongSiGenerator = () => {
  let RandNum = randomNumber(15, 25);
  return <HongsiElem size={RandNum} />;
};
const mapper = ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"]

const HongSiArea = styled.div`

  width: 100%;
  height:57%;
  border-radius: 52%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const MainTree = () => {
  return (
    <TreeBackground>
      <HongSiArea>
      {mapper.map((e)=>{
        return (<HongSiGenerator/>)
      })}

      </HongSiArea>
    </TreeBackground>
  );
};
