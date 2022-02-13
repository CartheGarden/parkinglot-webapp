import axios from "axios";

axios.defaults.baseURL = "http://localhost:41000/api";

export default {
    getParkingSpace (parkingLockId) {
        return axiosInstance({
            method: "get",
            url: "parkingspace/"+parkingLockId,
        })
    },
    getUsage (id) {
        return axiosInstance({
            method: "get",
            url: "usage/"+id,
        })
    },
    useParkingSpace (naverId, parkingSpaceId) {
        return axiosInstance({
            method: "post",
            url: "usage/",
            data: {
                naverId: naverId,
                parkingSpaceId: parkingSpaceId,
            }
        })
    }
}



async function axiosInstance({method, url, ...options}){

    const { data={}, params={} } = options;

    const request = {
        method: method,
        url: url,
        params: params,
        data: data,
    }

    try {
        return await axios(request);
    } catch (err) {
        console.log(err);
    }    
}