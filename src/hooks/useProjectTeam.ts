import { useState, useCallback } from 'react';
import { ProjectTeamMember, LoadingState } from '../types';
import { fetchProjectTeam } from '../api/projectTeam';

export function useProjectTeam() {
  const [data, setData] = useState<ProjectTeamMember[]>([]);
  const [state, setState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [currentOpportunityId, setCurrentOpportunityId] = useState<string>('');

  const load = useCallback(async (opportunityId: string) => {
    if (!opportunityId.trim()) return;
    setState('loading');
    setError(null);
    setCurrentOpportunityId(opportunityId);
    try {
      const team = await fetchProjectTeam(opportunityId.trim());
      setData(team);
      setState('success');
    } catch (err: unknown) {
      const message =
        err &&
        typeof err === 'object' &&
        'response' in err &&
        (err as { response?: { data?: { message?: string } } }).response?.data?.message
          ? (err as { response: { data: { message: string } } }).response.data.message
          : 'אירעה שגיאה בטעינת הנתונים';
      setError(message);
      setState('error');
    }
  }, []);

  const retry = useCallback(() => {
    if (currentOpportunityId) load(currentOpportunityId);
  }, [currentOpportunityId, load]);

  return { data, state, error, load, retry };
}
