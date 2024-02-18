using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeFirst.Migrations
{
    public partial class init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Questions_QuestionId",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Users_UserId",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Categories_CategoryId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Companys_CompanyId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Users_UserId",
                table: "Questions");

            migrationBuilder.DropTable(
                name: "Companys");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Questions",
                table: "Questions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Answers",
                table: "Answers");

            migrationBuilder.RenameTable(
                name: "Questions",
                newName: "questions");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "categories");

            migrationBuilder.RenameTable(
                name: "Answers",
                newName: "answers");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_UserId",
                table: "questions",
                newName: "IX_questions_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_CompanyId",
                table: "questions",
                newName: "IX_questions_CompanyId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_CategoryId",
                table: "questions",
                newName: "IX_questions_CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Answers_UserId",
                table: "answers",
                newName: "IX_answers_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Answers_QuestionId",
                table: "answers",
                newName: "IX_answers_QuestionId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "questions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpload",
                table: "questions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Score",
                table: "questions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "date",
                table: "answers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_questions",
                table: "questions",
                column: "QuestionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_categories",
                table: "categories",
                column: "CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_answers",
                table: "answers",
                column: "AnswerId");

            migrationBuilder.CreateTable(
                name: "companies",
                columns: table => new
                {
                    CompanyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_companies", x => x.CompanyId);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.UserId);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_answers_questions_QuestionId",
                table: "answers",
                column: "QuestionId",
                principalTable: "questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_answers_user_UserId",
                table: "answers",
                column: "UserId",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_questions_categories_CategoryId",
                table: "questions",
                column: "CategoryId",
                principalTable: "categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_questions_companies_CompanyId",
                table: "questions",
                column: "CompanyId",
                principalTable: "companies",
                principalColumn: "CompanyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_questions_user_UserId",
                table: "questions",
                column: "UserId",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_answers_questions_QuestionId",
                table: "answers");

            migrationBuilder.DropForeignKey(
                name: "FK_answers_user_UserId",
                table: "answers");

            migrationBuilder.DropForeignKey(
                name: "FK_questions_categories_CategoryId",
                table: "questions");

            migrationBuilder.DropForeignKey(
                name: "FK_questions_companies_CompanyId",
                table: "questions");

            migrationBuilder.DropForeignKey(
                name: "FK_questions_user_UserId",
                table: "questions");

            migrationBuilder.DropTable(
                name: "companies");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropPrimaryKey(
                name: "PK_questions",
                table: "questions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_categories",
                table: "categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_answers",
                table: "answers");

            migrationBuilder.DropColumn(
                name: "DateUpload",
                table: "questions");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "questions");

            migrationBuilder.DropColumn(
                name: "date",
                table: "answers");

            migrationBuilder.RenameTable(
                name: "questions",
                newName: "Questions");

            migrationBuilder.RenameTable(
                name: "categories",
                newName: "Categories");

            migrationBuilder.RenameTable(
                name: "answers",
                newName: "Answers");

            migrationBuilder.RenameIndex(
                name: "IX_questions_UserId",
                table: "Questions",
                newName: "IX_Questions_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_questions_CompanyId",
                table: "Questions",
                newName: "IX_Questions_CompanyId");

            migrationBuilder.RenameIndex(
                name: "IX_questions_CategoryId",
                table: "Questions",
                newName: "IX_Questions_CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_answers_UserId",
                table: "Answers",
                newName: "IX_Answers_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_answers_QuestionId",
                table: "Answers",
                newName: "IX_Answers_QuestionId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Questions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Questions",
                table: "Questions",
                column: "QuestionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Answers",
                table: "Answers",
                column: "AnswerId");

            migrationBuilder.CreateTable(
                name: "Companys",
                columns: table => new
                {
                    CompanyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companys", x => x.CompanyId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Questions_QuestionId",
                table: "Answers",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Users_UserId",
                table: "Answers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Categories_CategoryId",
                table: "Questions",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Companys_CompanyId",
                table: "Questions",
                column: "CompanyId",
                principalTable: "Companys",
                principalColumn: "CompanyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Users_UserId",
                table: "Questions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
