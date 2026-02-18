import { create } from 'zustand'
import {  persist } from 'zustand/middleware'

// ── Initial State Slices ──────────────────────────────────────────────────────

const initialEducational = {
  fullName:    '',
  dob:         '',
  gender:      '',
  studentId:   '',
  institution: '',
  degree:      '',
  branch:      '',
  year:        '',
  cgpa:        '',
  board:       '',
  passYear:    '',
  percentage:  '',
}

const initialParents = {
  fatherName:       '',
  fatherOccupation: '',
  fatherContact:    '',
  fatherEmail:      '',
  motherName:       '',
  motherOccupation: '',
  motherContact:    '',
  motherEmail:      '',
  annualIncome:     '',
  guardian:         '',
}

const initialAddress = {
  line1:    '',
  line2:    '',
  city:     '',
  state:    '',
  pincode:  '',
  country:  'India',
  landmark: '',
}

const initialTemporary = {
  ...initialAddress,
  duration: '',
}

const initialPermanent = {
  ...initialAddress,
  sameAsTemp: false,
}

// ── Store ─────────────────────────────────────────────────────────────────────

const useFormStore = create(
  persist(
    (set, get) => ({
      // ── Navigation ─────────────────────────────────────────────────────────
      currentStep:    0,
      completedSteps: [],

      // ── Data Slices ────────────────────────────────────────────────────────
      educational: { ...initialEducational },
      parents:     { ...initialParents },
      temporary:   { ...initialTemporary },
      permanent:   { ...initialPermanent },

      // ── Navigation Actions ─────────────────────────────────────────────────
      setStep: (step) => set({ currentStep: step }, false, 'setStep'),

      markComplete: (step) =>
        set(
          (state) => ({
            completedSteps: [...new Set([...state.completedSteps, step])],
          }),
          false,
          'markComplete'
        ),

      goToNextStep: () =>
        set(
          (state) => ({ currentStep: state.currentStep + 1 }),
          false,
          'goToNextStep'
        ),

      goToPrevStep: () =>
        set(
          (state) => ({ currentStep: Math.max(0, state.currentStep - 1) }),
          false,
          'goToPrevStep'
        ),

      // ── Data Update Actions ────────────────────────────────────────────────
      updateEducational: (data) =>
        set(
          (state) => ({ educational: { ...state.educational, ...data } }),
          false,
          'updateEducational'
        ),

      updateParents: (data) =>
        set(
          (state) => ({ parents: { ...state.parents, ...data } }),
          false,
          'updateParents'
        ),

      updateTemporary: (data) =>
        set(
          (state) => ({ temporary: { ...state.temporary, ...data } }),
          false,
          'updateTemporary'
        ),

      updatePermanent: (data) =>
        set(
          (state) => ({ permanent: { ...state.permanent, ...data } }),
          false,
          'updatePermanent'
        ),

      // ── Special Actions ────────────────────────────────────────────────────
      setSameAsTemp: (val) =>
        set(
          (state) => ({
            permanent: val
              ? {
                  line1:      state.temporary.line1,
                  line2:      state.temporary.line2,
                  city:       state.temporary.city,
                  state:      state.temporary.state,
                  pincode:    state.temporary.pincode,
                  country:    state.temporary.country,
                  landmark:   state.temporary.landmark,
                  sameAsTemp: true,
                }
              : { ...state.permanent, sameAsTemp: false },
          }),
          false,
          'setSameAsTemp'
        ),

      resetForm: () =>
        set(
          {
            currentStep:    0,
            completedSteps: [],
            educational:    { ...initialEducational },
            parents:        { ...initialParents },
            temporary:      { ...initialTemporary },
            permanent:      { ...initialPermanent },
          },
          false,
          'resetForm'
        ),

      // ── Selectors (computed) ───────────────────────────────────────────────
      getProgressPercent: () => {
        const { completedSteps } = get()
        return Math.round((completedSteps.length / 4) * 100)
      },

      isStepClickable: (step) => {
        const { completedSteps } = get()
        return completedSteps.includes(step)
      },
    }),
    { name: 'StudentRegistrationStore' }
  )
)

export default useFormStore