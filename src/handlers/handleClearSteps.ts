import {TourGuideClient} from "../Tour";
import {TourGuideStep} from "../types/TourGuideStep";

/**
 * handleClearSteps
 * @param tourGroup
 */
function handleClearSteps(this: TourGuideClient, tourGroup?: string) {

    // TS build strict check
    if(!this.options.steps) return

    const tgInstance = this

    // Prevent changes if dialog is visible
    if(tgInstance.isVisible) {
        if(tgInstance.options.debug) console.warn('Dialog is visible')
        return
    }

    // If tour group is defined clear only that group
    if(tourGroup) {
        tgInstance.options.steps = tgInstance.options.steps.filter((step : TourGuideStep)=>{
            return step.group !== tourGroup
        })
        
        tgInstance.tourSteps = tgInstance.tourSteps.filter((step : TourGuideStep)=>{
            return step.group !== tourGroup
        })

        // If tour group is active, reset tour
        if (tourGroup === tgInstance.group) {
            tgInstance.group = ""
            tgInstance.activeStep = 0
        }
    } else {
        // Reset tour steps
        tgInstance.options.steps = []
        tgInstance.tourSteps = []
        tgInstance.activeStep = 0
    }

}

export default handleClearSteps