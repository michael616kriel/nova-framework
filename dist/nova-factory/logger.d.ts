import Nova from "./index";
declare class NovaLogger {
    welcome(): void;
    instanceInformation(nova: Nova): void;
    serverStarted(message: string, protocol: "http" | "https", host: string, port: number): void;
}
export default NovaLogger;
