import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      nameVisible: true,
      gName: 'Guaning',
      xName: 'XiaoPeng',
      ageVisible: true,
      gAge: 21,
      xAge: 20
    }
  }
})