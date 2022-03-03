import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL + '/content';

export async function contentToggleActive(cont_srl) {
  let result = false;
  axios.delete(URL, { data: { cont_srl: cont_srl } }).then((res) => {
    result = res.data;
  });
  return result;
}
