const express = require("express");
const fs = require("fs").promises; // fs modulini promise qilamiz
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { log } = require("console");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// const upload = multer({ storage: storage });
// const uploadPic = multer({ storage: storagePic });

// *FILES
// app.use("/files/pics", express.static(path.join(__dirname, "files/pics")));

async function readData(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Faylni o'qishda xatolik yuz berdi: ${error}`);
    return [];
  }
}

async function writeData(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log("Ma'lumotlar saqlandi");
  } catch (error) {
    console.error(`Faylni yozishda xatolik yuz berdi: ${error}`);
  }
}

// app.post("api/uploadFile", upload.single("file"), (req, res) => {
//   res.send("Fayl muvaffaqiyatli yuklandi");
// });

// *LOGIN
app.get("/api/admin", async (req, res) => {
  const data = await readData("collection/admin/admin.json");
  res.json(data);
});

// Products
app.get("/api/products", async (req, res) => {
  const data = await readData("./collection/products/products.json");
  res.json(data);
});

// app.put("api/books/:id", async (req, res) => {
//   try {
//     const books = await readData("collection/books/books.json");
//     const id = parseInt(req.params.id);
//     const index = books.findIndex((book) => book.id === id);

//     if (index === -1) {
//       res.status(404).send("Bunday ID bilan kitob topilmadi");
//       return;
//     }

//     books[index] = { ...books[index], ...req.body };
//     await writeData("collection/books/books.json", books);
//     console.log("Kitob muvaffaqiyatli yangilandi");
//     res.send("Kitob muvaffaqiyatli o'yangilandi");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server xatosi");
//   }
// });

// app.delete("api/categories/:id", async (req, res) => {
//   try {
//     const categories = await readData("collection/categories/categories.json");
//     const id = parseInt(req.params.id);
//     const index = categories.findIndex((category) => category.id === id);

//     if (index === -1) {
//       res.status(404).send("Bunday ID bilan kategoriya topilmadi");
//       return;
//     }

//     categories.splice(index, 1);
//     await writeData("collection/categories/categories.json", categories);
//     console.log("Kategoriya muvaffaqiyatli o'chirildi");
//     res.send("Kategoriya muvaffaqiyatli o'chirildi");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server xatosi");
//   }
// });

// *DEFAULT
app.get("/", (req, res) => {
  res.send(
    `
    <html>
      <head>
        <title>
          backend => Davr Leader 
        </title>
      </head>
      <body>
        <center><h1 style="color: red;">Davr Leader: backend</h1></center>
      </body>
    </html>
    `
  );
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} portida ishga tushdi`);
});
