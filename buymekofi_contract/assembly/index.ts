// contract/assembly/index.ts
// import { Transaction } from "./model";
import { parseNearAmount } from "near-api-js/lib/utils/format";
import { context, ContractPromiseBatch, logging, u128 } from "near-sdk-as";

const zero = new u128(0);
// const Transactions = Array.create<Transaction>(0);

export function buy_coffee_for(account_id: string): void {
    let amount = context.attachedDeposit;
    assert(amount > zero, "Amount must be greater than 0!");
    const to_sender = ContractPromiseBatch.create(account_id);
    to_sender.transfer(amount);
    logging.log(`${context.sender} just sent ${ amount } yocto near to ${account_id}!`);
}

// export function register(name: string): string {
//     user_account.set(name, context.sender);
//     return 'success';
// }

// export function change_account(name:string, account_id: string): string {
//     assert(user_account.contains(name), 'user does not exist!');
//     assert(user_account.getSome(name) == context.sender, "cannot change name for others!");
//     user_account.set(name, account_id);
//     return 'success';
// }

