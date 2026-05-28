// Service API 1
export const fetchProfile = async (req, res) => {

    const profileId = req.params.id;

    setTimeout(() => {

        res.json({
            profile_id: profileId,
            first_name: "Meghana",
            last_name: "Sri",
            email_id: "meghana@gmail.com"
        });

    }, 1500);
};


// Service API 2
export const fetchOrders = async (req, res) => {

    const profileId = req.params.id;

    setTimeout(() => {

        res.json([
            {
                order_id: 201,
                product_name: "Wireless Headphones",
                ordered_by: profileId
            },
            {
                order_id: 202,
                product_name: "Gaming Keyboard",
                ordered_by: profileId
            }
        ]);

    }, 2500);
};


// Service API 3
export const fetchTrendingProducts = async (req, res) => {

    setTimeout(() => {

        res.json([
            {
                product_id: 501,
                product_title: "React.js Advanced Guide"
            },
            {
                product_id: 502,
                product_title: "Node.js API Development"
            }
        ]);

    }, 1200);
};
