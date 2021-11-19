
import { getSession } from "next-auth/react";
import clientPromise, { connectToDatabase } from "../../lib/mongodb";

const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCamoProgress(req, res)
        }

        case 'POST': {
            return addCamoProgress(req, res)
        }

        case 'PUT': {
            return updateCrop(req, res)
        }

        case 'DELETE': {
            return deleteCrop(req, res)
        }
    }
}

async function getCamoProgress(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()


        // fetch the posts
        let camoProgress = await db
            .collection('camoProgress')
            .toArray()
        // return the crops

        return res.json({
            message: JSON.parse(JSON.stringify(camoProgress)),
            success: true,
        })
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function addCamoProgress(req, res) {
    try {
        const session = await getSession({req})

        const { userId } = session
        // connect to the database
        let { db } = await connectToDatabase()


        let camoProgress = JSON.parse(req.body)
        camoProgress.userId = userId

        // add the crop
        await db.collection('camoProgressAR').findOneAndReplace(
            {
                "userId": userId
            },
            {
                camoProgress
            },
            {
                "returnNewDocument": true
            }
        )
        // return a message
        return res.json({
            message: 'Progress Saved',
            success: true,
        })
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function deleteCrop(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase()

        // Deleting the crop
        await db.collection('crops').deleteMany({
            cropName: req.body
        })

        // returning a message
        return res.json({
            message: 'Crop deleted successfully',
            success: true,
        })
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}