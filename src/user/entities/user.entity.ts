import { Entity } from "@/shared/domain/entities/entities";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
}

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string){
    super(props, id)
    this.props.created_at = this.props.created_at ?? new Date();
  }

  update(value: string): void{
    this.name = value;
  }

  updatePassword(value: string):void {
    this.password = value
  }

  get name() {
    return this.props.name
  }

  private set name(value: string){
    this.props.name = value;
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  private set password(value: string){
    this.props.password = value;
  }

  get createdAt() {
    return this.props.created_at
  }
}
