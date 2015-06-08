/**
 * relativeTimeValue()
 *
 * Display when something was posted, as a relative time value, like “5 days ago”
 * Note: This function retuirns relative time only if less than a month since current date.
 */

(function () {
  function relativeTimeValue(now, time) {
    var date = new Date(time || '');
    var currDate = new Date(now || '');
    var diff = ((currDate.getTime() - date.getTime()) / 1000); // Divide by 1000, since date().getTime() is in milliseconds
    var dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
      return null;
    } else {
      return dayDiff === 0 &&
        (
          // If less than a day
          diff < 60 && 'just now' ||
          diff < 120 && '1 minute ago' ||
          diff < 3600 && Math.floor(diff / 60) + ' minutes ago' ||
          diff < 7200 && '1 hour ago' ||
          diff < 86400 && Math.floor(diff / 3600) + ' hours ago'
        ) ||
        dayDiff === 1 && 'Yesterday' ||
        dayDiff < 7 && dayDiff + ' days ago' ||
        dayDiff < 31 && Math.ceil(dayDiff / 7) + ' weeks ago';
    }
  }

  // Usage
  console.log(relativeTimeValue('2008/01/28 22:25:00', '2008/01/28 22:23:30')); // 1 minute ago
  console.log(relativeTimeValue('2008/01/28 22:25:00', '2008/01/27 22:23:30')); // Yesterday
  console.log(relativeTimeValue('2008/01/28 22:25:00', '2008/01/27 22:23:30')); // Yesterday
  console.log(relativeTimeValue('2008/01/28 22:25:00', '2008/01/26 22:23:30')); // 2 days ago
})();