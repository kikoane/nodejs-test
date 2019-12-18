import axios from 'axios';

const fetchData = async url => {
    let data = {};
    try {
        data = await axios.get(url);
    } catch (err) {
        console.log(err);
    }
    return data;
};

export { fetchData };
