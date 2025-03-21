export class TabGroup {
  id: string;
  name: string;
  //userId: number;
  pages: Page[];
}

export class Page {
  id: number;
  url: string;
}
