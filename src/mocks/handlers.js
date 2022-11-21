import { rest } from "msw";
import boardList, { boardDetail } from "./boardAuthHandler";

import hongsiList, { hongsiDetail } from "./mainHandler";
import myPageHongsi from "./mypage";
export const handlers = [
  // 로그인 테스트
  // rest.post("/auth/token", async (req, res, ctx) => {
  //   return res(ctx.status(200));
  // }),
  rest.post("/logout", async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  // 기본형
  rest.post("/auth/token", async (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        userImage:
          "https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg",
        nickname: "준구짱",
      })
    );
  }),
  hongsiList(),
  hongsiDetail(1),
  hongsiDetail(2),
  hongsiDetail(3),
  boardList(1),
  boardList(2),
  boardList(3),
  myPageHongsi("owning"),
  myPageHongsi("joining"),
  myPageHongsi("completed"),
];
