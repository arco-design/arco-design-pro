export const isAdmin = (roles: string[]) => {
  return roles.includes('ROLE_ADMIN');
}

export const isNormalUser = (roles: string[]) => {
  return roles.includes('ROLE_USER');
}
