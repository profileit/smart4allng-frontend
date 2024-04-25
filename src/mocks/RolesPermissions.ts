import { Permission, PermissionCategory } from "src/app/shared/interfaces/Permission";
import { Role } from "src/app/shared/interfaces/Role";

export const permissionsCategories: PermissionCategory[] = [
  { id: 1, name: 'Newsfeed' },
  { id: 2, name: 'Smart4 Links' },
  { id: 3, name: 'Smart4 Social' },
  { id: 4, name: 'Smart4 Play Admin' },
  { id: 5, name: 'Admin options' },
];

export const permissions: Permission[] = [
  { name: 'Show preferences', category: permissionsCategories[0] },
  { name: 'Show interactions', category: permissionsCategories[0] },
  { name: 'Smart4 Report', category: permissionsCategories[1] },
  { name: 'Smart4 Biz', category: permissionsCategories[1] },
  { name: 'Smart4 Talk', category: permissionsCategories[1] },
  { name: 'Show social links', category: permissionsCategories[2] },
  { name: 'Admin privileges', category: permissionsCategories[3] },
  { name: 'Admin privileges', category: permissionsCategories[4] },
];

export const roles: Role[] = [
  {
    name: 'Manager',
    permissions: permissions.reduce((acc: Permission[], curr, index) => {
      [0, 1, 4, 5, 6, 7].includes(index) && acc.push(permissions[index]);

      return acc;
    }, []),
  },
  { name: 'Sales', permissions: [] },
  {
    name: 'Tech',
    permissions: permissions.reduce((acc: Permission[], curr, index) => {
      [0, 1, 2, 3, 4, 5].includes(index) && acc.push(permissions[index]);

      return acc;
    }, []),
  },
];
