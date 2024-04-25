export interface Permission {
  name: string;
  category: PermissionCategory;
}

export interface PermissionCategory {
  id: number;
  name: 'Newsfeed' | 'Smart4 Links' | 'Smart4 Social' | 'Smart4 Play Admin' | 'Admin options';
}
