export function getDateGap(date) {
  const today = new Date();
  const timeValue = new Date(date);

  let time = Math.floor((today.getTime() - timeValue.getTime()) / 1000) + 60 * 60 * 9;

  if (time <= 1) return time + ' second ago';
  if (time < 60) return time + ' seconds ago';

  time = Math.floor(time / 60);

  if (time <= 1) return time + ' minute ago';
  if (time < 60) return time + ' minutes ago';

  time = Math.floor(time / 60);

  if (time <= 1) return time + ' hour ago';
  if (time < 24) return time + ' hours ago';

  time = Math.floor(time / 24);

  if (time <= 1) return time + ' day ago';
  if (time < 7) return time + ' days ago';

  if (Math.floor(time / 365) === 1) return '1 year ago';
  if (Math.floor(time / 365) > 1) return Math.floor(time / 365) + ' years ago';

  time = Math.floor(time / 7);

  if (time <= 1) return time + ' week ago';
  if (time < 6) return time + ' weeks ago';

  const gapMonth = today.getMonth() - timeValue.getMonth();

  return (gapMonth < 0 ? gapMonth + 12 : gapMonth) + ' month ago';
}

export function getDateStr(date) {
  const time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return getDateStrYMD(date) + ' ' + hours + ':' + minutes + ':' + seconds;
}

export function getDateStrYMD(date) {
  const time = new Date(date);

  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();

  return year + '-' + month + '-' + day;
}
