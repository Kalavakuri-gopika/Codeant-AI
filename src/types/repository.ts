export interface Repository {
  id: string;
  name: string;
  language: string;
  size: string;
  isPrivate: boolean;
  updatedAt: string;
}

export interface RepositoryFormData {
  url: string;
  name: string;
  isPrivate: boolean;
}