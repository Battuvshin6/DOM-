const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "02.02.2022",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "01.02.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "31.01.2022",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "06.02.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "06.01.2022",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "16.01.2022",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "17.01.2022",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "13.01.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "27.01.2022",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];
function btn1(){
let sortUp = document.createElement('button')
sortUp.setAttribute('id','btn1')
let text1 = document.createTextNode('Sort-Up')
sortUp.appendChild(text1)
document.querySelector('#navbar').appendChild(sortUp)

let sortDown = document.createElement('button')
sortDown.setAttribute('id','btn2')
let text2 = document.createTextNode('Sort-Down')
sortDown.appendChild(text2)
document.querySelector('#navbar').appendChild(sortDown)

let allNews = document.createElement('button')
allNews.setAttribute('id','btn3')
let text3 = document.createTextNode('Бүх мэдээ')
allNews.appendChild(text3)
document.querySelector('#navbar').appendChild(allNews)

let politic = document.createElement('button')
politic.setAttribute('id','btn4')
let text4 = document.createTextNode('Улс төр')
politic.appendChild(text4)
document.querySelector('#navbar').appendChild(politic)

let sport = document.createElement('button')
sport.setAttribute('id','btn5')
let text5 = document.createTextNode('Спорт')
sport.appendChild(text5)
document.querySelector('#navbar').appendChild(sport)
}
btn1() 
function generateHtmlElement(arr1) {
  arr1.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("id", "singleNews");
    let h2 = document.createElement("h2");
    let title = document.createTextNode(e.title);
    h2.appendChild(title);
    let date = document.createTextNode(e.date);
    h2.setAttribute("type", "" + e.type);
    let image = document.createElement("img");
    image.setAttribute("src", "" + e.pic_url);
    div.appendChild(h2);
    div.appendChild(date);
    div.appendChild(image);

    document.querySelector("#mainNews").appendChild(div);
  });
}
// энд removeHtmlElement() фүнкцийг бич!
function removeHtmlElement() {
  let remove = document.querySelectorAll(".singleNews");
  remove.forEach((e) => {
    e.remove();
  });
}
/*
энд 5н button-оо барьж аваад addEventListener хииж */
/*removeHtmlElement() фүнкцийг дуудаж index.html доторох
<div id="mainNews"> элементийг цэвэрлсний дараа
зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул
*/
document.querySelector("#btn1").addEventListener  ("click", () => {
  let arr2 = news.sort((e1,e2)=>{
    if (e1.date<e2.date){
      return -1
    }else {
      return 1
    }
  })
  generateHtmlElement(arr2)
  // removeHtmlElement()
})
document.querySelector('#btn2').addEventListener('click',()=>{
  let arr3 = news.sort((el1,el2)=>{
    if (el1.date<el2.date){
      return -1
    }else {
      return 1
    }
  })
  removeHtmlElement()
  generateHtmlElement(arr3)
})
document.querySelector("#btn3").addEventListener("click", () => {
  removeHtmlElement();
  generateHtmlElement(news);
});
document.querySelector("#btn4").addEventListener("click", () => {
  let arr4 = news.filter((etype) => {
    return etype.type === "Улс төр";
  });
  generateHtmlElement(arr4);
  removeHtmlElement();
});
document.querySelector("#btn5").addEventListener("click", () => {
  removeHtmlElement();
  let arr5 = news.filter((etype) => {
    return etype.type === "Спорт";
  });
  generateHtmlElement(arr5);
});




