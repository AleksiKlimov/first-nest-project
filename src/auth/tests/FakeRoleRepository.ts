import RoleEntity from '../../db/entities/Role';

export class RoleRepositoryFake {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public create(): Partial<RoleEntity> {
    return {
      roleId: 1,
      name: 'admin',
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async save(): Promise<void> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async remove(): Promise<void> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async findOne(): Promise<Partial<RoleEntity>> {
    return {
      roleId: 1,
      name: 'admin',
    };
  }

  // public createQueryBuilder = jest.fn(() => ({
  //   addSelect: jest.fn().mockReturnThis(),
  //   where: jest.fn().mockReturnThis(),
  //   leftJoinAndSelect: jest.fn().mockReturnThis(),
  //   getOne: jest.fn().mockReturnValue({
  //     userId: 2,
  //     email: 'tesst',
  //     address: {
  //       city: 'Moscow',
  //       country: 'Russia',
  //       street: 'Petrovskaya',
  //     },
  //   }),
  // }));
}
