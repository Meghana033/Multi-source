export const requestWithTimeout = (
    apiPromise,
    delay
) => {

    return Promise.race([

        apiPromise,

        new Promise((_, reject) => {

            setTimeout(() => {

                reject(
                    new Error("API Request Failed")
                );

            }, delay);
        })
    ]);
};
