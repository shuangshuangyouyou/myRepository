var personArray = new Array();
var nameList = [
  '麻辣香锅',
  '老北京豆腐脑',
  '香辣水煮肉',
  '红烧冬瓜',
  '麻婆豆腐',
  '牛腩大乱炖',
  '扬州炒饭',
  '羊肉面片',
  '叉烧肉',
  '冰火菠萝包',
  '海南鸡饭',
  '升级版腌笋鲜',
  '宫保鸡丁',
  '叉烧肉',
  '台式三杯鸡',
  '客家咸鸡',
  '艾窝窝',
  '广州腊味煲仔饭',
  '羊肉泡馍',
  '麻辣烫',
  '台式卤肉饭',
  '黄金满地蒜香蟹',
  '脆皮炒年糕',
  '烤鱼',
  '鸭心煲冬瓜',
  '酥油茶',
  '水煮肉片',
  '糖不甩',
  '香芹土豆丝',
  '原味桶仔鸡',
];
function initData() {
  //var $people = localStorage.getItem("peopleData");
  //if(!$people){
  //    localStorage.setItem("peopleData", nameList);
  //}else {
  //    nameList = $people.split(',');
  //}
  personArray = [];
  for (var i = 0; i < nameList.length; i++) {
    var person = {
      id: i,
      image: 'img/tx' + (i + 1) + '.jpg',
      thumb_image: 'img/tx' + (i + 1) + '.jpg',
      name: nameList[i],
    };
    personArray.push(person);
  }
}
initData();
