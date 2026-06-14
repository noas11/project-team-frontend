import axios from 'axios';
import { ProjectTeamMember } from '../types';

interface RawMember {
  name: string;
  roleDescription: string;
  mobile: string;
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 20000,
});

export async function fetchProjectTeam(opportunityId: string): Promise<ProjectTeamMember[]> {
  const response = await apiClient.get<RawMember[]>(
    `/api/project-team/${encodeURIComponent(opportunityId)}`
  );
  return response.data.map((member, index) => ({
    ...member,
    id: `${index}-${member.name}`,
  }));
}
