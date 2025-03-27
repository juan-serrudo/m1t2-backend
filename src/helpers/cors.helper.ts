export function getCors({
  env_mode,
  env_cors,
}: {
  env_mode: string;
  env_cors: string;
}): string[] | string {
  if (env_mode == 'DEV') return '*';
  const cors = env_cors || '';
  return cors.split(',').map((item) => item.trim());
}
