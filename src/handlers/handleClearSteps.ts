import {TourGuideClient} from "../Tour";

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
        if(tgInstance.options.debug) console.warn('Dialog is visible');
        return
    }

    // If tour group is defined clear only that group
    if(tourGroup) {
        tgInstance.options.steps = tgInstance.options.steps.filter((step) => step.group !== tourGroup)
    } else {
        tgInstance.options.steps = []
    }

    // Reset tour steps
    tgInstance.tourSteps = []
    tgInstance.activeStep = 0
}

export default handleClearSteps