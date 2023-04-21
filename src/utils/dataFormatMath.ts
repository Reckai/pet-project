
export const GetDate = (dateSting: string) => {
  const date = new Date(dateSting)

  const diffMs = new Date().getTime() - date.getTime();

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
}