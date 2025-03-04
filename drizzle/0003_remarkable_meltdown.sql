CREATE TABLE "tab_group_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"tab_group_id" integer NOT NULL,
	"page_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tab_group_pages" ADD CONSTRAINT "tab_group_pages_tab_group_id_tab_groups_id_fk" FOREIGN KEY ("tab_group_id") REFERENCES "public"."tab_groups"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tab_group_pages" ADD CONSTRAINT "tab_group_pages_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE no action ON UPDATE no action;