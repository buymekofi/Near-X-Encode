import { PersistentUnorderedMap } from "near-sdk-as";

export const user_account = new PersistentUnorderedMap<string, string>("user_accounts");