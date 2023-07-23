import axios from 'axios'

const API_URL = '/api/data/'


// create new data

const createData = async (userListData, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    //console.log("in dataService: ",userListData);
    //console.log("in dataService: ",config);

    const response = await axios.post(API_URL, userListData, config)

    //console.log(response);
    return response.data
}



// get goals
const getData = async (token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    //console.log("Get Data Service", config);
    const response = await axios.get(API_URL, config)
    //console.log("Get Data Service", response.data);

    return response.data
}


// update data

const updateData = async (dataId, userListData, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    const response = await axios.put(API_URL + dataId, userListData, config)
    console.log("Update Data Service", response.data);
    return response.data
}




// delete goals

const deleteData = async (dataId, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    const response = await axios.delete(API_URL + dataId, config)
    console.log("Delete Data Service", response.data);
    return response.data
}





const dataService = {
    createData,
    getData,
    updateData,
    deleteData
}

export default dataService