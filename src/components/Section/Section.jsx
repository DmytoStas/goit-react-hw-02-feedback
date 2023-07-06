import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <>{children}</>
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
