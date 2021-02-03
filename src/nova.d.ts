// <reference types="typescript" />
import { Nova } from "./nova-factory";
declare global {
  const nova: Nova;
  namespace NodeJS {
    interface Global {
      nova: Nova;
    }
  }
}
