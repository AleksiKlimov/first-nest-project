import CategoryEntity from '../../src/db/entities/Categories';

export class CategoryRepositoryFake {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public create(): Partial<CategoryEntity> {
    return {
      categoryId: 1,
      name: 'footbal',
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async save(): Promise<void> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async remove(): Promise<void> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async findOne() {
    return {
      categoryId: 1,
      name: 'footbal',
    };
  }
}
