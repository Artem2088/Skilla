import { URL, TOKEN } from "../../src/utils/Constant";

// let inOut = "";

// const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   Promise.reject(`${res.status} ${res.statusText}`);
// };

// const checkType = (sortType) => {
//   if (sortType >= 0) {
//     inOut = `&in_out=${sortType}`;
//   }
//   if (sortType == null) {
//     inOut = "";
//   }
//   return inOut;
// };

// export const getList = async (date, endDate, sortType) => {
//   checkType(sortType);

//   const res = await fetch(
//     `${URL}/getList?date_start=${date}&date_end=${endDate}${inOut}`,
//     {
//       method: "POST",
//       headers: {
//         authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return checkResponse(res);
// };

export const getRecordUser = async (id_record, id_partner) => {
  const res = await fetch(
    `${URL}/getRecord?record=${id_record}&partnership_id=${id_partner}`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": "filename=record.mp3",
      },
    }
  );
  if (res.ok) {
    return res.blob();
  }
  Promise.reject(`${res.status} ${res.statusText}`);
};
