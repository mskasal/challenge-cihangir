import { toTree } from '../';

describe('flat to tree', () => {
  let mockData;

  beforeEach(() => {
    mockData = [
      {
        ID: 5,
        Phone: '(755) 968-6539',
        City: 'Gönen',
        Name: 'Madeson'
      },
      {
        ID: 8,
        parentID: 5,
        Phone: '(168) 452-3538',
        City: 'Worksop',
        Name: 'Rowan'
      }
    ];
  });

  it('should create a nested objects', () => {
    const treeData = toTree(mockData);
    expect(treeData[5].children[8].ID).toBe(8);
  });
});
