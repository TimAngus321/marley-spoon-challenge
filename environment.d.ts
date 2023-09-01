export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SPACE_ID: string;
      REACT_APP_ENVIRONMENT_ID: string;
      REACT_APP_ACCESS_TOKEN: string;
    }
  }
}