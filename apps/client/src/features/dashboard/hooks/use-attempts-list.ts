import { RECENT_ATTEMPTS } from '../mock-data';

export function useAttemptsList() {
    const items = RECENT_ATTEMPTS
    return { items }
}