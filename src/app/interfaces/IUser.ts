export interface IUser {
    userName:    string;
    firstName:   string;
    lastName:    string;
    country:     string;
    state:       string;
    email:       string;
    birthDate:   Date;
    phoneNumber: string;
    avatarUrl:   string;
    id?:          number;
}