import styled from "styled-components/macro";

export const AboutContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;
export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 700px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
    margin-top: 50px;
    gap: 1rem;
  }
`;
export const Column1 = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 59%;
  }
  @media screen and (max-width: 480px) {
    width: 75%;
  }
`;
export const ImageContainer = styled.div``;
export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
`;
export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    gap: 2rem;
  }
`;
export const AboutTitleWrapper = styled.div``;
export const TopLine = styled.p`
  color: ${({ blue_bg }) => (blue_bg ? "#6497b1" : "#52AD80")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.4px;
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const AboutText = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    height: 100%;
    justify-content: center;
  }
`;
export const Img = styled.img`
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
