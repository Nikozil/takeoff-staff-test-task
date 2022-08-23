export const getLastPathName = (path: string) =>
  path
    .split('/')
    .filter((entry) => entry !== '')
    .pop();
