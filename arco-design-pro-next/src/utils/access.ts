import { isArray } from '@/utils/is';

export const isAdmin = (roles: string[]) => {
  return roles.includes('ROLE_ADMIN');
}

export const isNormalUser = (roles: string[]) => {
  return roles.includes('ROLE_USER');
}

export default function isAccessAllowed(access, roles) {
  return (
    isArray(access) &&
    roles &&
    access.filter((item) =>
      roles ? item(roles || []) : item(JSON.parse(localStorage.getItem('roles')) || [])
    ).length
  );
}
