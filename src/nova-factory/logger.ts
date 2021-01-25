import chalk from "chalk";
import Nova from "./index";

const log = console.log;

class NovaLogger {
  welcome() {
    log(chalk.bgWhite(` ${chalk.black("Welcome to Nova Framework!")} \n`));
  }

  instanceInformation(nova: Nova) {
    const services = nova.services.map((service) => {
      return service.constructor.name;
    });
    log(chalk.green("Services: "));
    for (let service of services) {
      log(chalk.white(` - ${service}`));
    }
    log(chalk.green("\n Storage: "));
    if (nova.storage) {
      log(chalk.white(` - ${nova.storage?.constructor.name}`));
    } else {
      log(chalk.red(` - No storage has been configured.`));
    }
    log("\n");
  }

  serverStarted(
    message: string,
    protocol: "http" | "https",
    host: string,
    port: number
  ) {
    log(
      `${chalk.white(message)}: ${chalk.green(`${protocol}://${host}:${port}`)}`
    );
  }
}

export default NovaLogger;
