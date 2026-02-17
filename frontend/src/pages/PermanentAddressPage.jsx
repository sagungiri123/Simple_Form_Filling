import useFormStore from '../store/useFormStore'
import useFormStep from '../store/useFormStep'
import { validateAddress } from '../assets/validators'
import { INDIAN_STATES } from '../assets/constants'
import PageCard from '../components/pagecard'
import {
  Field,
  Input,
  Select,
  ToggleRow,
  SectionLabel,
  ButtonRow,
  Button,
} from '../components/index'

const PermanentAddressPage = () => {
  const {
    permanent,
    updatePermanent,
    setSameAsTemp,
    setStep,
    markComplete,
  } = useFormStore()

  const { errors, validate, handleChange, clearAllErrors } = useFormStep(
    permanent,
    updatePermanent,
    validateAddress
  )

  const handleSubmit = () => {
    if (!validate()) return
    markComplete(3)
    setStep(4)
  }

  const handleToggleSame = () => {
    setSameAsTemp(!permanent.sameAsTemp)
    clearAllErrors()
  }

  const f = handleChange
  const disabled = permanent.sameAsTemp

  return (
    <PageCard
      icon="📍"
      bgColor="rgba(52,211,153,0.12)"
      title="Permanent Address"
      subtitle="Your home address for official correspondence and records"
    >
      <ToggleRow
        checked={permanent.sameAsTemp}
        onChange={handleToggleSame}
        label="Same as Temporary Address — auto-fill details from the previous step"
      />

      <SectionLabel>Street Address</SectionLabel>
      <div className="grid" style={{ gap: 18 }}>
        <Field label="Address Line 1" required error={errors.line1}>
          <Input
            placeholder="Flat / House No., Building name, Street"
            value={permanent.line1}
            onChange={f('line1')}
            error={errors.line1}
            disabled={disabled}
          />
        </Field>
        <Field label="Address Line 2">
          <Input
            placeholder="Area, Colony, Locality (optional)"
            value={permanent.line2}
            onChange={f('line2')}
            disabled={disabled}
          />
        </Field>
        <Field label="Landmark">
          <Input
            placeholder="Nearby landmark (optional)"
            value={permanent.landmark}
            onChange={f('landmark')}
            disabled={disabled}
          />
        </Field>
      </div>

      <SectionLabel>Location Details</SectionLabel>
      <div className="grid grid-3">
        <Field label="City / Town" required error={errors.city}>
          <Input
            placeholder="City"
            value={permanent.city}
            onChange={f('city')}
            error={errors.city}
            disabled={disabled}
          />
        </Field>
        <Field label="State" required error={errors.state}>
          <Select
            value={permanent.state}
            onChange={f('state')}
            error={errors.state}
            disabled={disabled}
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
            value={permanent.pincode}
            onChange={f('pincode')}
            maxLength={6}
            error={errors.pincode}
            disabled={disabled}
          />
        </Field>
      </div>

      <div className="grid grid-2 mt-18">
        <Field label="Country">
          <Input
            value={permanent.country}
            onChange={f('country')}
            disabled={disabled}
          />
        </Field>
      </div>

      <ButtonRow>
        <Button variant="ghost" onClick={() => setStep(2)}>
          ← Back
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          ✓ Submit Application
        </Button>
      </ButtonRow>
    </PageCard>
  )
}

export default PermanentAddressPage