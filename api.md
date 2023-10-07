# User API Documentation

## Return Codes

| Code | Description                |
|------|----------------------------|
| 200  | Success                    |
| 400  | Bad Request                |
| 401  | Unauthorized               |
| 404 | Not Found |
| 500  | Internal Server Error      |


## Authentication
All requests must include the authentication token in the header
```json
Authorization: Bearer <Your-Token-Here>
```

## Public Methods
### Retrieve News
>GET    /news      

Response
```json
[
  {
    "title": "Zumba Fiesta",
    "author": "Hamish",
    "description": "Join the Zumba party and dance your way to fitness!",
    "link": "https://companynamenotfound.com/zumba-fiesta"
  },
  {
    "title": "Dance Fitness Party",
    "author": "Zac",
    "description": "Join the party and dance your way to fitness!",
    "link": "https://companynamenotfound.com/dance-fitness-party"
  }
]
```


### Retrieve classes Information
> GET /api/public/classes

Response
```json
[
  {
    "className": "Yoga",
    "date": "2023-9-12T15:00:00Z",
    "status": "Open",
    "capacity": 60
  },
  {
    "className": "Zumba",
    "date": "2023-9-14T15:00:00Z",
    "status": "Fully",
    "capacity": 100
  },
  {
    "className": "Fitness",
    "date": "2023-9-12T15:00:00Z",
    "status": "Canceled",
    "capacity": 72
  }
]
```

### Login
> POST /api/login

Request
```json
{
  "useremail": "email@email.com",
  "password": "securePassword"
}
```

### Register
> POST /api/register

```json
{
  "username": "exampleUser",
  "password": "securePassword",
  "email": "email@email.com"
}
```


## User Dashboard
### Logout
> GET /api/users/logout

### Retrieve User Information
> GET /api/users/info

Response
```json
{
  "userId": "1",
  "firstName": "Mike",
  "lastName": "A",
  "email": "Mike@example.com",
  "phoneNumber": "123-456-7890",
  "country": "New Zealand",
  "city": "Hamilton",
  "dateOfBirth": "2000-01-01",
  "address": "181 collingwood street",
  "concessionUsed": 10,
  "concessionLeft": 5,
  "totalJoinedClasses": 30,
  "VIPLevel": 2,
  "attendanceRate": "90%"
}
```

### Update User Information
> PUT /api/users/info

Request
```json
{
  "firstName": "Mike",
  "lastName": "A",
  "email": "Mike@example.com",
  "phoneNumber": "123-456-7890",
  "country": "New Zealand",
  "city": "Hamilton",
  "dateOfBirth": "2000-01-01",
  "address": "181 collingwood street"
}
```

### Update Password
> PUT /api/users/password

Request
```json
{
  "oldPassword": "oldPasswd",
  "newPassword": "newPasswd"
}
```

### Class Attendance
> GET /api/users/attendance 

Response
```json
[
  {
    "className": "Yoga",
    "date": "2023-9-12T15:00:00Z",
    "checkInTime": "2023-9-12T15:02:00Z",
    "status": "Attended"
  },
  {
    "className": "Zumba",
    "date": "2023-9-14T15:00:00Z",
    "checkInTime": null,
    "status": "Absent"
  }
]
```

### Concession Log
> GET /api/users/concession

Response
```json
[
  {
    "transactionType": "Charge",
    "amount": 2,
    "date": "2023-9-01",
    "concessionLeft": 5
  },
  {
    "transactionType": "Use",
    "amount": 1,
    "date": "2023-9-02",
    "concessionLeft": 4
  },
  {
    "transactionType": "Charge",
    "amount": 3,
    "date": "2023-9-03",
    "concessionLeft": 7
  }
]
```



