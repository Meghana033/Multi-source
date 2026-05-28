```js id="c8mz1q"
import { fetchUserDashboard }
from "../services/dashboardService.js";

export const getDashboardData = async (req, res) => {

    try {

        const profileId = req.params.id;

        const dashboardData =
            await fetchUserDashboard(profileId);

        return res.status(200).json({
            status: "success",
            result: dashboardData
        });

    } catch (err) {

        return res.status(500).json({
            status: "failed",
            error: err.message
        });
    }
};
```
