const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

// creates instance
const app = express();
const PORT = 8000;

// express middleware
// converts form to object and puts it into req.body
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// REST API
app
  .route("/api/users")
  .get((req, res) => {
    return res.json(users);
  })
  .post((req, res) => {
    const body = req.body;
    console.log(body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id: users.length });
    });
  });

// Browser can not do post requests so we used Postman for that case.

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => id === user.id);
  return res.json(user);
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
