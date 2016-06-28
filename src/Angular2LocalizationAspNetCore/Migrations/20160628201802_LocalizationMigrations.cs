using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2LocalizationAspNetCore.Migrations
{
    public partial class LocalizationMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LocalizationRecords",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Key = table.Column<string>(nullable: false),
                    LocalizationCulture = table.Column<string>(nullable: false),
                    ResourceKey = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    UpdatedTimestamp = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LocalizationRecords", x => x.Id);
                    table.UniqueConstraint("AK_LocalizationRecords_Key_LocalizationCulture", x => new { x.Key, x.LocalizationCulture });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LocalizationRecords");
        }
    }
}
