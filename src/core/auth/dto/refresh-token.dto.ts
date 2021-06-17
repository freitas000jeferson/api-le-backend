export class RefreshTokenDto {
  email: string;
  expiration_date: string;
  token: string;
  constructor(email: string, expiration_date: string, token: string) {
    this.email = email;
    this.expiration_date = expiration_date;
    this.token = token;
  }
}
