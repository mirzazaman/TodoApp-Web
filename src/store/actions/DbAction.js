import { db } from "../../config/Firebase"
import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "../../constants/Types"


export const getData = (setTaskState, uid) => async (dispatch) => {
    try {
        setTaskState(true)
        let res = await db.collection("Tasks").doc(uid).collection('tasks').get()
        let data = []

        res.forEach((doc) => {
            data.push({
                docID: doc.id,
                ...doc.data()
            })
        })

        dispatch({
            type: GET_DATA,
            payload: data
        })

    } catch (error) {
        console.log("Error in getData Action", error)

    } finally {
        setTaskState(false)
    }
}

export const addData = (data, uid, setAddTaskState) => async (dispatch) => {
    try {
        setAddTaskState(true)
        await db.collection("Tasks").doc(uid).collection('tasks').add(data)

        dispatch({
            type: ADD_DATA,
            payload: data
        })

    } catch (error) {
        console.log("Error in addData Action", error)

    } finally {
        setAddTaskState(false)
    }
}

export const updateData = (data, docID, uid) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).update(data)

        dispatch({
            type: UPDATE_DATA,
            payload: { docID, data }
        })

    } catch (error) {
        console.log("Error in updateData Action", error)

    } finally {

    }
}

export const deleteData = (docID, uid) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).delete()

        dispatch({
            type: DELETE_DATA,
            payload: docID,
        })

    } catch (error) {
        console.log("Error in deleteData Action", error)

    } finally {

    }
}