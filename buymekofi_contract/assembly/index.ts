// contract/assembly/index.ts
import { user_account } from "./model";
import { context, ContractPromiseBatch, u128} from "near-sdk-as";

const zero = new u128(0);

export function buy_coffee_for(name: string): string {
    assert(user_account.contains(name), "user does not exist!");
    assert(context.attachedDeposit > zero, "amount must be greater than zero!"); 
    let amount = context.attachedDeposit;
    const to_sender = ContractPromiseBatch.create(user_account.getSome(name));
    to_sender.transfer(amount);
    return 'success';
}

export function register(name: string): string {
    user_account.set(name, context.sender);
    return 'success';
}

export function change_account(name:string, account_id: string): string {
    assert(user_account.contains(name), 'user does not exist!');
    assert(user_account.getSome(name) == context.sender, "cannot change name for others!");
    user_account.set(name, account_id);
    return 'success';
}

