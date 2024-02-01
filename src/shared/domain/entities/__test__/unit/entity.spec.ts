import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entities"

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps>{}

describe("Entity unit tests", () => {

  beforeEach(() => {

  })

  it("Should set props and id", () => {
    const props = {
      prop1: 'value',
      prop2: 12
    }

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  })

  it("Should accepted a valid uuid", () => {
    const props = { prop1: 'value', prop2: 12 }
    const id = '7bf6e047-b99c-45f2-afbf-59348921d489';
    const entity = new StubEntity(props);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  })

  it("Should convert enity data to JS Object", () => {
    const props = { prop1: 'value', prop2: 12 }
    const id = '7bf6e047-b99c-45f2-afbf-59348921d489';
    const entity = new StubEntity(props);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    });
  })
})
