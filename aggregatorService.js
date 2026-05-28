```js id="h2qn7m"
import { requestWithTimeout }
from "../helpers/requestTimeout.js";

import { formatKeysToCamelCase }
from "../helpers/formatResponse.js";

const API_BASE =
    "http://localhost:4000/services";


// Reusable API Fetcher
const getApiData = async (endpoint) => {

    const apiResponse = await requestWithTimeout(
        fetch(endpoint),
        4000
    );

    return apiResponse.json();
};


export const fetchUserDashboard = async (profileId) => {

    // STEP 1 → Load Profile Data
    const profileData =
        await getApiData(
            `${API_BASE}/profiles/${profileId}`
        );


    // STEP 2 → Run APIs Together
    const apiResults = await Promise.allSettled([

        getApiData(
            `${API_BASE}/profiles/${profileId}/orders`
        ),

        getApiData(
            `${API_BASE}/products/trending`
        )
    ]);


    let orders = [];
    let trendingProducts = [];


    // Orders API
    if (apiResults[0].status === "fulfilled") {

        orders = apiResults[0].value;
    }


    // Trending Products API
    if (apiResults[1].status === "fulfilled") {

        trendingProducts = apiResults[1].value;
    }


    // Final Response Object
    const responsePayload = {

        profile: profileData,
        orders,
        trendingProducts
    };


    // Convert Keys
    return formatKeysToCamelCase(
        responsePayload
    );
};
```
