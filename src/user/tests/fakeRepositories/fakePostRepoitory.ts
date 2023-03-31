import PostEntity from '../../../db/entities/Post';

export class PostRepositoryFake {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public create() {
    return {
      post: {
        postId: 1,
        content: 'post content',
        title: 'post title',
        comments: [],
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async save() {
    return {
      author: {},
      post: {
        postId: 1,
        content: 'post content',
        title: 'post title',
        comments: [],
      },
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async remove(): Promise<void> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async findOne(): Promise<Partial<PostEntity>> {
    return {
      postId: 1,
      content: 'post content',
      title: 'post title',
      comments: [],
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
