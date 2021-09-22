import { types } from "../types/types";

export const openSnackBar = content => {
    const payload = content;
    return {
        type: types.activateSnackBar,
        payload
    }
}