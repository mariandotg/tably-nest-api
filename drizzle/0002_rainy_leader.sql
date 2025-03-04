CREATE TABLE "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tab_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tab_groups" ADD CONSTRAINT "tab_groups_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;