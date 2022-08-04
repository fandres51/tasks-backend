CREATE TABLE "User" (
  "id" varchar UNIQUE PRIMARY KEY NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "type" varchar NOT NULL
);

CREATE TABLE "Class" (
  "id" varchar UNIQUE PRIMARY KEY NOT NULL,
  "code" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "teacher" varchar NOT NULL,
  "status" varchar NOT NULL DEFAULT 'student'
);

CREATE TABLE "Task" (
  "id" varchar UNIQUE PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL DEFAULT ' ',
  "due_date" timestamp NOT NULL,
  "class" varchar
);

CREATE TABLE "User_Class" (
  "user" varchar NOT NULL,
  "class" varchar NOT NULL,
  PRIMARY KEY ("user", "class")
);

CREATE TABLE "User_Task" (
  "user" varchar NOT NULL,
  "task" varchar NOT NULL,
  "completed" boolean NOT NULL DEFAULT false,
  PRIMARY KEY ("user", "task")
);

ALTER TABLE "Class" ADD FOREIGN KEY ("teacher") REFERENCES "User" ("id");

ALTER TABLE "Task" ADD FOREIGN KEY ("class") REFERENCES "Class" ("id");

ALTER TABLE "User_Class" ADD FOREIGN KEY ("user") REFERENCES "User" ("id");

ALTER TABLE "User_Class" ADD FOREIGN KEY ("class") REFERENCES "Class" ("id");

ALTER TABLE "User_Task" ADD FOREIGN KEY ("user") REFERENCES "User" ("id");

ALTER TABLE "User_Task" ADD FOREIGN KEY ("task") REFERENCES "Task" ("id");
