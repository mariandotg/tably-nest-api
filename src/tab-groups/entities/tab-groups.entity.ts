export class TabGroup {
  id: number;
  name: string;
  userId: number;
  pages: Page[];
}

export class Page {
  id: number;
  url: string;
}
