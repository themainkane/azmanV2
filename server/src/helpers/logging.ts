export function consoleLog(context: string): void {
  console.log(new Date().toISOString(), context);
}

export function logErrorMessage(context: string, error: unknown): void {
  if (error instanceof Error) {
    console.log(new Date().toISOString(), context, error.message);
  } else {
    console.log(new Date().toISOString(), `UNKNOWN ERROR ${context}`, error);
  }
}
