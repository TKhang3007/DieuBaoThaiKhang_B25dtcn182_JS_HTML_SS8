const squad = [

    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]

];

// case 1
const displayListPerson = (listPerson) => {
    listPerson.forEach((item) => {
        console.log(`${item[0]} (${item[2]}) : ${item[1]} ban thang`);
    });
}

// case 2
const search = (searchPlay) => {
    let nameplayer = +prompt("Nhap ten cau thu can tim: ");
    searchPlay.find((nameplayer) => {
        console.log(`${nameplayer}`);
    });
}

let choice;
do {
    choice = +prompt(`
    --- QUẢN LÝ ĐỘI BÓNG ---
    1. Xem danh sách
    2. Tìm kiếm (Find)
    3. Lọc vị trí (Filter)
    4. Tổng bàn thắng (Reduce)
    5. Kiểm tra hiệu suất (Some/Every)
    0. Thoát`);

    switch (choice) {
        case 1:
            displayListPerson(squad);
            break;
    
        case 2:
            search(squad);
            break;
    
        case 3:
            
            break;
    
        case 4:
            
            break;
    
        case 0:
            alert("Thoat chuong trinh...");
            break;
    
        default:
            alert("Khong hop le, vui long nhap lai");
            break;
    }
} while (choice !== 0);