import styled from "@emotion/styled";

export const MainLeftWrapper = styled.aside`
  min-width: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--pure-white);
  padding: 24px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    flex-direction: row;
    width: 100%;
    align-items: center;
    border-top: 1px solid var(--line-light-gray);
  }
`;

export const MainCenterWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 312px;
  max-width: 730px;
  padding: 24px;
  margin-bottom: 156px;
  border: 1px solid var(--line-light-gray);
  border-radius: var(--sig-border-16);
  background-color: var(--pure-white);
  @media screen and (max-width: 1024px) {
    margin-bottom: 156px;
  }
`;
export const MainRightWrapper = styled.aside`
  min-width: 298px;
  max-width: 310px;
  height: 500px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--pure-white);
  padding: 16px 24px;
  position: sticky;
  top: 36px;

  @media screen and (max-width: 1024px) {
    max-width: none;
    height: auto;
    margin-left: 0;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    display: none;
    width: 100%;
    top: 0;
    align-items: center;
    border-top: 1px solid var(--line-light-gray);
  }
`;
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--bg-gray);
  min-height: 100vh;
  padding: 16px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
