# Angular-Projects
Service ==> A class with specific purpose. 
Why we need services : 1) Share Data accross multiple components. 2)Implement application logic. 3)External interactions-connecting to database.
Service class naming convention ==> .service.ts
3-Steps to use Services in Angular
1)Define a EmployeeService class. ==> Angular CLI command to generate service ==> ng g s EmployeeService
2)Register with Injector. ==> If we don't register a injector service is just a normal class.
3)Declare as dependency in EmpList and EmpDetails.

Dependency Injection:
  DI is a coding patter in which a class recieves its dependencies from external sources rather than creating them itself.
  Dependency is specified under constructor.
