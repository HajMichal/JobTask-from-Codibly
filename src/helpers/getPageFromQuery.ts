export function getPageFromQuery() {
  const queryParams = new URLSearchParams(window.location.search);
  const page = parseInt(queryParams.get("page")!) || 1;
  const id = parseInt(queryParams.get("id")!);
  return { page, id };
}
