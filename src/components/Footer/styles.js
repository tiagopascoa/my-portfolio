import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const IconsConainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const LinkToContact = styled.a`
  text-decoration: none;
  color: ${({ blue_bg }) => (blue_bg ? "#6497b1" : "#52AD80")};
  &:hover {
    color: #010606;
  }
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  gap: 0.5rem;
`;
export const CopyText = styled.span``;
