
export const errorHandler = (error: unknown, instance: any, info: string) => {
  // Perform any custom error handling logic here
  console.error('Error:', error);
  console.error('Vue instance:', instance);
  console.error('Error info:', info);
};
