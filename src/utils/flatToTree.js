/**
 * Take a parent/child relative array and make nested object returns as array
 * @param data {Array} flat nested array
 * @returns {Array}
 */
const toTree = (data)  => { // eslint-disable-line
  const listData = { };

  // create a object keys are IDs and values are items itself
  // With this object, things getting easier to play :)
  data.map((item) => { // eslint-disable-line
    listData[item.ID] = item;
  });

  // check if object item has parent push it to parent's children array
  data.map((item) => { // eslint-disable-line
    const parent = listData[item.parentID];

    if (item.parentID !== undefined &&
      parent !== undefined &&
      listData.hasOwnProperty(item.parentID)){ // eslint-disable-line

      if (parent.children === undefined) {
        parent.children = {};
      }
      parent.children[item.ID] = item;
    }
  });

  // Flat the object by deleting child items
  Object.keys(listData).map((key) => { // eslint-disable-line
    if (listData[key].parentID) {
      delete listData[key];
    }
  });

  return listData;
};

export default toTree;
