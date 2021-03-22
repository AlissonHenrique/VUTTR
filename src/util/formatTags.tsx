export function FormatTags(params: Object[]) {
  return params.map((tags: any) => ({
    tags: tags.tags.map((t: any) => `#${t} `),
  }));
}
