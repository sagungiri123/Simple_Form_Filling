import useFormStore from '../store/useFormStore'
import useFormStep from '../store/useFormStep'
import { validateAddress } from '../assets/validators'
import { INDIAN_STATES, DURATION_OPTIONS } from '../assets/constants'
import PageCard from '../components/pagecard'
import {
  Field,
  Input,
  Select,
  SectionLabel,
  ButtonRow,
  Button,
} from '../components/index'

const TempAddressPage = () => {
  const { temporary, updateTemporary, setStep, markComplete } = useFormStore()
  const { errors, validate, handleChange } = useFormStep(
    temporary,
    updateTemporary,
    validateAddress
  )

  const handleNext = () => {
    if (!validate()) return
    markComplete(2)
    setStep(3)
  }

  const f = handleChange

  return (
    <PageCard
      icon="🏠"
      bgColor="rgba(245,158,11,0.12)"
      title="Temporary Address"
      subtitle="Your current residential address during the course of your studies"
    >
      <SectionLabel>Street Address</SectionLabel>
      <div className="grid" style={{ gap: 18 }}>
        <Field label="Address Line 1" required error={errors.line1}>
          <Input
            placeholder="Flat / House No., Building name, Street"
            value={temporary.line1}
            onChange={f('line1')}
            error={errors.line1}
          />
        </Field>
        <Field label="Address Line 2">
          <Input
            placeholder="Area, Colony, Locality (optional)"
            value={temporary.line2}
            onChange={f('line2')}
          />
        </Field>
        <Field label="Landmark">
          <Input
            placeholder="Nearby landmark — e.g. Opposite City Mall"
            value={temporary.landmark}
            onChange={f('landmark')}
          />
        </Field>
      </div>

      <SectionLabel>Location Details</SectionLabel>
      <div className="grid grid-3">
        <Field label="City / Town" required error={errors.city}>
          <Input
            placeholder="City"
            value={temporary.city}
            onChange={f('city')}
            error={errors.city}
          />
        </Field>
        <Field label="State" required error={errors.state}>
          <Select
            value={temporary.state}
            onChange={f('state')}
            error={errors.state}
          >
            <option value="">Select state</option>
            {INDIAN_STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field label="PIN Code" required error={errors.pincode}>
          <Input
            placeholder="6-digit PIN"
            value={temporary.pincode}
            onChange={f('pincode')}
            maxLength={6}
            error={errors.pincode}
          />
        </Field>
      </div>

      <div className="grid grid-2 mt-18">
        <Field label="Country">
          <Input
            value={temporary.country}
            onChange={f('country')}
          />
        </Field>
        <Field label="Duration of Stay">
          <Select
            value={temporary.duration}
            onChange={f('duration')}
          >
            <option value="">Select duration</option>
            {DURATION_OPTIONS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </Field>
      </div>

      <ButtonRow>
        <Button variant="ghost" onClick={() => setStep(1)}>
          ← Back
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Continue → Permanent Address
        </Button>
      </ButtonRow>
    </PageCard>
  )
}

export default TempAddressPage