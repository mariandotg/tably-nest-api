ALTER TABLE "tab_group_pages" ADD COLUMN "title" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tab_group_pages" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "tab_group_pages" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "tab_groups" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "tab_groups" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "pages" DROP COLUMN "title";