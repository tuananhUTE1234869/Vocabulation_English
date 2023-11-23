const Data_Input = document.querySelector(".e-input")
const autobox = document.querySelector(".autobox")
const Submit_Search = document.querySelector(".search-search")


function removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase(); 
  }

  Data_Input.onkeyup = (e) =>{
    let checkData=  removeAccents(e.target.value)

    Submit_Search.addEventListener("click", function(){
        let arrayData= []

        if (checkData){
            document.querySelector(".autobox").style.display="flex"
            arrayData = recomentlist.filter((data) => {
                return removeAccents(data).startsWith(checkData)
            })
            // console.log(arrayData)
            arrayData = arrayData.map((data)=>{
                return data="<li>"+data+"</li>"
            })
            
            autobox.classList.add("active")
            showAdress(arrayData)

            
            console.log(arrayData)
            let liItem = autobox.querySelectorAll("li")
            for (let i=0; i<liItem.length; i++ ) {
                liItem[i].addEventListener("click", function(){
                    Data_Input.value=liItem[i].innerHTML
                })
            }
            
            //even turn off click "search-search"
            Submit_Search.removeEventListener("click", function(){});
            
        } 
        // else{
        //     document.querySelector(".autobox").style.display="none"
        // }
    })
    if (checkData.length==0){
        document.querySelector(".autobox").style.display="none"
    }
  }

  function showAdress (list) {
    let listData
    const first3Items = list.slice(0, 10); 
    if (!list.length){
        listData="<li>"+Data_Input.value+"</li>"
    }
    else {
        listData = first3Items.join('')
    }

    autobox.innerHTML = listData
}


setTimeout(() => {
    img.remove();
  }, 5000);


function gotoLocalhost(){
    window.location.href="https://tuananhenglish.000webhostapp.com/"
}














let recomentlist =[
    "fold: gấp (gấp giấy)",
    "assistant: trợ lí",
    "audget: ngân sách",
    "overhead rack: giá đỡ trên cao",
    "rach: xào phơi đồ",
    "incorporated: kết hợp",
    "determine: xác định",
    "merger: sáp nhập",
    "contract: hợp đồng",
    "branch: nhánh cây",
    "based on: dựa vào",
    "expense: chi phí",
    "wheelchair: xe lăn",
    "ladder: thang gấp",
    "stair: cầu thang",
    "hire: tuyển dụng",
    "discus: bàn luận",
    "assignment: phân công",
    "arrival: đến",
    "price: giá cả",
    "policy: chính sách",
    "conversation: cuội hội thoại",
    "taking place: diễn ra",
    "parking garage: bãi đỗ xe",
    "train: xe lửa",
    "baggage claim area: khu vực nhận hành lí",
    "identification card: chứng minh thư",
    "gather: mang theo",
    "luggage: hành lí",
    "ask for a refund: hoàn trả tiền",
    "supervisor: giám sát",
    "train car: toa tàu",
    "as well: cũng",
    "oh, pardon me!: thứ lỗi cho tôi!",
    "juit give me a moment: chờ tôi 1 xíu",
    "travel: đi, du lịch",
    "announce: thông báo",
    "schedule: lịch trình",
    "revise: xem lại",
    "according: theo như",
    "aviation: hàng không",
    "extra: mở rộng",
    "entertainment: giải trí",
    "movable: có thể di chuyển được",
    "wireless: không dây",
    "client: khách hàng",
    "project plan: kế hoạch dự án",
    "update: cập nhật",
    "contact: liên hệ",
    "aircraft: máy bay",
    "pass around: phát ra",
    "ask for: yêu cầu",
    "upgrade: nâng cấp",
    "conversation: cuộc hội thoại",
    "expenditure: chi phí",

]