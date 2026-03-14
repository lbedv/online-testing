import { PROFILE_INFO } from '../mock-data';

export function useUserInfo() {
    const items = {
        firstName: PROFILE_INFO.firstName,
        lastName: PROFILE_INFO.lastName,
    }

    return { items };
}