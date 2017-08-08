import { deepRemove } from '../';

describe('deep remove', () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      5: {
        ID: 5,
        Phone: '(755) 968-6539',
        City: 'Gönen',
        Name: 'Madeson',
        children: {
          8: {
            ID: 8,
            parentID: 5,
            Phone: '(168) 452-3538',
            City: 'Worksop',
            Name: 'Rowan'
          }
        }
      }
    };
  });

  it('should delete object with given id', () => {
    const removedData = deepRemove(mockData, 8);
    expect(removedData.children).toBe(undefined);
  });
});
