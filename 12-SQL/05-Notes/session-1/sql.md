# mySQL

## Demo

- Open the [slide deck](https://docs.google.com/presentation/d/1In4Iv-dAv3A3BiU88duttuXpEPcvbr4Qf4RniD8EZsE/edit?usp=sharing)
- Open [01-Ins_MySQL-Shell](../activities/01-Ins_MySQL-Shell/README.md)
  - Windows: Can install mySQL from [here](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)
  - Mac: `brew install mysql`
- `mysql --version` will tell you if you have installed the client
- `mysql.server start`
- Need the `mysql` client
- `mysql -u root -p` to connect to the DB directly
- [DBeaver](https://dbeaver.io/): GUI to access the database.
- `CREATE DATABASE demo_db;`
- `source schema.sql`
- `quit`

### Useful commands

- `show databases;` to show all databases
- `select database();` Show the current database in use

## Try

- You should have mysql setup. We'll be using docker for the server. Setup instructions in [04-installation.md](./04-installation.md)
- Try [02-Stu_MySQL-Shell/README.md](../activities/02-Stu_MySQL-Shell/README.md)
