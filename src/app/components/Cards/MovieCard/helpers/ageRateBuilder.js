const RESTRICTIONS = {
  ADULT_RESTRICTED: 'R',
  PARENTAL_GUIDANCE: 'PG',
};

const ageRateBuilder = (restriction) => {
  const isRestricted = restriction?.adult;
  return isRestricted
    ? RESTRICTIONS.ADULT_RESTRICTED
    : RESTRICTIONS.PARENTAL_GUIDANCE;
};

export default ageRateBuilder;
