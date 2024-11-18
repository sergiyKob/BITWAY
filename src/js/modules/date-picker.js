import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';


function datePicker() {
    new AirDatepicker('#date', {
        locale: localeEn

    })

    new AirDatepicker('#time', {
        timepicker: true,
        onlyTimepicker: true,
        minHours: 9,
        maxHours: 18,
        minutesStep: 15
    });
}

export default datePicker;