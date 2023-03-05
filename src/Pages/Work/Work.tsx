import styled from "styled-components";
import { Card } from "./Card";
import cruise from "../../assets/cruise23.png";
import krit from "../../assets/krit.jpg";

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow-y: scroll;
  max-height: 600px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Work = () => {
  return (
    <div>
      {/* <div>
        <h1>Government Contracting</h1>
        <h3>1 contract won</h3>
      </div> */}
      <div>
        <h1>Projects we've produced</h1>
        <CardContainer>
          <Card
            title="Cornelius Investigations"
            url="https://corneliusinvestigation.com/"
            image={krit}
          />
          <Card
            title="Jam Cruise '23"
            url="https://jamcruise23.com/"
            image={cruise}
          />
        </CardContainer>
      </div>
    </div>
  );
};
