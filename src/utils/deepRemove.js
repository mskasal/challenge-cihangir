import { isEmpty } from 'lodash';

const deepRemove = (data, id) => {

  Object.keys(data).map((key) => {
    if (data[key].ID === id) {
      delete data[key];
    } else if (data[key].ID !== id && !isEmpty(data[key].children)) {
      deepRemove(data[key].children, id);
    }
  });

  return data;
};

export default deepRemove;
