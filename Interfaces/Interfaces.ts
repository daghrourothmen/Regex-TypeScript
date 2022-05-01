export {};

interface BankAccount {
    ClientID:number | undefined;
    ClientNumber:number;
    ClientFirstName:string;
    ClientLastName:string;
    ClientPhoneNumber1:number;
    ClientPhoneNumber2?:number;
    ClientAdresse:string;
    ClientEmail?:string;
    BankName:string;
    ClientSecretCode:number;
    ClientRIB:number | string;
    ClientBalance:number | undefined;
    AccountType:string;
    isActive:boolean;
}

