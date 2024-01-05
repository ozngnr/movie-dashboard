import moment from 'moment';

export const getDate = (date: string) => {
  const formattedDate = moment(date).format('DD MMM YYYY');
  return formattedDate;
};
