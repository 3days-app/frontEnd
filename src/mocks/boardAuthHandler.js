import { rest } from "msw";



const boardList = (number) => {
  return rest.get(`/hong-si/board/${number}`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
        board_id: 1,
        image:"https://placebear.com/640/360",
        content : "오운어깨!"
      },
      {
        board_id: 2,
        image:"https://placebear.com/640/360",
        content : "오운등!"
      },
      {
        board_id: 3,
        image:"https://placebear.com/640/360",
        content : "오운팔!"
      },
      {
        board_id: 4,
        image:"https://placebear.com/640/360",
        content : "오운다리!"
      },
      {
        board_id: 5,
        image:"https://placebear.com/640/360",
        content : "오운허리!"
      },
    ])
    );
  });
};

export default boardList;