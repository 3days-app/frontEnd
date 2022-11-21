import axios from "axios";

export const handleRemove = (url) => {
  if (window.confirm("게시글을 삭제하겠습니까?")) {
    axios.delete(`/hong-si/${url}}`).then((res) => {
      console.log(res.data);
    });
  }
};
