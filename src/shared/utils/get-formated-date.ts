import moment from 'moment';

export function getFormatedDate(date: string): string {
  return moment(date).format('MM/DD/YY');
}
