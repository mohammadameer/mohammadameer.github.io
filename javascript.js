function addstyle()
{
    document.getElementById('style').href='css.css';
}
let score = [];

let mawzona = [];

let index = 0;

let course = ["رياضيات","فيزياء" ,"احياء" ,"كيمياء" , "حاسب", "مهارات","ريادة" ,"بدنية" , "انقلش1","انقلش2" ];

for(let i = 0 ; i < course.length  ; i++){
  document.getElementById("main").innerHTML += `<div class="inpts"></div><label > أدخل نسبة مادة ${course[i]} : <input id="input${i}"  type="text" placeholder="أدخل النسبة هنا"> </label></div><br>`;

}

document.getElementById("main").innerHTML += `<div class="inpts"></div><label > أدخل المعدل التراكمي <input id="input10"  type="text" placeholder="أدخل المعدل هنا"> </label></div><br>`;
function calc(){

for(let i = 0 ; i < course.length ; i++){
  score[i] = document.getElementById(`input${i}`).value;
}
let gpa = document.getElementById("input10").value;

let gpaM = (gpa*20) * 0.3;

     
        //حساب موزوzنة الحاسب
        let s1 = score[0] * 3;
        let s2 = score[4] * 2;
        let s3 = score[9] * 3;
        let total = (s1 + s2 + s3) / 8;
        let computerM = total * 0.7 + gpaM;
        mawzona[index]=computerM;
        index++;
       
          //حساب موزونة العلوم
        let o1= score[0]*3;
        let o2 = score[1]*3;
        let o3 = score[2]*3;
        let o4 = score[3]*3;
        
        let scienceM = ((o1+o2+o3+o4)/12)*0.7 +gpaM;
        mawzona[index]=scienceM;
        index++;
        //حساب موزونة الهندسة
        let e1 = score[0]*3;
        let e2 = score[1]*3;
        let e3 = score[3]*3;
        
        let engineeringM = ((e1+e2+e3)/9)*0.7 +gpaM;
        mawzona[index]=engineeringM;
        index++;
        //حساب موزونة الادارة
        
        let m1 = score[9]*3;
        let m2 = score[0]*3;
        let m3 = score[6]*2;
        let business = ((m1+m2+m3)/8)*0.7 +gpaM;
        mawzona[index]=business;
        index++;
        
        //حساب موزونة الطب
        let t1 = score[2]*3;
        let t2 = score[3]*3;
        let t3= score[9]*3;
        let medicineM =((t1+t2+t3)/9) *0.7 +gpaM;
        mawzona[index]=medicineM;
        index++;

        let colleges = ["الحاسب", "العلوم","الهندسة" ,"الاعمال" ,"الطب"];
        for(let k =0; k<5; k++){
          document.getElementById("main").innerHTML+=`<h2> موزونة   ${colleges[k]} : ${Number(mawzona[k]).toFixed(2)}`;
         
        }
        
        let high = 50; let highN = "";
       for(let n =0; n<5; n++){
           if(mawzona[n]>high){
               high = mawzona[n];
               highN = colleges[n];
           }
       }
       document.getElementById("main").innerHTML+= `اعلى نسبة موزونة هي  لكلية ${highN}`;
       document.getElementById("main").innerHTML+= ` : ${Number(high).toFixed(2)}`;
      }