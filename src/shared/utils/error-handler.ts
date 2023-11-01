export const errorHandler = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else {
    return "Ocorreu um erro";
  }
};
