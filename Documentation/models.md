
## **users**
| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| fullName       |  string   |              not null |
| email          |  string   |      not null, unique |
| hashedPassword |  string   |     not null (binary) |
| createdAt      | timestamp |              not null |
| updatedAt      | timestamp |              not null |


## **orders**
| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| userId         |  string   | not null, foreign key |
| createdAt      | timestamp |              not null |
| updatedAt      | timestamp |              not null |


## **products**
| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| productName    |  string   |              not null |
| price          |  integer  |              not null |
| description    |  string   |              not null |
| orderId        |  integer  | not null, foreign key |
| createdAt      | timestamp |              not null |
| updatedAt      | timestamp |              not null |


