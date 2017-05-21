export const generateLoginToken = (length: number = 64): string => {
  const timestamp = Date.now().toString();
  const timestampLength = timestamp.length;

  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  length = length - timestampLength;

  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return timestamp + result;
};
