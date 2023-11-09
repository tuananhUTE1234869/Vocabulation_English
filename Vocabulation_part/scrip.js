//----------------------------------random----------------------------------
const rd_go = document.querySelector("#rd-go")
const rd_back = document.querySelector(".rd-back")


rd_go.addEventListener("click", function(){
    document.querySelector(".rd").style.display="flex"
})
rd_back.addEventListener("click", function(){
    document.querySelector(".rd").style.display="none"
})






















const submitCase1=document.querySelector(".li1")
const Xdong1= document.querySelector(".xdong1")
const Reset= document.querySelector(".reset")

submitCase1.addEventListener("click", function(){
    document.querySelector(".case1").style.display="flex"
})

Xdong1.addEventListener("click", function(){
    document.querySelector(".case1").style.display="none"
})


let index=0;

    //*.......................row 1 .......................*//
//case1 - row1 - item 1 
const case1_row1_item1_random1_1=document.querySelector(".case1-row1-item1-random1-1")
const case1_row1_item1_random1_2=document.querySelector(".case1-row1-item1-random1-2")
const case1_row1_item1_random1_3=document.querySelector(".case1-row1-item1-random1-3")
const case1_row1_item1_random1_4=document.querySelector(".case1-row1-item1-random1-4")
const case1_row1_item1_random1_5=document.querySelector(".case1-row1-item1-random1-5")

//case1 - row1 - item 2 
const case1_row1_item2_random2_1=document.querySelector(".case1-row1-item2-random2-1")
const case1_row1_item2_random2_2=document.querySelector(".case1-row1-item2-random2-2")
const case1_row1_item2_random2_3=document.querySelector(".case1-row1-item2-random2-3")
const case1_row1_item2_random2_4=document.querySelector(".case1-row1-item2-random2-4")
const case1_row1_item2_random2_5=document.querySelector(".case1-row1-item2-random2-5")

//case1 - row1 - item 3
const case1_row1_item3_random2_1=document.querySelector(".case1-row1-item3-random2-1")
const case1_row1_item3_random2_2=document.querySelector(".case1-row1-item3-random2-2")
const case1_row1_item3_random2_3=document.querySelector(".case1-row1-item3-random2-3")
const case1_row1_item3_random2_4=document.querySelector(".case1-row1-item3-random2-4")
const case1_row1_item3_random2_5=document.querySelector(".case1-row1-item3-random2-5")

//case1 - row1 - item 4
const case1_row1_item4_random2_1=document.querySelector(".case1-row1-item4-random2-1")
const case1_row1_item4_random2_2=document.querySelector(".case1-row1-item4-random2-2")
const case1_row1_item4_random2_3=document.querySelector(".case1-row1-item4-random2-3")
const case1_row1_item4_random2_4=document.querySelector(".case1-row1-item4-random2-4")
const case1_row1_item4_random2_5=document.querySelector(".case1-row1-item4-random2-5")


    //*.......................row 2.......................*//
//case1 - row2 - item 1 
const case1_row2_item1_random1_1=document.querySelector(".case1-row2-item1-random1-1")
const case1_row2_item1_random1_2=document.querySelector(".case1-row2-item1-random1-2")
const case1_row2_item1_random1_3=document.querySelector(".case1-row2-item1-random1-3")
const case1_row2_item1_random1_4=document.querySelector(".case1-row2-item1-random1-4")
const case1_row2_item1_random1_5=document.querySelector(".case1-row2-item1-random1-5")

//case1 - row2 - item 2 
const case1_row2_item2_random2_1=document.querySelector(".case1-row2-item2-random2-1")
const case1_row2_item2_random2_2=document.querySelector(".case1-row2-item2-random2-2")
const case1_row2_item2_random2_3=document.querySelector(".case1-row2-item2-random2-3")
const case1_row2_item2_random2_4=document.querySelector(".case1-row2-item2-random2-4")
const case1_row2_item2_random2_5=document.querySelector(".case1-row2-item2-random2-5")

//case1 - row2 - item 3
const case1_row2_item3_random2_1=document.querySelector(".case1-row2-item3-random2-1")
const case1_row2_item3_random2_2=document.querySelector(".case1-row2-item3-random2-2")
const case1_row2_item3_random2_3=document.querySelector(".case1-row2-item3-random2-3")
const case1_row2_item3_random2_4=document.querySelector(".case1-row2-item3-random2-4")
const case1_row2_item3_random2_5=document.querySelector(".case1-row2-item3-random2-5")

//case1 - row2 - item 4
const case1_row2_item4_random2_1=document.querySelector(".case1-row2-item4-random2-1")
const case1_row2_item4_random2_2=document.querySelector(".case1-row2-item4-random2-2")
const case1_row2_item4_random2_3=document.querySelector(".case1-row2-item4-random2-3")
const case1_row2_item4_random2_4=document.querySelector(".case1-row2-item4-random2-4")
const case1_row2_item4_random2_5=document.querySelector(".case1-row2-item4-random2-5")

    //*.......................row 3 .......................*//
//case1 - row2 - item 1 
const case1_row3_item1_random1_1=document.querySelector(".case1-row3-item1-random1-1")
const case1_row3_item1_random1_2=document.querySelector(".case1-row3-item1-random1-2")
const case1_row3_item1_random1_3=document.querySelector(".case1-row3-item1-random1-3")
const case1_row3_item1_random1_4=document.querySelector(".case1-row3-item1-random1-4")
const case1_row3_item1_random1_5=document.querySelector(".case1-row3-item1-random1-5")

//case1 - row2 - item 2 
const case1_row3_item2_random2_1=document.querySelector(".case1-row3-item2-random2-1")
const case1_row3_item2_random2_2=document.querySelector(".case1-row3-item2-random2-2")
const case1_row3_item2_random2_3=document.querySelector(".case1-row3-item2-random2-3")
const case1_row3_item2_random2_4=document.querySelector(".case1-row3-item2-random2-4")
const case1_row3_item2_random2_5=document.querySelector(".case1-row3-item2-random2-5")

//case1 - row2 - item 3
const case1_row3_item3_random2_1=document.querySelector(".case1-row3-item3-random2-1")
const case1_row3_item3_random2_2=document.querySelector(".case1-row3-item3-random2-2")
const case1_row3_item3_random2_3=document.querySelector(".case1-row3-item3-random2-3")
const case1_row3_item3_random2_4=document.querySelector(".case1-row3-item3-random2-4")
const case1_row3_item3_random2_5=document.querySelector(".case1-row3-item3-random2-5")

//case1 - row2 - item 4
const case1_row3_item4_random2_1=document.querySelector(".case1-row3-item4-random2-1")
const case1_row3_item4_random2_2=document.querySelector(".case1-row3-item4-random2-2")
const case1_row3_item4_random2_3=document.querySelector(".case1-row3-item4-random2-3")
const case1_row3_item4_random2_4=document.querySelector(".case1-row3-item4-random2-4")
const case1_row3_item4_random2_5=document.querySelector(".case1-row3-item4-random2-5")



    //*.................................row 1..............................*//
// variable case1-row1-item1
let case1_row1_item1_random1_acc1_x=0;
let case1_row1_item1_random1_acc2_x=0;
let case1_row1_item1_random1_acc3_x=0;
let case1_row1_item1_random1_acc4_x=0;
let case1_row1_item1_random1_acc5_x=0;

//variable case1-row1-item2
let case1_row1_item2_random2_acc1_x=0;
let case1_row1_item2_random2_acc2_x=0;
let case1_row1_item2_random2_acc3_x=0;
let case1_row1_item2_random2_acc4_x=0;
let case1_row1_item2_random2_acc5_x=0;

//variable case1-row1-item3
let case1_row1_item3_random2_acc1_x=0;
let case1_row1_item3_random2_acc2_x=0;
let case1_row1_item3_random2_acc3_x=0;
let case1_row1_item3_random2_acc4_x=0;
let case1_row1_item3_random2_acc5_x=0;

//variable case1-row1-item4
let case1_row1_item4_random2_acc1_x=0;
let case1_row1_item4_random2_acc2_x=0;
let case1_row1_item4_random2_acc3_x=0;
let case1_row1_item4_random2_acc4_x=0;
let case1_row1_item4_random2_acc5_x=0;

 //*.................................row 2..............................*//
// variable case1-row2-item1
let case1_row2_item1_random1_acc1_x=0;
let case1_row2_item1_random1_acc2_x=0;
let case1_row2_item1_random1_acc3_x=0;
let case1_row2_item1_random1_acc4_x=0;
let case1_row2_item1_random1_acc5_x=0;

//variable case1-row2-item2
let case1_row2_item2_random2_acc1_x=0;
let case1_row2_item2_random2_acc2_x=0;
let case1_row2_item2_random2_acc3_x=0;
let case1_row2_item2_random2_acc4_x=0;
let case1_row2_item2_random2_acc5_x=0;

//variable case1-row2-item3
let case1_row2_item3_random2_acc1_x=0;
let case1_row2_item3_random2_acc2_x=0;
let case1_row2_item3_random2_acc3_x=0;
let case1_row2_item3_random2_acc4_x=0;
let case1_row2_item3_random2_acc5_x=0;

//variable case1-row2-item4
let case1_row2_item4_random2_acc1_x=0;
let case1_row2_item4_random2_acc2_x=0;
let case1_row2_item4_random2_acc3_x=0;
let case1_row2_item4_random2_acc4_x=0;
let case1_row2_item4_random2_acc5_x=0;

 //*.................................row 3..............................*//
// variable case1-row2-item1
let case1_row3_item1_random1_acc1_x=0;
let case1_row3_item1_random1_acc2_x=0;
let case1_row3_item1_random1_acc3_x=0;
let case1_row3_item1_random1_acc4_x=0;
let case1_row3_item1_random1_acc5_x=0;

//variable case1-row3-item2
let case1_row3_item2_random2_acc1_x=0;
let case1_row3_item2_random2_acc2_x=0;
let case1_row3_item2_random2_acc3_x=0;
let case1_row3_item2_random2_acc4_x=0;
let case1_row3_item2_random2_acc5_x=0;

//variable case1-row3-item3
let case1_row3_item3_random2_acc1_x=0;
let case1_row3_item3_random2_acc2_x=0;
let case1_row3_item3_random2_acc3_x=0;
let case1_row3_item3_random2_acc4_x=0;
let case1_row3_item3_random2_acc5_x=0;

//variable case1-row3-item4
let case1_row3_item4_random2_acc1_x=0;
let case1_row3_item4_random2_acc2_x=0;
let case1_row3_item4_random2_acc3_x=0;
let case1_row3_item4_random2_acc4_x=0;
let case1_row3_item4_random2_acc5_x=0;






    // submit reset
    Reset.addEventListener("click", function(){

        //*.....................................................................row 1.........................................................*//
        //case1 -row1 - item 1 
        case1_row1_item1_random1_1.classList.remove("case1-row1-item1-random1-acc1");
        case1_row1_item1_random1_2.classList.remove("case1-row1-item1-random1-acc2");
        case1_row1_item1_random1_3.classList.remove("case1-row1-item1-random1-acc3");
        case1_row1_item1_random1_4.classList.remove("case1-row1-item1-random1-acc4");
        case1_row1_item1_random1_5.classList.remove("case1-row1-item1-random1-acc5");

        //case1 - row1 - item2 
        case1_row1_item2_random2_1.classList.remove("case1-row1-item2-random2-acc1");
        case1_row1_item2_random2_2.classList.remove("case1-row1-item2-random2-acc2");
        case1_row1_item2_random2_3.classList.remove("case1-row1-item2-random2-acc3");
        case1_row1_item2_random2_4.classList.remove("case1-row1-item2-random2-acc4");
        case1_row1_item2_random2_5.classList.remove("case1-row1-item2-random2-acc5");

        //case1 - row1 - item3
        case1_row1_item3_random2_1.classList.remove("case1-row1-item3-random2-acc1");
        case1_row1_item3_random2_2.classList.remove("case1-row1-item3-random2-acc2");
        case1_row1_item3_random2_3.classList.remove("case1-row1-item3-random2-acc3");
        case1_row1_item3_random2_4.classList.remove("case1-row1-item3-random2-acc4");
        case1_row1_item3_random2_5.classList.remove("case1-row1-item3-random2-acc5");
        
        //case1 - row1 - item4
        case1_row1_item4_random2_1.classList.remove("case1-row1-item4-random2-acc1");
        case1_row1_item4_random2_2.classList.remove("case1-row1-item4-random2-acc2");
        case1_row1_item4_random2_3.classList.remove("case1-row1-item4-random2-acc3");
        case1_row1_item4_random2_4.classList.remove("case1-row1-item4-random2-acc4");
        case1_row1_item4_random2_5.classList.remove("case1-row1-item4-random2-acc5");


        //*...................................................................row 2............................................................*//
        // case1 -row2 - item 1 
        case1_row2_item1_random1_1.classList.remove("case1-row2-item1-random1-acc1");
        case1_row2_item1_random1_2.classList.remove("case1-row2-item1-random1-acc2");
        case1_row2_item1_random1_3.classList.remove("case1-row2-item1-random1-acc3");
        case1_row2_item1_random1_4.classList.remove("case1-row2-item1-random1-acc4");
        case1_row2_item1_random1_5.classList.remove("case1-row2-item1-random1-acc5");

        //case1 -row2 - item2 
        case1_row2_item2_random2_1.classList.remove("case1-row2-item2-random2-acc1");
        case1_row2_item2_random2_2.classList.remove("case1-row2-item2-random2-acc2");
        case1_row2_item2_random2_3.classList.remove("case1-row2-item2-random2-acc3");
        case1_row2_item2_random2_4.classList.remove("case1-row2-item2-random2-acc4");
        case1_row2_item2_random2_5.classList.remove("case1-row2-item2-random2-acc5");

        //case1 -row2 - item3
        case1_row2_item3_random2_1.classList.remove("case1-row2-item3-random2-acc1");
        case1_row2_item3_random2_2.classList.remove("case1-row2-item3-random2-acc2");
        case1_row2_item3_random2_3.classList.remove("case1-row2-item3-random2-acc3");
        case1_row2_item3_random2_4.classList.remove("case1-row2-item3-random2-acc4");
        case1_row2_item3_random2_5.classList.remove("case1-row2-item3-random2-acc5");
        
        //case1 -row2 - item4
        case1_row2_item4_random2_1.classList.remove("case1-row2-item4-random2-acc1");
        case1_row2_item4_random2_2.classList.remove("case1-row2-item4-random2-acc2");
        case1_row2_item4_random2_3.classList.remove("case1-row2-item4-random2-acc3");
        case1_row2_item4_random2_4.classList.remove("case1-row2-item4-random2-acc4");
        case1_row2_item4_random2_5.classList.remove("case1-row2-item4-random2-acc5");





    //*...................................................................row 3............................................................*//
        // case1 -row3 - item 1 
        case1_row3_item1_random1_1.classList.remove("case1-row3-item1-random1-acc1");
        case1_row3_item1_random1_2.classList.remove("case1-row3-item1-random1-acc2");
        case1_row3_item1_random1_3.classList.remove("case1-row3-item1-random1-acc3");
        case1_row3_item1_random1_4.classList.remove("case1-row3-item1-random1-acc4");
        case1_row3_item1_random1_5.classList.remove("case1-row3-item1-random1-acc5");

        //case1 -row3 - item2 
        case1_row3_item2_random2_1.classList.remove("case1-row3-item2-random2-acc1");
        case1_row3_item2_random2_2.classList.remove("case1-row3-item2-random2-acc2");
        case1_row3_item2_random2_3.classList.remove("case1-row3-item2-random2-acc3");
        case1_row3_item2_random2_4.classList.remove("case1-row3-item2-random2-acc4");
        case1_row3_item2_random2_5.classList.remove("case1-row3-item2-random2-acc5");

        //case1 -row3 - item3
        case1_row3_item3_random2_1.classList.remove("case1-row3-item3-random2-acc1");
        case1_row3_item3_random2_2.classList.remove("case1-row3-item3-random2-acc2");
        case1_row3_item3_random2_3.classList.remove("case1-row3-item3-random2-acc3");
        case1_row3_item3_random2_4.classList.remove("case1-row3-item3-random2-acc4");
        case1_row3_item3_random2_5.classList.remove("case1-row3-item3-random2-acc5");
        
        //case1 -row3 - item4
        case1_row3_item4_random2_1.classList.remove("case1-row3-item4-random2-acc1");
        case1_row3_item4_random2_2.classList.remove("case1-row3-item4-random2-acc2");
        case1_row3_item4_random2_3.classList.remove("case1-row3-item4-random2-acc3");
        case1_row3_item4_random2_4.classList.remove("case1-row3-item4-random2-acc4");
        case1_row3_item4_random2_5.classList.remove("case1-row3-item4-random2-acc5");


        index=index+1;
        if(index>4){
            index=0;
        }
        //move div row1 
        document.querySelector(".case1-row1-item1-random1").style.right=index*100+"%";
        document.querySelector(".case1-row1-item2-random2").style.right=index*100+"%";
        document.querySelector(".case1-row1-item3-random2").style.right=index*100+"%";
        document.querySelector(".case1-row1-item4-random2").style.right=index*100+"%";

        //move div row2
        document.querySelector(".case1-row2-item1-random1").style.right=index*100+"%";
        document.querySelector(".case1-row2-item2-random2").style.right=index*100+"%";
        document.querySelector(".case1-row2-item3-random2").style.right=index*100+"%";
        document.querySelector(".case1-row2-item4-random2").style.right=index*100+"%";

        //move div row3 
        document.querySelector(".case1-row3-item1-random1").style.right=index*100+"%";
        document.querySelector(".case1-row3-item2-random2").style.right=index*100+"%";
        document.querySelector(".case1-row3-item3-random2").style.right=index*100+"%";
        document.querySelector(".case1-row3-item4-random2").style.right=index*100+"%";
    })





//*......................................................................row 1............................................................*//
    // control case1 - row1 - item1 
    case1_row1_item1_random1_1.addEventListener("click",function(){
        case1_row1_item1_random1_acc1_x=case1_row1_item1_random1_acc1_x+1;
        if (case1_row1_item1_random1_acc1_x>2){
            case1_row1_item1_random1_acc1_x=1;
        }
        if (case1_row1_item1_random1_acc1_x==1){
            case1_row1_item1_random1_1.classList.add("case1-row1-item1-random1-acc1");
        }
        if  (case1_row1_item1_random1_acc1_x==2){
            case1_row1_item1_random1_1.classList.remove("case1-row1-item1-random1-acc1");
        }  
    })
    case1_row1_item1_random1_2.addEventListener("click",function(){
        case1_row1_item1_random1_acc2_x=case1_row1_item1_random1_acc2_x+1;
        if (case1_row1_item1_random1_acc2_x>2){
            case1_row1_item1_random1_acc2_x=1;
        }
        if (case1_row1_item1_random1_acc2_x==1){
            case1_row1_item1_random1_2.classList.add("case1-row1-item1-random1-acc2");
        }
        if  (case1_row1_item1_random1_acc2_x==2){
            case1_row1_item1_random1_2.classList.remove("case1-row1-item1-random1-acc2");
        }  
    })
    case1_row1_item1_random1_3.addEventListener("click",function(){
        case1_row1_item1_random1_acc3_x=case1_row1_item1_random1_acc3_x+1;
        if (case1_row1_item1_random1_acc3_x>2){
            case1_row1_item1_random1_acc3_x=1;
        }
        if (case1_row1_item1_random1_acc3_x==1){
            case1_row1_item1_random1_3.classList.add("case1-row1-item1-random1-acc3");
        }
        if  (case1_row1_item1_random1_acc3_x==2){
            case1_row1_item1_random1_3.classList.remove("case1-row1-item1-random1-acc3");
        }  
    })

    case1_row1_item1_random1_4.addEventListener("click",function(){
        case1_row1_item1_random1_acc4_x=case1_row1_item1_random1_acc4_x+1;
        if (case1_row1_item1_random1_acc4_x>2){
            case1_row1_item1_random1_acc4_x=1;
        }
        if (case1_row1_item1_random1_acc4_x==1){
            case1_row1_item1_random1_4.classList.add("case1-row1-item1-random1-acc4");
        }
        if  (case1_row1_item1_random1_acc4_x==2){
            case1_row1_item1_random1_4.classList.remove("case1-row1-item1-random1-acc4");
        }  
    })

    case1_row1_item1_random1_5.addEventListener("click",function(){
        case1_row1_item1_random1_acc5_x=case1_row1_item1_random1_acc5_x+1;
        if (case1_row1_item1_random1_acc5_x>2){
            case1_row1_item1_random1_acc5_x=1;
        }
        if (case1_row1_item1_random1_acc5_x==1){
            case1_row1_item1_random1_5.classList.add("case1-row1-item1-random1-acc5");
        }
        if  (case1_row1_item1_random1_acc5_x==2){
            case1_row1_item1_random1_5.classList.remove("case1-row1-item1-random1-acc5");
        }  
    })




//control case1 - row1 - item2
    case1_row1_item2_random2_1.addEventListener("click", function(){
        case1_row1_item2_random2_acc1_x=case1_row1_item2_random2_acc1_x+1;
        if (case1_row1_item2_random2_acc1_x>2){
            case1_row1_item2_random2_acc1_x=1;
        }
        if (case1_row1_item2_random2_acc1_x==1){
            case1_row1_item2_random2_1.classList.add("case1-row1-item2-random2-acc1");
        }
        if  (case1_row1_item2_random2_acc1_x==2){
            case1_row1_item2_random2_1.classList.remove("case1-row1-item2-random2-acc1");
        }  
    })
    case1_row1_item2_random2_2.addEventListener("click",function(){
        case1_row1_item2_random2_acc2_x=case1_row1_item2_random2_acc2_x+1;
        if (case1_row1_item2_random2_acc2_x>2){
            case1_row1_item2_random2_acc2_x=1;
        }
        if (case1_row1_item2_random2_acc2_x==1){
            case1_row1_item2_random2_2.classList.add("case1-row1-item2-random2-acc2");
        }
        if  (case1_row1_item2_random2_acc2_x==2){
            case1_row1_item2_random2_2.classList.remove("case1-row1-item2-random2-acc2");
        }  
    })
    case1_row1_item2_random2_3.addEventListener("click",function(){
        case1_row1_item2_random2_acc3_x=case1_row1_item2_random2_acc3_x+1;
        if (case1_row1_item2_random2_acc3_x>2){
            case1_row1_item2_random2_acc3_x=1;
        }
        if (case1_row1_item2_random2_acc3_x==1){
            case1_row1_item2_random2_3.classList.add("case1-row1-item2-random2-acc3");
        }
        if  (case1_row1_item2_random2_acc3_x==2){
            case1_row1_item2_random2_3.classList.remove("case1-row1-item2-random2-acc3");
        }  
    })

    case1_row1_item2_random2_4.addEventListener("click",function(){
        case1_row1_item2_random2_acc4_x=case1_row1_item2_random2_acc4_x+1;
        if (case1_row1_item2_random2_acc4_x>2){
            case1_row1_item2_random2_acc4_x=1;
        }
        if (case1_row1_item2_random2_acc4_x==1){
            case1_row1_item2_random2_4.classList.add("case1-row1-item2-random2-acc4");
        }
        if  (case1_row1_item2_random2_acc4_x==2){
            case1_row1_item2_random2_4.classList.remove("case1-row1-item2-random2-acc4");
        }  
    })

    case1_row1_item2_random2_5.addEventListener("click",function(){
        case1_row1_item2_random2_acc5_x=case1_row1_item2_random2_acc5_x+1;
        if (case1_row1_item2_random2_acc5_x>2){
            case1_row1_item2_random2_acc5_x=1;
        }
        if (case1_row1_item2_random2_acc5_x==1){
            case1_row1_item2_random2_5.classList.add("case1-row1-item2-random2-acc5");
        }
        if  (case1_row1_item2_random2_acc5_x==2){
            case1_row1_item2_random2_5.classList.remove("case1-row1-item2-random2-acc5");
        }  
    })
        
//control case1 - row1 - item3
case1_row1_item3_random2_1.addEventListener("click", function(){
    case1_row1_item3_random2_acc1_x=case1_row1_item3_random2_acc1_x+1;
    if (case1_row1_item3_random2_acc1_x>2){
        case1_row1_item3_random2_acc1_x=1;
    }
    if (case1_row1_item3_random2_acc1_x==1){
        case1_row1_item3_random2_1.classList.add("case1-row1-item3-random2-acc1");
    }
    if  (case1_row1_item3_random2_acc1_x==2){
        case1_row1_item3_random2_1.classList.remove("case1-row1-item3-random2-acc1");
    }  
})
case1_row1_item3_random2_2.addEventListener("click",function(){
    case1_row1_item3_random2_acc2_x=case1_row1_item3_random2_acc2_x+1;
    if (case1_row1_item3_random2_acc2_x>2){
        case1_row1_item3_random2_acc2_x=1;
    }
    if (case1_row1_item3_random2_acc2_x==1){
        case1_row1_item3_random2_2.classList.add("case1-row1-item3-random2-acc2");
    }
    if  (case1_row1_item3_random2_acc2_x==2){
        case1_row1_item3_random2_2.classList.remove("case1-row1-item3-random2-acc2");
    }  
})
case1_row1_item3_random2_3.addEventListener("click",function(){
    case1_row1_item3_random2_acc3_x=case1_row1_item3_random2_acc3_x+1;
    if (case1_row1_item3_random2_acc3_x>2){
        case1_row1_item3_random2_acc3_x=1;
    }
    if (case1_row1_item3_random2_acc3_x==1){
        case1_row1_item3_random2_3.classList.add("case1-row1-item3-random2-acc3");
    }
    if  (case1_row1_item3_random2_acc3_x==2){
        case1_row1_item3_random2_3.classList.remove("case1-row1-item3-random2-acc3");
    }  
})

case1_row1_item3_random2_4.addEventListener("click",function(){
    case1_row1_item3_random2_acc4_x=case1_row1_item3_random2_acc4_x+1;
    if (case1_row1_item3_random2_acc4_x>2){
        case1_row1_item3_random2_acc4_x=1;
    }
    if (case1_row1_item3_random2_acc4_x==1){
        case1_row1_item3_random2_4.classList.add("case1-row1-item3-random2-acc4");
    }
    if  (case1_row1_item3_random2_acc4_x==2){
        case1_row1_item3_random2_4.classList.remove("case1-row1-item3-random2-acc4");
    }  
})

case1_row1_item3_random2_5.addEventListener("click",function(){
    case1_row1_item3_random2_acc5_x=case1_row1_item3_random2_acc5_x+1;
    if (case1_row1_item3_random2_acc5_x>2){
        case1_row1_item3_random2_acc5_x=1;
    }
    if (case1_row1_item3_random2_acc5_x==1){
        case1_row1_item3_random2_5.classList.add("case1-row1-item3-random2-acc5");
    }
    if  (case1_row1_item3_random2_acc5_x==2){
        case1_row1_item3_random2_5.classList.remove("case1-row1-item3-random2-acc5");
    }  
})

//control case1 - row1 - item4
case1_row1_item4_random2_1.addEventListener("click", function(){
    case1_row1_item4_random2_acc1_x=case1_row1_item4_random2_acc1_x+1;
    if (case1_row1_item4_random2_acc1_x>2){
        case1_row1_item4_random2_acc1_x=1;
    }
    if (case1_row1_item4_random2_acc1_x==1){
        case1_row1_item4_random2_1.classList.add("case1-row1-item4-random2-acc1");
    }
    if  (case1_row1_item4_random2_acc1_x==2){
        case1_row1_item4_random2_1.classList.remove("case1-row1-item4-random2-acc1");
    }  
})
case1_row1_item4_random2_2.addEventListener("click",function(){
    case1_row1_item4_random2_acc2_x=case1_row1_item4_random2_acc2_x+1;
    if (case1_row1_item4_random2_acc2_x>2){
        case1_row1_item4_random2_acc2_x=1;
    }
    if (case1_row1_item4_random2_acc2_x==1){
        case1_row1_item4_random2_2.classList.add("case1-row1-item4-random2-acc2");
    }
    if  (case1_row1_item4_random2_acc2_x==2){
        case1_row1_item4_random2_2.classList.remove("case1-row1-item4-random2-acc2");
    }  
})
case1_row1_item4_random2_3.addEventListener("click",function(){
    case1_row1_item4_random2_acc3_x=case1_row1_item4_random2_acc3_x+1;
    if (case1_row1_item4_random2_acc3_x>2){
        case1_row1_item4_random2_acc3_x=1;
    }
    if (case1_row1_item4_random2_acc3_x==1){
        case1_row1_item4_random2_3.classList.add("case1-row1-item4-random2-acc3");
    }
    if  (case1_row1_item4_random2_acc3_x==2){
        case1_row1_item4_random2_3.classList.remove("case1-row1-item4-random2-acc3");
    }  
})

case1_row1_item4_random2_4.addEventListener("click",function(){
    case1_row1_item4_random2_acc4_x=case1_row1_item4_random2_acc4_x+1;
    if (case1_row1_item4_random2_acc4_x>2){
        case1_row1_item4_random2_acc4_x=1;
    }
    if (case1_row1_item4_random2_acc4_x==1){
        case1_row1_item4_random2_4.classList.add("case1-row1-item4-random2-acc4");
    }
    if  (case1_row1_item4_random2_acc4_x==2){
        case1_row1_item4_random2_4.classList.remove("case1-row1-item4-random2-acc4");
    }  
})

case1_row1_item4_random2_5.addEventListener("click",function(){
    case1_row1_item4_random2_acc5_x=case1_row1_item4_random2_acc5_x+1;
    if (case1_row1_item4_random2_acc5_x>2){
        case1_row1_item4_random2_acc5_x=1;
    }
    if (case1_row1_item4_random2_acc5_x==1){
        case1_row1_item4_random2_5.classList.add("case1-row1-item4-random2-acc5");
    }
    if  (case1_row1_item4_random2_acc5_x==2){
        case1_row1_item4_random2_5.classList.remove("case1-row1-item4-random2-acc5");
    }  
})


//*......................................................................row 2............................................................*//
    // control case1 - row2 - item1 
    case1_row2_item1_random1_1.addEventListener("click",function(){
            case1_row2_item1_random1_acc1_x=case1_row2_item1_random1_acc1_x+1;
        if (case1_row2_item1_random1_acc1_x>2){
            case1_row2_item1_random1_acc1_x=1;
        }
        if (case1_row2_item1_random1_acc1_x==1){
            case1_row2_item1_random1_1.classList.add("case1-row2-item1-random1-acc1");
        }
        if (case1_row2_item1_random1_acc1_x==2){
            case1_row2_item1_random1_1.classList.remove("case1-row2-item1-random1-acc1");
        }  
    })
    case1_row2_item1_random1_2.addEventListener("click",function(){
            case1_row2_item1_random1_acc2_x=case1_row2_item1_random1_acc2_x+1;
        if (case1_row2_item1_random1_acc2_x>2){
            case1_row2_item1_random1_acc2_x=1;
        }
        if (case1_row2_item1_random1_acc2_x==1){
            case1_row2_item1_random1_2.classList.add("case1-row2-item1-random1-acc2");
        }
        if (case1_row2_item1_random1_acc2_x==2){
            case1_row2_item1_random1_2.classList.remove("case1-row2-item1-random1-acc2");
        }  
    })
    case1_row2_item1_random1_3.addEventListener("click",function(){
            case1_row2_item1_random1_acc3_x=case1_row2_item1_random1_acc3_x+1;
        if (case1_row2_item1_random1_acc3_x>2){
            case1_row2_item1_random1_acc3_x=1;
        }
        if (case1_row2_item1_random1_acc3_x==1){
            case1_row2_item1_random1_3.classList.add("case1-row2-item1-random1-acc3");
        }
        if (case1_row2_item1_random1_acc3_x==2){
            case1_row2_item1_random1_3.classList.remove("case1-row2-item1-random1-acc3");
        }  
    })

    case1_row2_item1_random1_4.addEventListener("click",function(){
            case1_row2_item1_random1_acc4_x=case1_row2_item1_random1_acc4_x+1;
        if (case1_row2_item1_random1_acc4_x>2){
            case1_row2_item1_random1_acc4_x=1;
        }
        if (case1_row2_item1_random1_acc4_x==1){
            case1_row2_item1_random1_4.classList.add("case1-row2-item1-random1-acc4");
        }
        if (case1_row2_item1_random1_acc4_x==2){
            case1_row2_item1_random1_4.classList.remove("case1-row2-item1-random1-acc4");
        }  
    })

    case1_row2_item1_random1_5.addEventListener("click",function(){
            case1_row2_item1_random1_acc5_x=case1_row2_item1_random1_acc5_x+1;
        if (case1_row2_item1_random1_acc5_x>2){
            case1_row2_item1_random1_acc5_x=1;
        }
        if (case1_row2_item1_random1_acc5_x==1){
            case1_row2_item1_random1_5.classList.add("case1-row2-item1-random1-acc5");
        }
        if (case1_row2_item1_random1_acc5_x==2){
            case1_row2_item1_random1_5.classList.remove("case1-row2-item1-random1-acc5");
        }  
    })




//control case1 - row2 - item2
    case1_row2_item2_random2_1.addEventListener("click", function(){
            case1_row2_item2_random2_acc1_x=case1_row2_item2_random2_acc1_x+1;
        if (case1_row2_item2_random2_acc1_x>2){
            case1_row2_item2_random2_acc1_x=1;
        }
        if (case1_row2_item2_random2_acc1_x==1){
            case1_row2_item2_random2_1.classList.add("case1-row2-item2-random2-acc1");
        }
        if (case1_row2_item2_random2_acc1_x==2){
            case1_row2_item2_random2_1.classList.remove("case1-row2-item2-random2-acc1");
        }  
    })
    case1_row2_item2_random2_2.addEventListener("click",function(){
            case1_row2_item2_random2_acc2_x=case1_row2_item2_random2_acc2_x+1;
        if (case1_row2_item2_random2_acc2_x>2){
            case1_row2_item2_random2_acc2_x=1;
        }
        if (case1_row2_item2_random2_acc2_x==1){
            case1_row2_item2_random2_2.classList.add("case1-row2-item2-random2-acc2");
        }
        if (case1_row2_item2_random2_acc2_x==2){
            case1_row2_item2_random2_2.classList.remove("case1-row2-item2-random2-acc2");
        }  
    })
    case1_row2_item2_random2_3.addEventListener("click",function(){
            case1_row2_item2_random2_acc3_x=case1_row2_item2_random2_acc3_x+1;
        if (case1_row2_item2_random2_acc3_x>2){
            case1_row2_item2_random2_acc3_x=1;
        }
        if (case1_row2_item2_random2_acc3_x==1){
            case1_row2_item2_random2_3.classList.add("case1-row2-item2-random2-acc3");
        }
        if (case1_row2_item2_random2_acc3_x==2){
            case1_row2_item2_random2_3.classList.remove("case1-row2-item2-random2-acc3");
        }  
    })

    case1_row2_item2_random2_4.addEventListener("click",function(){
            case1_row2_item2_random2_acc4_x=case1_row2_item2_random2_acc4_x+1;
        if (case1_row2_item2_random2_acc4_x>2){
            case1_row2_item2_random2_acc4_x=1;
        }
        if (case1_row2_item2_random2_acc4_x==1){
            case1_row2_item2_random2_4.classList.add("case1-row2-item2-random2-acc4");
        }
        if (case1_row2_item2_random2_acc4_x==2){
            case1_row2_item2_random2_4.classList.remove("case1-row2-item2-random2-acc4");
        }  
    })

    case1_row2_item2_random2_5.addEventListener("click",function(){
            case1_row2_item2_random2_acc5_x=case1_row2_item2_random2_acc5_x+1;
        if (case1_row2_item2_random2_acc5_x>2){
            case1_row2_item2_random2_acc5_x=1;
        }
        if (case1_row2_item2_random2_acc5_x==1){
            case1_row2_item2_random2_5.classList.add("case1-row2-item2-random2-acc5");
        }
        if (case1_row2_item2_random2_acc5_x==2){
            case1_row2_item2_random2_5.classList.remove("case1-row2-item2-random2-acc5");
        }  
    })
        
//control case1 - row2 - item3
case1_row2_item3_random2_1.addEventListener("click", function(){
        case1_row2_item3_random2_acc1_x=case1_row2_item3_random2_acc1_x+1;
    if (case1_row2_item3_random2_acc1_x>2){
        case1_row2_item3_random2_acc1_x=1;
    }
    if (case1_row2_item3_random2_acc1_x==1){
        case1_row2_item3_random2_1.classList.add("case1-row2-item3-random2-acc1");
    }
    if (case1_row2_item3_random2_acc1_x==2){
        case1_row2_item3_random2_1.classList.remove("case1-row2-item3-random2-acc1");
    }  
})
case1_row2_item3_random2_2.addEventListener("click",function(){
        case1_row2_item3_random2_acc2_x=case1_row2_item3_random2_acc2_x+1;
    if (case1_row2_item3_random2_acc2_x>2){
        case1_row2_item3_random2_acc2_x=1;
    }
    if (case1_row2_item3_random2_acc2_x==1){
        case1_row2_item3_random2_2.classList.add("case1-row2-item3-random2-acc2");
    }
    if (case1_row2_item3_random2_acc2_x==2){
        case1_row2_item3_random2_2.classList.remove("case1-row2-item3-random2-acc2");
    }  
})
case1_row2_item3_random2_3.addEventListener("click",function(){
        case1_row2_item3_random2_acc3_x=case1_row2_item3_random2_acc3_x+1;
    if (case1_row2_item3_random2_acc3_x>2){
        case1_row2_item3_random2_acc3_x=1;
    }
    if (case1_row2_item3_random2_acc3_x==1){
        case1_row2_item3_random2_3.classList.add("case1-row2-item3-random2-acc3");
    }
    if (case1_row2_item3_random2_acc3_x==2){
        case1_row2_item3_random2_3.classList.remove("case1-row2-item3-random2-acc3");
    }  
})

case1_row2_item3_random2_4.addEventListener("click",function(){
        case1_row2_item3_random2_acc4_x=case1_row2_item3_random2_acc4_x+1;
    if (case1_row2_item3_random2_acc4_x>2){
        case1_row2_item3_random2_acc4_x=1;
    }
    if (case1_row2_item3_random2_acc4_x==1){
        case1_row2_item3_random2_4.classList.add("case1-row2-item3-random2-acc4");
    }
    if (case1_row2_item3_random2_acc4_x==2){
        case1_row2_item3_random2_4.classList.remove("case1-row2-item3-random2-acc4");
    }  
})

case1_row2_item3_random2_5.addEventListener("click",function(){
        case1_row2_item3_random2_acc5_x=case1_row2_item3_random2_acc5_x+1;
    if (case1_row2_item3_random2_acc5_x>2){
        case1_row2_item3_random2_acc5_x=1;
    }
    if (case1_row2_item3_random2_acc5_x==1){
        case1_row2_item3_random2_5.classList.add("case1-row2-item3-random2-acc5");
    }
    if (case1_row2_item3_random2_acc5_x==2){
        case1_row2_item3_random2_5.classList.remove("case1-row2-item3-random2-acc5");
    }  
})

//control case1 - row1 - item4
case1_row2_item4_random2_1.addEventListener("click", function(){
        case1_row2_item4_random2_acc1_x=case1_row2_item4_random2_acc1_x+1;
    if (case1_row2_item4_random2_acc1_x>2){
        case1_row2_item4_random2_acc1_x=1;
    }
    if (case1_row2_item4_random2_acc1_x==1){
        case1_row2_item4_random2_1.classList.add("case1-row2-item4-random2-acc1");
    }
    if (case1_row2_item4_random2_acc1_x==2){
        case1_row2_item4_random2_1.classList.remove("case1-row2-item4-random2-acc1");
    }  
})
case1_row2_item4_random2_2.addEventListener("click",function(){
        case1_row2_item4_random2_acc2_x=case1_row2_item4_random2_acc2_x+1;
    if (case1_row2_item4_random2_acc2_x>2){
        case1_row2_item4_random2_acc2_x=1;
    }
    if (case1_row2_item4_random2_acc2_x==1){
        case1_row2_item4_random2_2.classList.add("case1-row2-item4-random2-acc2");
    }
    if (case1_row2_item4_random2_acc2_x==2){
        case1_row2_item4_random2_2.classList.remove("case1-row2-item4-random2-acc2");
    }  
})
case1_row2_item4_random2_3.addEventListener("click",function(){
        case1_row2_item4_random2_acc3_x=case1_row2_item4_random2_acc3_x+1;
    if (case1_row2_item4_random2_acc3_x>2){
        case1_row2_item4_random2_acc3_x=1;
    }
    if (case1_row2_item4_random2_acc3_x==1){
        case1_row2_item4_random2_3.classList.add("case1-row2-item4-random2-acc3");
    }
    if (case1_row2_item4_random2_acc3_x==2){
        case1_row2_item4_random2_3.classList.remove("case1-row2-item4-random2-acc3");
    }  
})

case1_row2_item4_random2_4.addEventListener("click",function(){
        case1_row2_item4_random2_acc4_x=case1_row2_item4_random2_acc4_x+1;
    if (case1_row2_item4_random2_acc4_x>2){
        case1_row2_item4_random2_acc4_x=1;
    }
    if (case1_row2_item4_random2_acc4_x==1){
        case1_row2_item4_random2_4.classList.add("case1-row2-item4-random2-acc4");
    }
    if (case1_row2_item4_random2_acc4_x==2){
        case1_row2_item4_random2_4.classList.remove("case1-row2-item4-random2-acc4");
    }  
})

case1_row2_item4_random2_5.addEventListener("click",function(){
        case1_row2_item4_random2_acc5_x=case1_row2_item4_random2_acc5_x+1;
    if (case1_row2_item4_random2_acc5_x>2){
        case1_row2_item4_random2_acc5_x=1;
    }
    if (case1_row2_item4_random2_acc5_x==1){
        case1_row2_item4_random2_5.classList.add("case1-row2-item4-random2-acc5");
    }
    if (case1_row2_item4_random2_acc5_x==2){
        case1_row2_item4_random2_5.classList.remove("case1-row2-item4-random2-acc5");
    }  
})



//*......................................................................row 3............................................................*//
    // control case1 - row3 - item1 
    case1_row3_item1_random1_1.addEventListener("click",function(){
        case1_row3_item1_random1_acc1_x=case1_row3_item1_random1_acc1_x+1;
    if (case1_row3_item1_random1_acc1_x>2){
        case1_row3_item1_random1_acc1_x=1;
    }
    if (case1_row3_item1_random1_acc1_x==1){
        case1_row3_item1_random1_1.classList.add("case1-row3-item1-random1-acc1");
    }
    if (case1_row3_item1_random1_acc1_x==2){
        case1_row3_item1_random1_1.classList.remove("case1-row3-item1-random1-acc1");
    }  
})
case1_row3_item1_random1_2.addEventListener("click",function(){
        case1_row3_item1_random1_acc2_x=case1_row3_item1_random1_acc2_x+1;
    if (case1_row3_item1_random1_acc2_x>2){
        case1_row3_item1_random1_acc2_x=1;
    }
    if (case1_row3_item1_random1_acc2_x==1){
        case1_row3_item1_random1_2.classList.add("case1-row3-item1-random1-acc2");
    }
    if (case1_row3_item1_random1_acc2_x==2){
        case1_row3_item1_random1_2.classList.remove("case1-row3-item1-random1-acc2");
    }  
})
case1_row3_item1_random1_3.addEventListener("click",function(){
        case1_row3_item1_random1_acc3_x=case1_row3_item1_random1_acc3_x+1;
    if (case1_row3_item1_random1_acc3_x>2){
        case1_row3_item1_random1_acc3_x=1;
    }
    if (case1_row3_item1_random1_acc3_x==1){
        case1_row3_item1_random1_3.classList.add("case1-row3-item1-random1-acc3");
    }
    if (case1_row3_item1_random1_acc3_x==2){
        case1_row3_item1_random1_3.classList.remove("case1-row3-item1-random1-acc3");
    }  
})

case1_row3_item1_random1_4.addEventListener("click",function(){
        case1_row3_item1_random1_acc4_x=case1_row3_item1_random1_acc4_x+1;
    if (case1_row3_item1_random1_acc4_x>2){
        case1_row3_item1_random1_acc4_x=1;
    }
    if (case1_row3_item1_random1_acc4_x==1){
        case1_row3_item1_random1_4.classList.add("case1-row3-item1-random1-acc4");
    }
    if (case1_row3_item1_random1_acc4_x==2){
        case1_row3_item1_random1_4.classList.remove("case1-row3-item1-random1-acc4");
    }  
})

case1_row3_item1_random1_5.addEventListener("click",function(){
        case1_row3_item1_random1_acc5_x=case1_row3_item1_random1_acc5_x+1;
    if (case1_row3_item1_random1_acc5_x>2){
        case1_row3_item1_random1_acc5_x=1;
    }
    if (case1_row3_item1_random1_acc5_x==1){
        case1_row3_item1_random1_5.classList.add("case1-row3-item1-random1-acc5");
    }
    if (case1_row3_item1_random1_acc5_x==2){
        case1_row3_item1_random1_5.classList.remove("case1-row3-item1-random1-acc5");
    }  
})




//control case1 - row3 - item2
case1_row3_item2_random2_1.addEventListener("click", function(){
        case1_row3_item2_random2_acc1_x=case1_row3_item2_random2_acc1_x+1;
    if (case1_row3_item2_random2_acc1_x>2){
        case1_row3_item2_random2_acc1_x=1;
    }
    if (case1_row3_item2_random2_acc1_x==1){
        case1_row3_item2_random2_1.classList.add("case1-row3-item2-random2-acc1");
    }
    if (case1_row3_item2_random2_acc1_x==2){
        case1_row3_item2_random2_1.classList.remove("case1-row3-item2-random2-acc1");
    }  
})
case1_row3_item2_random2_2.addEventListener("click",function(){
        case1_row3_item2_random2_acc2_x=case1_row3_item2_random2_acc2_x+1;
    if (case1_row3_item2_random2_acc2_x>2){
        case1_row3_item2_random2_acc2_x=1;
    }
    if (case1_row3_item2_random2_acc2_x==1){
        case1_row3_item2_random2_2.classList.add("case1-row3-item2-random2-acc2");
    }
    if (case1_row3_item2_random2_acc2_x==2){
        case1_row3_item2_random2_2.classList.remove("case1-row3-item2-random2-acc2");
    }  
})
case1_row3_item2_random2_3.addEventListener("click",function(){
        case1_row3_item2_random2_acc3_x=case1_row3_item2_random2_acc3_x+1;
    if (case1_row3_item2_random2_acc3_x>2){
        case1_row3_item2_random2_acc3_x=1;
    }
    if (case1_row3_item2_random2_acc3_x==1){
        case1_row3_item2_random2_3.classList.add("case1-row3-item2-random2-acc3");
    }
    if (case1_row3_item2_random2_acc3_x==2){
        case1_row3_item2_random2_3.classList.remove("case1-row3-item2-random2-acc3");
    }  
})

case1_row3_item2_random2_4.addEventListener("click",function(){
        case1_row3_item2_random2_acc4_x=case1_row3_item2_random2_acc4_x+1;
    if (case1_row3_item2_random2_acc4_x>2){
        case1_row3_item2_random2_acc4_x=1;
    }
    if (case1_row3_item2_random2_acc4_x==1){
        case1_row3_item2_random2_4.classList.add("case1-row3-item2-random2-acc4");
    }
    if (case1_row3_item2_random2_acc4_x==2){
        case1_row3_item2_random2_4.classList.remove("case1-row3-item2-random2-acc4");
    }  
})

case1_row3_item2_random2_5.addEventListener("click",function(){
        case1_row3_item2_random2_acc5_x=case1_row3_item2_random2_acc5_x+1;
    if (case1_row3_item2_random2_acc5_x>2){
        case1_row3_item2_random2_acc5_x=1;
    }
    if (case1_row3_item2_random2_acc5_x==1){
        case1_row3_item2_random2_5.classList.add("case1-row3-item2-random2-acc5");
    }
    if (case1_row3_item2_random2_acc5_x==2){
        case1_row3_item2_random2_5.classList.remove("case1-row3-item2-random2-acc5");
    }  
})
    
//control case1 - row3 - item3
case1_row3_item3_random2_1.addEventListener("click", function(){
    case1_row3_item3_random2_acc1_x=case1_row3_item3_random2_acc1_x+1;
if (case1_row3_item3_random2_acc1_x>2){
    case1_row3_item3_random2_acc1_x=1;
}
if (case1_row3_item3_random2_acc1_x==1){
    case1_row3_item3_random2_1.classList.add("case1-row3-item3-random2-acc1");
}
if (case1_row3_item3_random2_acc1_x==2){
    case1_row3_item3_random2_1.classList.remove("case1-row3-item3-random2-acc1");
}  
})
case1_row3_item3_random2_2.addEventListener("click",function(){
    case1_row3_item3_random2_acc2_x=case1_row3_item3_random2_acc2_x+1;
if (case1_row3_item3_random2_acc2_x>2){
    case1_row3_item3_random2_acc2_x=1;
}
if (case1_row3_item3_random2_acc2_x==1){
    case1_row3_item3_random2_2.classList.add("case1-row3-item3-random2-acc2");
}
if (case1_row3_item3_random2_acc2_x==2){
    case1_row3_item3_random2_2.classList.remove("case1-row3-item3-random2-acc2");
}  
})
case1_row3_item3_random2_3.addEventListener("click",function(){
    case1_row3_item3_random2_acc3_x=case1_row3_item3_random2_acc3_x+1;
if (case1_row3_item3_random2_acc3_x>2){
    case1_row3_item3_random2_acc3_x=1;
}
if (case1_row3_item3_random2_acc3_x==1){
    case1_row3_item3_random2_3.classList.add("case1-row3-item3-random2-acc3");
}
if (case1_row3_item3_random2_acc3_x==2){
    case1_row3_item3_random2_3.classList.remove("case1-row3-item3-random2-acc3");
}  
})

case1_row3_item3_random2_4.addEventListener("click",function(){
    case1_row3_item3_random2_acc4_x=case1_row3_item3_random2_acc4_x+1;
if (case1_row3_item3_random2_acc4_x>2){
    case1_row3_item3_random2_acc4_x=1;
}
if (case1_row3_item3_random2_acc4_x==1){
    case1_row3_item3_random2_4.classList.add("case1-row3-item3-random2-acc4");
}
if (case1_row3_item3_random2_acc4_x==2){
    case1_row3_item3_random2_4.classList.remove("case1-row3-item3-random2-acc4");
}  
})

case1_row3_item3_random2_5.addEventListener("click",function(){
    case1_row3_item3_random2_acc5_x=case1_row3_item3_random2_acc5_x+1;
if (case1_row3_item3_random2_acc5_x>2){
    case1_row3_item3_random2_acc5_x=1;
}
if (case1_row3_item3_random2_acc5_x==1){
    case1_row3_item3_random2_5.classList.add("case1-row3-item3-random2-acc5");
}
if (case1_row3_item3_random2_acc5_x==2){
    case1_row3_item3_random2_5.classList.remove("case1-row3-item3-random2-acc5");
}  
})

//control case1 - row3 - item4
case1_row3_item4_random2_1.addEventListener("click", function(){
    case1_row3_item4_random2_acc1_x=case1_row3_item4_random2_acc1_x+1;
if (case1_row3_item4_random2_acc1_x>2){
    case1_row3_item4_random2_acc1_x=1;
}
if (case1_row3_item4_random2_acc1_x==1){
    case1_row3_item4_random2_1.classList.add("case1-row3-item4-random2-acc1");
}
if (case1_row3_item4_random2_acc1_x==2){
    case1_row3_item4_random2_1.classList.remove("case1-row3-item4-random2-acc1");
}  
})
case1_row3_item4_random2_2.addEventListener("click",function(){
    case1_row3_item4_random2_acc2_x=case1_row3_item4_random2_acc2_x+1;
if (case1_row3_item4_random2_acc2_x>2){
    case1_row3_item4_random2_acc2_x=1;
}
if (case1_row3_item4_random2_acc2_x==1){
    case1_row3_item4_random2_2.classList.add("case1-row3-item4-random2-acc2");
}
if (case1_row3_item4_random2_acc2_x==2){
    case1_row3_item4_random2_2.classList.remove("case1-row3-item4-random2-acc2");
}  
})
case1_row3_item4_random2_3.addEventListener("click",function(){
    case1_row3_item4_random2_acc3_x=case1_row3_item4_random2_acc3_x+1;
if (case1_row3_item4_random2_acc3_x>2){
    case1_row3_item4_random2_acc3_x=1;
}
if (case1_row3_item4_random2_acc3_x==1){
    case1_row3_item4_random2_3.classList.add("case1-row3-item4-random2-acc3");
}
if (case1_row3_item4_random2_acc3_x==2){
    case1_row3_item4_random2_3.classList.remove("case1-row3-item4-random2-acc3");
}  
})

case1_row3_item4_random2_4.addEventListener("click",function(){
    case1_row3_item4_random2_acc4_x=case1_row3_item4_random2_acc4_x+1;
if (case1_row3_item4_random2_acc4_x>2){
    case1_row3_item4_random2_acc4_x=1;
}
if (case1_row3_item4_random2_acc4_x==1){
    case1_row3_item4_random2_4.classList.add("case1-row3-item4-random2-acc4");
}
if (case1_row3_item4_random2_acc4_x==2){
    case1_row3_item4_random2_4.classList.remove("case1-row3-item4-random2-acc4");
}  
})

case1_row3_item4_random2_5.addEventListener("click",function(){
    case1_row3_item4_random2_acc5_x=case1_row3_item4_random2_acc5_x+1;
if (case1_row3_item4_random2_acc5_x>2){
    case1_row3_item4_random2_acc5_x=1;
}
if (case1_row3_item4_random2_acc5_x==1){
    case1_row3_item4_random2_5.classList.add("case1-row3-item4-random2-acc5");
}
if (case1_row3_item4_random2_acc5_x==2){
    case1_row3_item4_random2_5.classList.remove("case1-row3-item4-random2-acc5");
}  
})





