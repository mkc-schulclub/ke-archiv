const months = [
  "Januar", "Februar", "März",
  "April", "Mai", "Juni", "Juli",
  "August", "September", "Oktober",
  "November", "Dezember"
];
export function useDate() {
    function date(dateStr: string) {
        const date = new Date(dateStr);
        return `${months[date.getMonth()]} ${date.getFullYear()}`
    }
    return {
      date,
    };
  }