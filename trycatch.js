//khi throw error thì phải có catch
function cleansUp() {
  try {
    //throw new Error("Lỗi gì đây?……");
    console.log("Hàm này sẽ không được với tới");
  } 
//   catch(error){
//     console.log(error.message);
//   }    
  finally {
    console.log("Hoàn thành");
  }
}

cleansUp();
