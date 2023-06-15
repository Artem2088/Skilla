import { URL, TOKEN } from '../../src/utils/Constant';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    Promise.reject(`${res.status} ${res.statusText}`);
};

export const getList = async () => {
  let date = new Date()
  let current = date.toISOString().slice(0, 10)

    const res = await fetch(`${URL}/mango/getList?date_start=${current}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      }
    });
    return checkResponse(res);
  };
