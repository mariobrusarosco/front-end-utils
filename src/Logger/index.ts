interface Logger {
  log: Log;
}

type Log = (contentToLog: any) => void;

export const Logger: Logger = {
  log: (contentToLog) => console.log(contentToLog),
};
