import { String, Number, InstanceOf, Record } from 'runtypes';

// Runtype for request body with DOB
const RequestBodyWithDOB = Record({
    name: String,
    dob: InstanceOf(Date),
    phoneNo: Number,
    email: String,
    password: String
});

// Runtype for request body without DOB
const RequestBodyWithoutDOB = Record({
    name: String,
    phoneNo: Number,
    email: String,
    password: String
});

// Runtype for request body for Login
const RequestBodyForLogin = Record({
    email: String,
    password: String
});

export {RequestBodyWithDOB, RequestBodyWithoutDOB, RequestBodyForLogin};