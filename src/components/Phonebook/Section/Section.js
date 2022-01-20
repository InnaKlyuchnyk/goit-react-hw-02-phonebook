import PropTypes from "prop-types";
import { SectionContainer, SectionTitle } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
