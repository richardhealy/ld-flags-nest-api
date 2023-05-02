import { useGetFlagValue } from '../providers/LaunchDarkly/LaunchDarkly';

// Problem: 
//     This should be coloured based on FF value
// Feature flag name: 
//     details-section-cta-colour
// Setup: 
//     Fill background color with flag value.
export const RequestReviewButton = () => {
  const detailsSectionCtaColour = useGetFlagValue("details-section-cta-colour");

  // For the sake for brevity, i'll just use inline styles here.
  const style = {
    backgroundColor: detailsSectionCtaColour ?? "inherit"
  }

  return (<button style={style}>Request doctor review</button>);
}