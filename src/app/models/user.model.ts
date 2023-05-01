export class User {
    id: number;
    email: string;
    password: string;
    anonymous: boolean;
    avatar?: string;
  
    constructor(
      id: number,
      email: string,
      password: string,
      anonymous: boolean,
      avatar?: string
    ) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.anonymous = anonymous;
      this.avatar = avatar;
    }
  }
  