import { PROFILE_INFO } from '../mock-data';

export function useUserInfo() {
    const items = {
        firstName: PROFILE_INFO.firstName,
        lastName: PROFILE_INFO.lastName,
        email: PROFILE_INFO.email,
        registeredAt: PROFILE_INFO.registeredAt,
    }

    return { items };
}