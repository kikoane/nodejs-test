import axios from 'axios';

const fetchData = async url => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
};

export { fetchData };
