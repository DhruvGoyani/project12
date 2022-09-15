import { deleterequest, getrequest, postrequest } from "../Request"


export const getallMedicinedata = (path) => {
    return getrequest('medicineData')
}

export const postallMedicinedata = (data) => {
    return postrequest('medicineData', data)
}

export const deleteallmedicinedata = (id) => {
    return deleterequest('medicineData' , id)
}