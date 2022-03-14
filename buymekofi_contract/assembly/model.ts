import { PersistentUnorderedMap, u128, math } from "near-sdk-as";

@nearBindgen
export class Transaction {
    id: u32;
    sender: string;
    amount: u128;
    receiver: string;

    constructor(sender: string, amount: u128, receiver: string) {
        this.id = math.hash32<string>(sender + receiver + amount.toString());
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }
}

// export const Transactions = new PersistentUnorderedMap<string, Transaction>("user_accounts");