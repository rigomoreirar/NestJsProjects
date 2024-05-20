# Install Nest js Globally
npm i -g @nestjs/cli

# Create new Nest js project
nest new $ProjectName

# Create new Module (name in lower case)
nest g module $ModuleName

# Create new Controller (name in lower case)
nest g controller $ControllerName

# Create new Service (name in lower case)
nest g service $ServiceName

# A dependency that is fairly used in DTO
npm i @nestjs/mapped-types -D

# Nest js works well with class-validator, which provides validators as decorators
npm i --save class-validator class-transformer
https://github.com/typestack/class-validator#user-content-validation-decorators
https://docs.nestjs.com/pipes#class-validator

class-validator is for body, for params, Nest js offer built-in http exceptions like NotFoundException:
https://docs.nestjs.com/exception-filters#built-in-http-exceptions

# A good option as an ORM is prisma, and you can use Neon for db, both of these are good options for doing stuff fast
# Prisma latest version uses JOINS, so it's better

# For ruther information on postgres prisma migration visit docs
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql

# For creating a resource with all CRUD operations from the begining you can use (name in lower case)
nest g resource $ResourceName 


# For rate limiting use npm i @nestjs/throttler 