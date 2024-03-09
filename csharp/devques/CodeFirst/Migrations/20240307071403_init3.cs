using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeFirst.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_UserRatings_AnsId",
                table: "UserRatings",
                column: "AnsId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRatings_userId",
                table: "UserRatings",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRatings_answers_AnsId",
                table: "UserRatings",
                column: "AnsId",
                principalTable: "answers",
                principalColumn: "AnswerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserRatings_user_userId",
                table: "UserRatings",
                column: "userId",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRatings_answers_AnsId",
                table: "UserRatings");

            migrationBuilder.DropForeignKey(
                name: "FK_UserRatings_user_userId",
                table: "UserRatings");

            migrationBuilder.DropIndex(
                name: "IX_UserRatings_AnsId",
                table: "UserRatings");

            migrationBuilder.DropIndex(
                name: "IX_UserRatings_userId",
                table: "UserRatings");
        }
    }
}
