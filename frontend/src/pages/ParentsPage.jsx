import useFormStore from '../store/useFormStore'
import useFormStep from '../store/useFormStep'
import { validateParents } from '../assets/validators'
import { INCOME_OPTIONS } from '../assets/constants'
import PageCard from '../components/pagecard'
import {
  Field,
  Input,
  Select,
  SectionLabel,
  ButtonRow,
  Button,
} from '../components/index'

const ParentsPage = () => {
  const { parents, updateParents, setStep, markComplete } = useFormStore()
  const { errors, validate, handleChange } = useFormStep(
    parents,
    updateParents,
    validateParents
  )

  const handleNext = () => {
    if (!validate()) return
    markComplete(1)
    setStep(2)
  }

  const f = handleChange

  return (
    <PageCard
      icon="👨‍👩‍👧"
      bgColor="rgba(167,139,250,0.12)"
      title="Parent's / Guardian's Details"
      subtitle="Information about your parents or legal guardian"
    >
      <SectionLabel>Father's Information</SectionLabel>
      <div className="grid grid-2">
        <Field label="Father's Full Name" required error={errors.fatherName}>
          <Input
            placeholder="Full name"
            value={parents.fatherName}
            onChange={f('fatherName')}
            error={errors.fatherName}
          />
        </Field>
        <Field label="Occupation">
          <Input
            placeholder="e.g. Engineer, Business owner"
            value={parents.fatherOccupation}
            onChange={f('fatherOccupation')}
          />
        </Field>
        <Field label="Contact Number" error={errors.fatherContact}>
          <Input
            placeholder="10-digit mobile number"
            value={parents.fatherContact}
            onChange={f('fatherContact')}
            maxLength={10}
            error={errors.fatherContact}
          />
        </Field>
        <Field label="Email Address" error={errors.fatherEmail}>
          <Input
            type="email"
            placeholder="father@example.com"
            value={parents.fatherEmail}
            onChange={f('fatherEmail')}
            error={errors.fatherEmail}
          />
        </Field>
      </div>

      <SectionLabel>Mother's Information</SectionLabel>
      <div className="grid grid-2">
        <Field label="Mother's Full Name" required error={errors.motherName}>
          <Input
            placeholder="Full name"
            value={parents.motherName}
            onChange={f('motherName')}
            error={errors.motherName}
          />
        </Field>
        <Field label="Occupation">
          <Input
            placeholder="e.g. Teacher, Homemaker"
            value={parents.motherOccupation}
            onChange={f('motherOccupation')}
          />
        </Field>
        <Field label="Contact Number" error={errors.motherContact}>
          <Input
            placeholder="10-digit mobile number"
            value={parents.motherContact}
            onChange={f('motherContact')}
            maxLength={10}
            error={errors.motherContact}
          />
        </Field>
        <Field label="Email Address" error={errors.motherEmail}>
          <Input
            type="email"
            placeholder="mother@example.com"
            value={parents.motherEmail}
            onChange={f('motherEmail')}
            error={errors.motherEmail}
          />
        </Field>
      </div>

      <SectionLabel>Financial & Guardian Info</SectionLabel>
      <div className="grid grid-2">
        <Field label="Annual Family Income">
          <Select
            value={parents.annualIncome}
            onChange={f('annualIncome')}
          >
            <option value="">Select income range</option>
            {INCOME_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </Field>
        <Field label="Local Guardian (if applicable)">
          <Input
            placeholder="Guardian's full name"
            value={parents.guardian}
            onChange={f('guardian')}
          />
        </Field>
      </div>

      <ButtonRow>
        <Button variant="ghost" onClick={() => setStep(0)}>
          ← Back
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Continue → Temporary Address
        </Button>
      </ButtonRow>
    </PageCard>
  )
}

export default ParentsPage