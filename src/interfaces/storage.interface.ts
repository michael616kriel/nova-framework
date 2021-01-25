export interface IStorage {
  readDir: () => void;
  writeFile: () => void;
  readFile: () => void;
  removeFile: () => void;
}

export class Storage implements IStorage {
  readDir() {}
  writeFile() {}
  readFile() {}
  removeFile() {}
}
