const express = require("express"); //express 모듈 불러오기
const cors = require("cors"); //cors 모듈 불러오기
const PORT = "8080";

const app = express(); //express 모듈을 사용하기 위해 app 변수에 할당한다.

// const corsOptions = {
//   origin: "http://localhost:3000", // 허용할 주소
//   credentials: true, // 인증 정보 허용
// };

// const corsOption2 = ["http://localhost:3000", "http://localhost:3001"];

app.use(cors()); //http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다. (교수님 왈: 항상 100%는 아님)
app.use(express.json()); //express 모듈의 json() 메소드를 사용한다.

app.get("/", (req, res) => {
  res.send("Hello world https test completed");
});

// app.get("/get_tasks", async (req, res) => {
//   try {
//     const result = await database.query("SELECT * FROM task");
//     return res.status(200).json(result.rows);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }); //getRoutes에서 가져와 사용(use)하기 때문에 이제 사용하지 않음

app.use(require("./routes/getRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/updateRoutes"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지
