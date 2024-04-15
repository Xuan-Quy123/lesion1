class Account {
    private _id: number;
    private _email: string;
    private _username: string;
    private _fullName: string;
    private _department: Department;
    private _position: Position;
    private _createDate: Date;

    constructor(id: number, email: string, username: string, fullName: string, department: Department, position: Position, createDate: Date) {
        this._id = id;
        this._email = email;
        this._username = username;
        this._fullName = fullName;
        this._department = department;
        this._position = position;
        this._createDate = createDate;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get department(): Department {
        return this._department;
    }

    set department(value: Department) {
        this._department = value;
    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
    }

    get createDate(): Date {
        return this._createDate;
    }

    set createDate(value: Date) {
        this._createDate = value;
    }
}
