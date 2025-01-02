import { Place } from "../lib/db/models/place.model.js";

export const appointmentController = {
    // Use Aggregate to query multiple collection and then merge data
    getAll: async (req, res) => {
        const filterby = req.query.filterby;
        const continent = req.query.continent;
        const country = req.query.country;

        // aggregation pipe line for filter places by given data
        const aggregationPipeline  = []
        
        if(filterby === "continent"){
            if(continent){
                aggregationPipeline.push({
                    $match : {
                        "continent" : continent
                    },
                    
                })
            }
        } else if(filterby === "country"){
            if(country){
                aggregationPipeline.push({
                    $match : {
                        "country" : country
                    },
                    
                })
            }
        }

        const places = await Place.aggregate(aggregationPipeline);

        // code carefully :D
        
        res.send({appointments: places});
    }

}