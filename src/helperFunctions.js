export const dateToIsoFormat = (date) => {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60 * 1000);

  return newDate.toISOString().split('T')[0];
};

const treatAsUTC = (date) => {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
};

export const daysBetween = (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return parseInt(
    (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay
  );
};
