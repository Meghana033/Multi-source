const formatKeyName = (value) => {

    return value.replace(
        /_([a-z])/g,
        (_, letter) => letter.toUpperCase()
    );
};


export const formatKeysToCamelCase = (data) => {

    // Handle Arrays
    if (Array.isArray(data)) {

        return data.map((element) =>
            formatKeysToCamelCase(element)
        );
    }


    // Handle Objects
    if (
        data &&
        typeof data === "object"
    ) {

        const formattedObject = {};

        Object.keys(data).forEach((field) => {

            const updatedKey =
                formatKeyName(field);

            formattedObject[updatedKey] =
                formatKeysToCamelCase(
                    data[field]
                );
        });

        return formattedObject;
    }


    // Primitive Values
    return data;
};
