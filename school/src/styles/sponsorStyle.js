import styled from "styled-components";

export const StyledSponsor = styled.section`
  text-align: center;
  background: rgba(247, 248, 252, 1);
  padding: .5rem 0;
  margin: 0 10rem;
  border-radius: 20px;
  & > h4 {
    font-family: "Poppins" sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(2, 43, 105, 1);
    & > .orange {
      color: rgba(244, 118, 118, 1);
    }
  }
  .sponsor-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    & > .sponsor-image{
        padding-left: 1rem;
    }
  }
`;
