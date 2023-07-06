const mapping: Record<string, string> = {
  'data-files': 'data_file',
  organizations: 'organization',
  users: 'user',
  workflows: 'workflow',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
