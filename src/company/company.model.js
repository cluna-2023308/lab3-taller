import { Schema, model } from "mongoose";

const companySchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        maxLength: [100, "Description cannot exceed 100 characters"]
    },
    impactLevel:{
        type: String,
        required: true,
        unique:true
    },
    yearTrajectory:{
        type: Number,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true,
        enum: ["TECHNOLOGY_CATEGORY", "HEALTH_CATEGORY", "FOOD_CATEGORY", "FASHION_CATEGORY", "EDUCATION_CATEGORY",
            "ENTRETAIMENT_CATEGORY", "FINANCE_CATEGORY", "TRASPORT_CATEGORY", "CONSTRUCTION_CATEGORY", "MARKETING_CATEGORY",
            "SPORT_CATEGORY", "GAME_CATEGORY", "TOY_CATEGORY", "SNEAKER_CATEGORY", "OTHER_CATEGORY"],
        default: "OTHER_CATEGORY"
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Company", companySchema)