import useFormStore from '../store/useFormStore'
import useFormStep from '../store/useFormStep'
import { validateEducational } from '../assets/validators'
import {
  DEGREE_OPTIONS,
  YEAR_OPTIONS,
  GENDER_OPTIONS,
} from '../assets/constants'
import PageCard from '../components/pagecard'
import {
  Field,
  Input,
  Select,
  SectionLabel,
  ButtonRow,
  Button,
} from '../components/index'

const EducationalPage = () => {
  const { educational, updateEducational, setStep, markComplete } = useFormStore()
  const { errors, validate, handleChange } = useFormStep(
    educational,
    updateEducational,
    validateEducational
  )

  const handleNext = () => {
    if (!validate()) return
    markComplete(0)
    setStep(1)
  }

  const f = handleChange

  return (
    <PageCard
      icon="🎓"
      bgColor="rgba(79,110,247,0.12)"
      title="Educational Details"
      subtitle="Your current academic information and previous qualifications"
    >
      <SectionLabel>Personal Identity</SectionLabel>
      <div className="grid grid-3">
        <Field label="Full Name" required error={errors.fullName}>
          <Input
            placeholder="As per documents"
            value={educational.fullName}
            onChange={f('fullName')}
            error={errors.fullName}
          />
        </Field>
        <Field label="Date of Birth" required error={errors.dob}>
          <Input
            type="date"
            value={educational.dob}
            onChange={f('dob')}
            error={errors.dob}
          />
        </Field>
        <Field label="Gender" required error={errors.gender}>
          <Select
            value={educational.gender}
            onChange={f('gender')}
            error={errors.gender}
          >
            <option value="">Select gender</option>
            {GENDER_OPTIONS.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-2 mt-18">
        <Field label="Student ID / Roll No.">
          <Input
            placeholder="e.g. CS21B001"
            value={educational.studentId}
            onChange={f('studentId')}
          />
        </Field>
        <Field label="Institution / University" required error={errors.institution}>
          <Input
            placeholder="Full institution name"
            value={educational.institution}
            onChange={f('institution')}
            error={errors.institution}
          />
        </Field>
      </div>

      <SectionLabel>Current Program</SectionLabel>
      <div className="grid grid-3">
        <Field label="Degree / Program" required error={errors.degree}>
          <Select
            value={educational.degree}
            onChange={f('degree')}
            error={errors.degree}
          >
            <option value="">Select degree</option>
            {DEGREE_OPTIONS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </Field>
        <Field label="Branch / Specialization" required error={errors.branch}>
          <Input
            placeholder="e.g. Computer Science"
            value={educational.branch}
            onChange={f('branch')}
            error={errors.branch}
          />
        </Field>
        <Field label="Current Year" required error={errors.year}>
          <Select
            value={educational.year}
            onChange={f('year')}
            error={errors.year}
          >
            <option value="">Select year</option>
            {YEAR_OPTIONS.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-2 mt-18">
        <Field label="CGPA / GPA" error={errors.cgpa}>
          <Input
            type="number"
            step="0.01"
            min="0"
            max="10"
            placeholder="e.g. 8.5 out of 10"
            value={educational.cgpa}
            onChange={f('cgpa')}
            error={errors.cgpa}
          />
        </Field>
      </div>

      <SectionLabel>Previous Qualification (10+2 / Equivalent)</SectionLabel>
      <div className="grid grid-3">
        <Field label="Board Name">
          <Input
            placeholder="e.g. CBSE, ICSE, State"
            value={educational.board}
            onChange={f('board')}
          />
        </Field>
        <Field label="Passing Year" error={errors.passYear}>
          <Input
            type="number"
            min="1990"
            max="2030"
            placeholder="e.g. 2021"
            value={educational.passYear}
            onChange={f('passYear')}
            error={errors.passYear}
          />
        </Field>
        <Field label="Percentage / Grade">
          <Input
            placeholder="e.g. 92.4%"
            value={educational.percentage}
            onChange={f('percentage')}
          />
        </Field>
      </div>

      <ButtonRow>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Step 1 of 4</span>
        <Button variant="primary" onClick={handleNext}>
          Continue → Parents Info
        </Button>
      </ButtonRow>
    </PageCard>
  )
}

export default EducationalPage