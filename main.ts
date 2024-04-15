
var hrDepartment = new Department(1, "Human Resources");
var itDepartment = new Department(2, "Information Technology");

// Tạo Position
var managerPosition = new Position(1, "Manager");
var developerPosition = new Position(2, "Developer");

// Tạo Account
var account1 = new Account(1, "example1@example.com", "user1", "John Doe", hrDepartment, managerPosition, new Date());
var account2 = new Account(2, "example2@example.com", "user2", "Jane Smith", itDepartment, developerPosition, new Date());

// In thông tin ra màn hình Console
console.log("Account 1:");
console.log(account1);
console.log("Account 2:");
console.log(account2);