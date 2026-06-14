export interface ProjectTeamMember {
  id: string; // generated on client for DataGrid key
  name: string;
  roleDescription: string;
  mobile: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
