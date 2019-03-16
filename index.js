import RealTimeSpeedMeasurement from './Component/RealTimeSpeedMeasurement'

export {RealTimeSpeedMeasurement}

//If the user is introduced by script
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('RealTimeSpeedMeasurement', RealTimeSpeedMeasurement);
}