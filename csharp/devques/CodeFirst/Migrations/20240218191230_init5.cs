using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeFirst.Migrations
{
    public partial class init5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_questions_user_UserId1",
                table: "questions");

            migrationBuilder.DropIndex(
                name: "IX_questions_UserId1",
                table: "questions");

            migrationBuilder.DropColumn(
                name: "QuestionId",
                table: "user");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "questions");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId1",
                table: "categories",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_questions_UserId",
                table: "questions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_categories_CategoryId1",
                table: "categories",
                column: "CategoryId1");

            migrationBuilder.AddForeignKey(
                name: "FK_categories_categories_CategoryId1",
                table: "categories",
                column: "CategoryId1",
                principalTable: "categories",
                principalColumn: "CategoryId");

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
                name: "FK_categories_categories_CategoryId1",
                table: "categories");

            migrationBuilder.DropForeignKey(
                name: "FK_questions_user_UserId",
                table: "questions");

            migrationBuilder.DropIndex(
                name: "IX_questions_UserId",
                table: "questions");

            migrationBuilder.DropIndex(
                name: "IX_categories_CategoryId1",
                table: "categories");

            migrationBuilder.DropColumn(
                name: "CategoryId1",
                table: "categories");

            migrationBuilder.AddColumn<int>(
                name: "QuestionId",
                table: "user",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "questions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_questions_UserId1",
                table: "questions",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_questions_user_UserId1",
                table: "questions",
                column: "UserId1",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
