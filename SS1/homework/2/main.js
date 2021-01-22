// Bài 2 (5đ). Điểm tổng kết (ĐTK) của môn "Lập trình hướng đối tượng" được tính bằng trọng số:
//     0.4 * (Điểm thành phần) + 0.6 * (Điểm cuối kì)
//     Nếu ĐTK >= 8.0 --> đạt A
//         7.0 <= ĐTK < 8.0 --> đạt B
//         6.0 <= ĐTK < 7.0 --> đạt C
//         4.0 <= ĐTK < 6.0 --> đạt D
//         ĐTK < 4.0 --> đạt F (trượt)
//     Hãy viết 1 chương trình để nhập điểm (điểm TP và điểm CK) cho n sinh viên (n > 2) và xác định:
//         + Chọn bất kì 1 sinh viên, tính xác suất để sinh viên đó đạt B 😀
//         + Số sinh viên đạt A
//         + Số sinh viên bị trượt

let DTP;
let DCK;
let DTK;
let classA = 0;
let classB = 0;
let classC = 0;
let classD = 0;
let classF = 0;

let n = prompt('Nhập số sinh viên: ');

for(let i = 0; i < n; i++) {
    DTP = prompt(`Nhập điểm thành phần của sinh viên thứ ${i+1}: `);
    DCK = prompt(`Nhập điểm cuối kỳ của sinh viên thứ ${i+1}: `);
    DTK = DTP * 0.4 + DCK * 0.6;
    if(DTK >= 8.0) classA++;
    else if(DTK >= 7.0) classB++;
    else if(DTK >= 6.0) classC++;
    else if(DTK >= 4.0) classD++;
    else if(DTK < 4.0) classF++;
}

let randomStudent = prompt('Chọn bất kỳ 1 sinh viên: ');
console.log(`Xác suất để sinh viên thứ ${randomStudent} đạt hạng B là: ${classB / n * 100}%`);
console.log(`Số sinh viên đạt A: ${classA}`);
console.log(`Số sinh viên bị trượt: ${classF}`);

