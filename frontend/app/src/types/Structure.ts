import type { Page } from "./Page";

export interface StructureCard {
  documentId: string;
  title: string;
  description: string;
  page: Page;
}

export interface StructureSection {
  documentId: string;
  title: string;
}
