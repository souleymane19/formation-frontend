export interface User {
    id: number;
    nom:string;
    prenom: string;
    email : string;
    password:string;
    active :string;
    role_id:string;
}

export interface UserFormation{
  userId:number
  formationId :number
}



