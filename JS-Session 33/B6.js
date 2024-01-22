const jobs = [];

class Job {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    
    displayInfo(){
        console.log(`Id: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Completed: ${this.completed}`);
    }
}

function printMenu() {
    console.log("------------MENU-----------");
    console.log("1. Thêm công việc mới vào mảng");
    console.log("2. In ra danh sách công việc");
    console.log("3. Tìm kiếm công việc theo id");
    console.log("4. Thoát");
}

function addJob() {
    const id = prompt("Nhập id công việc:");
    const title = prompt("Nhập tiêu đề công việc:");
    const description = prompt("Nhập mô tả công việc:");
    
    const job = new Job(id, title, description);
    jobs.push(job);
    
    console.log("Công việc đã được thêm vào mảng.");
}

function printJobs() {
    console.log("Danh sách công việc:");
    if (jobs.length === 0) {
        console.log("Không có công việc nào.");
    } else {
        for (const job of jobs) {
            job.displayInfo();
            console.log("--------------------------");
        }
    }
}

function searchJobById() {
    const idToSearch = prompt("Nhập id công việc cần tìm:");
    let foundJob = false;
    
    for (const job of jobs) {
        if (job.id === idToSearch) {
            job.displayInfo();
            foundJob = true;
            break;
        }
    }
    
    if (!foundJob) {
        console.log("Không tìm thấy công việc.");
    }
}

function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            printJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log("Đã thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
}

let userInput = '';
while (userInput !== '4') {
    printMenu();
    userInput = prompt("Lựa chọn của bạn: ");
    handleUserChoice(userInput);
}
