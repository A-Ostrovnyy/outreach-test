import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(updateLocale); // use plugin
dayjs.extend(relativeTime); // use plugin
dayjs.updateLocale("en", {
  relativeTime: {
    s: "1m",
    m: "1m",
    mm: "%d m",
    h: "1h",
    hh: "%d h",
    d: "1d",
    dd: "%d d",
    M: "1m",
    MM: "%d m",
    y: "1y",
    yy: "%d y",
  },
});

export function getCurrentDateInIso() {
  return new Date().toISOString();
}

export function getTimeFromNow(date: Date | string) {
  return dayjs(date).fromNow(true);
}
