import Dexie, { type Table } from "dexie";

import type { User } from "@/db//models/User";

export class BlueprintDB extends Dexie {
  users!: Table<User, string>;

  constructor() {
    super("blueprint-db");
    this.version(1).stores({
      users: "&id, email"
    });
  }

  async isEmpty(): Promise<boolean> {
    return await this.users.count() === 0;
  }
}

export const db = new BlueprintDB();
