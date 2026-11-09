import { Timestamp } from "mongodb";

import mongoose, { Schema } from "mongoose";
const videoSchema = new mongooseSchema({
    videoFile:{
        type: String,
        requires:true
    },
    thumbnail:{
        type: String,
        requires:true
    },
    title:{
        type: String,
        requires:true
    },
    description:{
        type: String,
        requires:true
    },
    duration:{
        type: Number,
        requires:true
    },
    views:{
        type: String,
        default:0  
    },
    isPublished:{
        type: Boolean,
        default:true,
    } ,
    owner:{
        type: Schema.Types.ObjectId,
        ref:"user "
    }

},{Timestamp:true})
videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("video",videoSchema)
// bcrypr - helps to hash password