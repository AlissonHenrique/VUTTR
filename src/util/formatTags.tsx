export function FormatTags(params: Object[]) {
  const formatTags = params.map((list: any) => ({
    ...list,
    tags: list.tags.map((t: any) => `#${t} `),
  }));
  return formatTags;
}
