import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseCreation1737721199323 implements MigrationInterface {
  name = 'DatabaseCreation1737721199323';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_account" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, CONSTRAINT "PK_6acfec7285fdf9f463462de3e9f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "workout_session" ("id" SERIAL NOT NULL, "personalWeight" integer NOT NULL, "workoutDate" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_9afb74a335d8e9fd266763779af" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise_session" ("id" SERIAL NOT NULL, "restingTime" TIMESTAMP NOT NULL, "workoutId" integer, CONSTRAINT "PK_b7e22b56ad69a3b716a49f0ea91" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."exercise_set_type_enum" AS ENUM('Warming', 'Normal')`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise_set" ("id" SERIAL NOT NULL, "weight" integer NOT NULL, "repetitions" integer NOT NULL, "type" "public"."exercise_set_type_enum" NOT NULL, "exerciseSessionId" integer, CONSTRAINT "PK_69cfb98aa32b1f317df60c81900" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "exerciseSetId" integer, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."muscle_group_enum" AS ENUM('Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps', 'Forearms', 'Core', 'Quads', 'Hamstrings', 'Calves', 'Glutes', 'Neck', 'Lower Back', 'Adductors', 'Abductors')`,
    );
    await queryRunner.query(
      `CREATE TABLE "muscle" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "group" "public"."muscle_group_enum" NOT NULL, "exerciseId" integer, CONSTRAINT "PK_cbce9889ea2f0fd84f740b5cbe2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "workout_session" ADD CONSTRAINT "FK_bf8e14b67cc83a8ae13fa3b1e49" FOREIGN KEY ("userId") REFERENCES "user_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_session" ADD CONSTRAINT "FK_bee378006ca29339888c86cc019" FOREIGN KEY ("workoutId") REFERENCES "workout_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_set" ADD CONSTRAINT "FK_f81b2277cf77bf5dfef9739df64" FOREIGN KEY ("exerciseSessionId") REFERENCES "exercise_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD CONSTRAINT "FK_a918181348d02dad681f9d7b4d5" FOREIGN KEY ("exerciseSetId") REFERENCES "exercise_set"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "muscle" ADD CONSTRAINT "FK_33a8eb75cd26c0bcd144bae2520" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "muscle" DROP CONSTRAINT "FK_33a8eb75cd26c0bcd144bae2520"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise" DROP CONSTRAINT "FK_a918181348d02dad681f9d7b4d5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_set" DROP CONSTRAINT "FK_f81b2277cf77bf5dfef9739df64"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_session" DROP CONSTRAINT "FK_bee378006ca29339888c86cc019"`,
    );
    await queryRunner.query(
      `ALTER TABLE "workout_session" DROP CONSTRAINT "FK_bf8e14b67cc83a8ae13fa3b1e49"`,
    );
    await queryRunner.query(`DROP TABLE "muscle"`);
    await queryRunner.query(`DROP TYPE "public"."muscle_group_enum"`);
    await queryRunner.query(`DROP TABLE "exercise"`);
    await queryRunner.query(`DROP TABLE "exercise_set"`);
    await queryRunner.query(`DROP TYPE "public"."exercise_set_type_enum"`);
    await queryRunner.query(`DROP TABLE "exercise_session"`);
    await queryRunner.query(`DROP TABLE "workout_session"`);
    await queryRunner.query(`DROP TABLE "user_account"`);
  }
}
