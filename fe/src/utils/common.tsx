export const formatDate = (dateString: string) => {
  if (dateString === 'Present') {
    return 'Present';
  }
  const date = new Date(dateString);
  const options = { year: 'numeric' as const, month: 'short' as const };
  return date.toLocaleString('en-US', options);
};
