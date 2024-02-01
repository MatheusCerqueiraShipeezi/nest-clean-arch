import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../testing/helpers/user-data-builder';

describe("User Entity unit tests", () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({})

    sut = new UserEntity(props);
  })

  it("constructor method", () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.name).toEqual(props.name);
  })

  it("Getter of field name", () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  })

  it("Setter of field name", () => {
    sut['name'] = 'User name'
    expect(sut.props.name).toBe('User name');
    expect(typeof sut.props.name).toBe('string');
  })

  it("Getter of field email", () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  })

  it("Getter of field password", () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  })

  it("Setter of field password", () => {
    sut['password'] = 'User password'
    expect(sut.props.password).toBe('User password');
    expect(typeof sut.props.password).toBe('string');
  })

  it("Getter of field created at", () => {
    expect(sut.props.created_at).toBeDefined();
    expect(sut.props.created_at).toBeInstanceOf(Date);
  })

  it("Should update a user", () => {
    sut.update('user name');
    expect(sut.props.name).toBe('user name');
  })

  it("Should update a user", () => {
    sut.updatePassword('user password');
    expect(sut.props.password).toBe('user password');
  })
})
