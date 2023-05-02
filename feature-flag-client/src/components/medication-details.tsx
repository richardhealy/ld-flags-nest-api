import { useMedication } from '../mock-data';
import { RequestReviewButton } from './request-review-button';
import { useGetFlagValue } from '../providers/LaunchDarkly/LaunchDarkly';

// Problem: 
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name: 
//     profile-render-details-section
// Setup: 
//     Show to users with flag value 'variation'
export const MedicationDetails = () => { 
  const medication = useMedication();

  const profileRenderDetailsSection = useGetFlagValue("profile-render-details-section");

  return (
    <div>
      <ul>
        <li>Common side effects: {medication.sideEffects}</li>
        <li>Warning signs: {medication.warnings}</li>
      </ul>
      <p>Experiencing any of these? Please contact your doctor</p>
      { profileRenderDetailsSection === "variation" ? <RequestReviewButton /> : null }
    </div>
  )
}