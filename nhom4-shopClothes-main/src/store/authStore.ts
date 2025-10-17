import { create } from 'zustand';


type User = { email: string; name?: string }


type AuthState = {
user: User | null
setUser: (u: User | null) => void
logout: () => void
}


export const useAuthStore = create<AuthState>((set) => ({
user: null,
setUser: (u) => set({ user: u }),
logout: () => {
localStorage.removeItem('token')
set({ user: null })
},
}))