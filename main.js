console.log('Hello World!');
//获取元素
var nums=document.getElementById('nums');
var lens=document.getElementById('lens');
var nums1=document.getElementById('num');
var lens1=document.getElementById('len');
var p=document.getElementById('up')

var nump=document.getElementById('nump')
var zmsp=document.getElementById('zmsp')
var zmlp=document.getElementById('zmlp')
var stxtp=document.getElementById('stxtp')
//定义密码包含的部分
var snum="0123456789";
var szms="qwertyuiopasdfghjklzxcvbnm";
var szmb="QWERTYUIOPASDFGHJKLZXCVBNM";
var sspf="~!@#%'&*?()-_:;/.$|[]¥{}€´`=+"
//定义主函数
function creat(){
  //定义输出的密码s
  var s="";
  //更新数据
  var num=nums.value;
  var len=lens.value;
  
   nums1.innerHTML=num;
   lens1.innerHTML=len;
  if( num==0||len==0){
    s='There is nothing.';
  }
  
  //定义密码所有所含的字符sxs
  var sxs='';
  //条件判断密码包含的内容
  let bool=0
  if(nump.checked){
    sxs+=snum;
    bool=1;
  }
  if(zmsp.checked){
    sxs+=szms;
    bool=1;
  }
  if(zmlp.checked){
    sxs+=szmb;
    bool=1
  }
  if(stxtp.checked){
    sxs+=sspf;
    bool=1
  }
 if(bool==0) {
    s='There is nothing.'
  }
  if (s!='There is nothing.'){
  //设置随机数的范围
  var npd=sxs.length-2;
  //num:生成密码的数量
  for (let i=0;i<num;i++){
   // 定义存储单个密码的值的变量x
    var x='';
    //len:密码的长度
    for (let _=0;_<len;_++){
      n=Math.floor(Math.random()*npd)
      x=x+sxs[n];
    }
    
    s=s+x+"\n";
    if(len>24){
      s=s+'\n';
    }
  }
  }
  p.innerHTML=s;
}

function fresh(){
  //更新数据
  var num=nums.value;
  var len=lens.value;
  
   nums1.innerHTML=num;
   lens1.innerHTML=len;
   }
   
function setting(){
  
}
   
creat();
setInterval(fresh,200);