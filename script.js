//24NT01063 NGUYỄN THỊ HÀ PHƯƠNG
const ds = [ // tạo mảng tên ds
  {
    name: "chim", //tên vật
    folder: "./images/chim", //thư mục ảnh
    imgcount: 6, //số ảnh có trong thư mục
    prefix: "chim", //tiền tố ảnh
    nguon: "./images/chim/chim_1.jpg", //nguồn ảnh ban đầu
  },

  {
    name: "chó",
    folder: "./images/cho",
    imgcount: 6,
    prefix: "cho",
    nguon: "./images/cho/cho_1.jpg",
  },

  {
    name: "gấu trúc",
    folder: "./images/gau-truc",
    imgcount: 6,
    prefix: "panda",
    nguon: "./images/gau-truc/panda_1.jpg",
  },

  {
    name: "mèo",
    folder: "./images/meo",
    imgcount: 6,
    prefix: "meo",
    nguon: "./images/meo/meo_1.jpg",
  },
  
  {
    name: "thỏ",
    folder: "./images/tho",
    imgcount: 6,
    prefix: "tho",
    nguon: "./images/tho/tho_1.jpg",
  }
];

//lấy thẻ từ html
const Animalcontainer = document.getElementById("animalList");//thêm card, sửa nội dung
const danhsachcontainer = document.getElementById("danhsach");//hiển thị danh sách hình ảnh động vật

//duyệt từng phần tử trong mảng ds, mỗi lần lặp lại 
ds.forEach(animal => { // tạo thẻ
  const card = document.createElement("div");//tạo 1 thẻ div mới
  card.classList.add("animal-card"); // animal-card để cùng tên bên html

  // nội dung trong thẻ
  card.innerHTML = `
    <img src="${animal.nguon}" alt="${animal.name}">
    <div class="animal-name">tên động vật: ${animal.name}</div>
  `;

  //gắn sự kiện click cho mỗi thẻ card, khi click vào thẻ sẽ hiện thông báo
  card.addEventListener("click", () => {
    loadGallery(animal);
    alert("đã có sự kiện click");
  });

  function loadGallery(animal) {
    danhsachcontainer.innerHTML = "";

    for (let i = 1; i <= animal.imgcount; i++) {
      const img = document.createElement("img");
      img.src = `${animal.folder}/${animal.prefix}_${i}.jpg`;
      img.alt = `${animal.name} ${i}`;
      danhsachcontainer.appendChild(img);
    }
  }

  Animalcontainer.appendChild(card);
});
