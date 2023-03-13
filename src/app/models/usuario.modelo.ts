export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public role?:boolean,
        public google?: string,
        public img? :string,
        public uid?:string

    ){}

}