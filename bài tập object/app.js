/// bài 1: Khởi tạo một biến có tên sản phẩm, chứa một mảng sản phẩm, mỗi sản phẩm có
// tên, giá, thương hiệu, danh mục và màu sắc:
// let cart = [
//         {
//             Name:"Sony Xperia XZPremium",
//             Brand:"Sony",
//             Price:"4428",
//             Color:"white",
//             Category:"Changer",
            
//         },
//         {
//             Name:"OPPO F3 Plus",
//             Brand:"oppo",
//             Price:"5487",
//             Color:"Black",
//             Category:"Phone",
            
//         },
//         {
//             Name:"IPhone 13 Pro max",
//             Brand:"Apple",
//             Price:"21490",
//             Color:"Gray",
//             Category:"Phone",
            
//         },
//         {
//             Name:"Samsung Galaxy S8",
//             Brand:"sam sung",
//             Price:"8490",
//             Color:"white",
//             Category:"Phone",
            
//         },
//     ]
//     console.table(cart);

// 1.1: 
// In name và price của tất cả các sản phẩm
// for(let i = 0; i < cart.length; i++){ 
//         console.log(`name: ${cart[i].Name}`);
//         console.log(`price: ${cart[i].Price}`);
//         console.log("-----------------------");
//       }
    
// 1.2:
//Viết script in đăng xuất sản phẩm với số của chúng,
//sau đó in đăng xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhập

//  let userInput = Number(prompt("nhập vị trí sản phẩm bạn muốn biết: "));
// console.log(`Name: ${cart[userInput].Name}`);
// console.log(`Brand: ${cart[userInput].Brand}`);
// console.log(`price: ${cart[userInput].Price}`);
// console.log(`color: ${cart[userInput].Color}`);
// console.log(`category: ${cart[userInput].Category}`);
// console.log("----------------------------");

// 1.3:
//Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập

// let userInput = prompt("nhập sản phẩm mà bạn muốn lấy:");
// for (i = 0; i < cart.length; i = i + 1) {
//     if (cart[i].Category == userInput  ) {
//         console.log(`Name: ${cart[i].Name}`);
//         console.log(`Brand: ${cart[i].Brand}`);
//         console.log(`price: ${cart[i].Price}`);
//         console.log(`color: ${cart[i].Color}`);
//         console.log(`category: ${cart[i].Category}`);
//         console.log("----------------------------");
//     }
// }


// 1.4
//Thêm nhà cung cấp vào từng sản phẩm
//Và in ra tất cả các sản phẩm

// cart[0].Providers = "Phukienso"
// cart[1].Providers = "Tgdd"
// cart[2].Providers = "Tgdd"
// cart[3].Providers = "Tgdd"
// console.table(cart); 

//1.5
//(Tùy chọn) Tìm kiếm sản phẩm dựa trên nhà cung cấp mong muốn do người dùng nhập, 
//nếu bạn cần thêm hướng dẫn, hãy tìm gợi ý ở cuối bài tập này

// let awfi = prompt("mời bạn nhập");
// for (let i = 0; i < cart.length; i++) {
//   if (cart[i].Providers === awfi) {
//     console.log(`Name:${cart[i].Name}`);
//     console.log(`Brand:${cart[i].Brand}`);
//     console.log(`Price:${cart[i].Price}`);
//     console.log(`Color:${cart[i].Color}`);
//     console.log(`Category:${cart[i].Category}`);
//     console.log(`Providers:${cart[i].Providers}`);

//     console.log("-----------------");
//   }
// }

// bài 2: Viết kịch bản để lưu trữ và xử lý các nhiệm vụ học tập
// let cart = [
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"HTML",
//         Price:"hoàn thành: flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"css",
//         Price:"hoàn thành: flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"javascript",
//         Price:"hoàn thành: flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"node pakcage manager",
//         Price:"hoàn thành: flase",
//     },
//     {
       
//         Name:"nhiệm vụ học tập",
//         Brand:"git",
//         Price:"hoàn thành: flase",

//     },
// ]
// console.table(cart);

// // 2.1: In nó ra
// console.log("nhiệm vụ học tập")
// for(let i=0;i<cart.length;i=i+1){
//   console.log(`Brand:${cart[i].Brand}`);
//   console.log(`price:${cart[i].Price}`);
//   console.log("-----------------");
// }


























































































